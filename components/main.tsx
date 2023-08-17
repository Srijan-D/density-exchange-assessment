import Image from "next/image"
import mobile from "public/mobile.png"
import { AiFillStar } from "react-icons/ai"

import { DownloadButton } from "./download-button"
import { MotionDiv } from "./motion-div-wrapper"

export function Main() {
  return (
    <div className="grid h-3/4 grid-cols-2 items-center rounded-3xl bg-[#EFECFF] p-10 align-middle">
      <MotionDiv
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0.25 }}
        transition={{ duration: 1, type: "keyframes" }}
        className="flex flex-col space-y-9"
      >
        <p className="text-2xl font-medium">Ahead App</p>

        <p className="font-semibold text-black md:text-7xl">
          Make your life by mastering emotions
        </p>
        <div className="flex space-x-6">
          <DownloadButton />
          <div className="flex flex-col">
            <div className="flex gap-2 text-xl text-yellow-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-sm text-gray-700">100+ Appstore reviews</p>
          </div>
        </div>
      </MotionDiv>
      <div className="flex justify-center">
        <Image
          className="w-11/12 rounded-3xl"
          src={mobile}
          alt="mobile-vector"
        />
      </div>
    </div>
  )
}
