import { About } from "@/components/about"
import { EQ } from "@/components/eq-section"
import { Main } from "@/components/main"
import { Timeline } from "@/components/timeline"

export default function Home() {
  return (
    <main className="overflow-hidden px-12">
      <Main />
      <EQ />
      <About />
      <Timeline />
    </main>
  )
}
