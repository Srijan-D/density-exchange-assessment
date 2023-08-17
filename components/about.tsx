import Image from "next/image"
import homeowl from "public/home_owel.svg"

import { MotionDiv } from "./motion-div-wrapper"

export function About() {
  return (
    <div className="my-10 space-y-6 rounded-3xl bg-[#fef6f0] p-5 py-20">
      <MotionDiv
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="mb-18 ml-20 space-y-6 tracking-widest"
      >
        <p className="text-2xl">Built out of frustation</p>
        <h1 className="text-5xl font-bold ">Meet the ahead app</h1>
      </MotionDiv>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <Image src={homeowl} alt="home owl" className="w-56 " />
        </div>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className=" z-10 px-20 text-lg font-medium tracking-wide text-gray-500"
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s,
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>
        </MotionDiv>
      </div>
    </div>
  )
}
