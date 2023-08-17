"use client"

import Image from "next/image"
import angryGhost from "public/ghost-cute.gif"

import { Slider } from "./slider"

export function EQ() {
  return (
    <div>
      <div className="my-6 grid grid-cols-3 justify-between">
        <div className=" p-6 text-4xl font-bold">EQ beats IQ</div>
        <div className=" p-6 text-lg font-medium tracking-wide text-gray-500">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s{" "}
        </div>
        <div className=" p-6 text-lg font-medium tracking-wide text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </div>
      </div>
      <div>
        <div className="flex">
          <h1
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="p-6 text-4xl font-bold"
          >
            Does this sound familiar...
          </h1>
          <Image
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-20"
            src={angryGhost}
            alt="angry-ghost"
          />
        </div>
        <div className="mb-20">
          <Slider />
        </div>
      </div>
    </div>
  )
}
