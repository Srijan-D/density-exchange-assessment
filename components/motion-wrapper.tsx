"use client"

import { type ReactNode } from "react"
import { motion, type AnimationProps } from "framer-motion"

type MotionHeadingProps = {
  initial?: AnimationProps["initial"]
  animate?: AnimationProps["animate"]
  transition?: AnimationProps["transition"]
  className?: string
  children: ReactNode
}

export function MotionHeading({
  initial,
  animate,
  transition,
  className,
  children,
}: MotionHeadingProps) {
  return (
    <motion.h1
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.h1>
  )
}
