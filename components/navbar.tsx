import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "public/logo.jpg"

import { DownloadButton } from "./download-button"

export function Navbar() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 flex items-center justify-between bg-white p-5 px-28">
      <div>
        <Image className="w-12 rounded-xl" src={logo} alt="logo" />
      </div>
      <div className="space-x-12 font-semibold">
        <Link href="/emotions">Emotions</Link>
        <Link href="/manifesto">Manifesto</Link>
        <Link href="/self-awareness-test">Self-awareness test</Link>
        <Link href="/work">Work With us</Link>
      </div>
      <div>
        <DownloadButton />
      </div>
    </div>
  )
}
