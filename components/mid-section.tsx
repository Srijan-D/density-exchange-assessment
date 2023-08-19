import { MotionDiv } from "./motion-div-wrapper"

export function MidSection() {
  return (
    <section className="mt-28 flex flex-col gap-8 px-8 text-center md:mt-40 md:flex-row md:gap-6 md:px-40 md:text-start">
      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-[0.4]  items-start justify-center gap-6 text-xl font-bold text-[#212121] md:text-3xl"
      >
        Be the best you
        <br />
        with EQ
      </MotionDiv>
      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mx-5 flex flex-[0.3] items-start justify-center text-lg font-semibold text-[#363636]"
      >
        Not having your own emotions under control might be holding you back.
        Not having.
      </MotionDiv>
      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.6,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mx-5 flex flex-[0.3] items-start justify-center text-lg font-semibold text-[#363636]"
      >
        Additionally, not understanding those of others stops you from being
        parent, friend you can be.
      </MotionDiv>
    </section>
  )
}
