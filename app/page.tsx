import { About } from "@/components/about"
import { EQ } from "@/components/eq-section"
import { Footer } from "@/components/footer"
import { Main } from "@/components/main"
import { MidSection } from "@/components/midSection"
import { Signature } from "@/components/signature"
import { Timeline } from "@/components/timeline"
import { Vacancies } from "@/components/vacancies"
import { WorkWithUs } from "@/components/workWithUs"

export default function Home() {
  return (
    <main className="overflow-hidden px-12">
      <Main />
      <EQ />
      <About />
      <Timeline />
      <MidSection />
      <Signature />
      <WorkWithUs />
      <Vacancies />
      <Footer />
    </main>
  )
}
