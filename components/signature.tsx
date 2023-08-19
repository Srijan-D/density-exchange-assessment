import Image from "next/image"

import { MotionDiv } from "./motion-div-wrapper"

export function Signature() {
  return (
    <section className="mt-40 flex items-center justify-center px-4  md:px-24 ">
      <MotionDiv
        initial={{ y: 80, opacity: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-3 text-center"
      >
        <p className="text-sm font-semibold text-[#333333] ">
          We take privacy seriously
        </p>
        <h1 className="text-3xl font-bold text-black">
          Before you get started
        </h1>
        <p className="text-lg font-semibold text-[#535353]">
          &quot;We wont share answers with anyone (and won&apos;t ever tell
          <br />
          you which friends said what about you)&quot;
        </p>
        <div className="flex items-center justify-center text-center">
          <p className="my-2 inline text-sm font-semibold text-[#363636]">
            with love,{" "}
          </p>
          <Image
            src="/signature.svg"
            alt="signature"
            width={150}
            height={150}
            className="ml-2 inline"
          />
        </div>
        <MotionDiv
          initial={{ scale: 0, opacity: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-2 flex items-center justify-center rounded-[50px] bg-black px-6 py-3 text-[#f3f3f3] shadow-2xl duration-300 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          Start a test
        </MotionDiv>
        <p className="text-sm font-medium text-[#808080] ">
          Takes only 5 minutes
        </p>
      </MotionDiv>
    </section>
  )
}
