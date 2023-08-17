"use client"

import { motion } from "framer-motion"

export function DownloadButton() {
  return (
    <motion.button
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, type: "tween" }}
      className="rounded-full bg-black px-4 py-2 text-white"
    >
      Download App
    </motion.button>
  )
}
