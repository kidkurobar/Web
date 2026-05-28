import ContactSection from '../components/ContactSection'
import { processSteps } from '../data'
import { ArrowRight } from 'lucide-react'

export default function Process() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-3">ขั้นตอนการทำงาน</h1>
            <p className="text-gray-500">
              กระบวนการผลิตของเรามีความชัดเจนและเป็นระบบ เพื่อให้คุณได้สินค้าที่ดีที่สุด
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {processSteps.slice(0, 4).map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <div className="w-10 h-10 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-lg mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-8 -right-2 z-10 items-center">
                    <ArrowRight size={16} className="text-[#F97316]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {processSteps.slice(4).map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <div className="w-10 h-10 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-lg mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-8 -right-2 z-10 items-center">
                    <ArrowRight size={16} className="text-[#F97316]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
