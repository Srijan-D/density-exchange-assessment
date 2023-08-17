import { About } from "@/components/about"
import { EQ } from "@/components/eq-section"
import { Main } from "@/components/main"

export default function Home() {
  return (
    <main className="overflow-hidden px-12">
      <Main />
      <EQ />
      <About />
    </main>
  )
}
