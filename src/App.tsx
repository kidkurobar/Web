import { Route, Switch } from 'wouter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Showcase from './pages/Showcase'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/products/:slug" component={ProductDetail} />
          <Route path="/process" component={Process} />
          <Route path="/contact" component={Contact} />
          <Route path="/showcase" component={Showcase} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
