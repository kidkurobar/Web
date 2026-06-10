import React, { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Router } from 'wouter'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import App from './src/App'
import { allRoutes, metaForPath, BASE_URL, DEFAULT_OG_IMAGE } from './src/seo'

const DIST = 'dist'
const template = readFileSync(join(DIST, 'index.html'), 'utf-8')

function buildHead(path: string): string {
  const m = metaForPath(path)
  const url = `${BASE_URL}${path}`
  const tags = [
    `<title>${m.title}</title>`,
    `<meta name="description" content="${m.description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${m.title}" />`,
    `<meta property="og:description" content="${m.description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${m.ogImage || DEFAULT_OG_IMAGE}" />`,
    `<meta property="og:type" content="website" />`,
  ]
  if (m.noindex) tags.push(`<meta name="robots" content="noindex" />`)
  return tags.join('\n    ')
}

function renderPage(path: string): string {
  const appHtml = renderToString(
    <StrictMode>
      <Router ssrPath={path}>
        <App />
      </Router>
    </StrictMode>,
  )

  let html = template.replace('<!--app-html-->', appHtml)

  // Replace default <title> + description with per-page head
  html = html.replace(/<title>.*?<\/title>/s, '<!--head-->')
  html = html.replace(
    /<meta name="description"[^>]*>/,
    '',
  )
  html = html.replace('<!--head-->', buildHead(path))

  return html
}

function outPath(path: string): string {
  if (path === '/') return join(DIST, 'index.html')
  return join(DIST, path.replace(/^\//, ''), 'index.html')
}

const routes = allRoutes()
for (const r of routes) {
  const html = renderPage(r.path)
  const file = outPath(r.path)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  console.log('prerendered', r.path, '→', file)
}

console.log(`\n✓ prerendered ${routes.length} routes`)
