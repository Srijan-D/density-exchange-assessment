import { About } from "@/components/about"
import { EQ } from "@/components/eq-section"
import { Footer } from "@/components/footer"
import { Main } from "@/components/main"
import { MidSection } from "@/components/mid-section"
import { Signature } from "@/components/signature"
import { SocialCard } from "@/components/social-card"
import { Timeline } from "@/components/timeline"
import { Vacancies } from "@/components/vacancies"
import { WorkWithUs } from "@/components/work-with-us"

export default function Home() {
  return (
    <main className="overflow-hidden px-12">
      <Main />
      <EQ />
      <About />
      <Timeline />
      <MidSection />
      <SocialCard />
      <Signature />
      <WorkWithUs />
      <Vacancies />
      <Footer />
    </main>
  )
}
