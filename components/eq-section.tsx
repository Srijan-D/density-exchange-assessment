import Image from "next/image"
import angryGhost from "public/ghost-cute.gif"

import { MotionDiv } from "./motion-div-wrapper"
import { MotionHeading } from "./motion-wrapper"
import { Slider } from "./slider"

export function EQ() {
  return (
    <div>
      <div className="my-6 grid grid-cols-3 justify-between">
        <div className=" p-6 text-4xl font-bold">EQ beats IQ</div>
        <div className=" p-6 text-lg font-medium tracking-wide text-gray-500">
          {" "}
          People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happierand have healthier relationships.{" "}
        </div>
        <div className=" p-6 text-lg font-medium tracking-wide text-gray-500">
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $ 29k a year
        </div>
      </div>
      <div>
        <div className="flex">
          <MotionHeading

            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="p-6 text-4xl font-bold"
          >
            Does this sound familiar...
          </MotionHeading>
          <MotionDiv
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="w-20"
          >
            <Image
              src={angryGhost}
              alt="angry-ghost"
              width={100}
              height={100}
            />
          </MotionDiv>
        </div>
        <div className="mb-20">
          <Slider />
        </div>
      </div>
    </div>
  )
}
