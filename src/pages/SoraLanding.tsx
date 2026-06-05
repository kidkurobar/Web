import { useEffect } from 'react'
import { useLocation } from 'wouter'

// /sora — URL สำหรับ Sora ส่งลูกค้ามา
// track ได้ว่ามาจาก Sora outreach
// redirect ไปหน้าหลักทันที

export default function SoraLanding() {
  const [, setLocation] = useLocation()

  useEffect(() => {
    // บันทึก source ไว้ใน sessionStorage เพื่อ track
    sessionStorage.setItem('utm_source', 'sora')
    sessionStorage.setItem('utm_medium', 'outreach')
    sessionStorage.setItem('utm_campaign', 'sora_b2b')

    // redirect ไปหน้าหลัก
    setLocation('/')
  }, [setLocation])

  return null
}
