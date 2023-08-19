import Image from "next/image"

import { MotionDiv } from "./motion-div-wrapper"

export function Footer() {
  return (
    <MotionDiv
      initial={{ y: 40, opacity: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="mt-24  flex items-center justify-center border-t-4 "
    >
      <div className="mt-12 flex flex-col items-center justify-center gap-4 md:mt-24 md:px-40">
        <Image
          src="/logo.jpg"
          width={55}
          height={55}
          alt="Logo"
          className="rounded-lg"
        />
        <h1 className="text-3xl font-bold text-[#6B4DEE] ">ahead</h1>

        <div className="my-4 flex flex-col items-center justify-center md:flex-row">
          <div className="flex  cursor-pointer items-center justify-center text-sm font-semibold">
            <Image
              src="/location.svg"
              width={30}
              height={30}
              alt="location"
              className="mr-2"
            />
            Level 5, Trifecta Adatto, Banglore
          </div>
          <div className="ml-12 flex cursor-pointer items-center justify-center text-sm font-semibold">
            <Image
              src="/mail.svg"
              width={30}
              height={30}
              alt="mail"
              className="mr-2"
            />
            hi@ahead-app.com
          </div>
        </div>
        <MotionDiv
          initial={{ scale: 0, opacity: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex h-16 w-40 items-center justify-center rounded-md bg-black "
        >
          <Image src="/app-store.svg" width={35} height={35} alt="Logo" />
          <div className="flex flex-[0.9] flex-col text-white ">
            <p className="text-center text-xs font-medium">Download on the</p>
            <p className="text-center text-lg font-semibold">App Store</p>
          </div>
        </MotionDiv>
        <p className="my-4 flex text-sm font-semibold text-[#535353]">
          &copy; 2023 Ahead app.All rights reserved
        </p>
      </div>
    </MotionDiv>
  )
}
