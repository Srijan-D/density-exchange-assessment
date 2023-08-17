"use client"

import { type ReactNode } from "react"
import { motion, type AnimationProps } from "framer-motion"

type MotionDivProps = {
  initial: AnimationProps["initial"]
  animate: AnimationProps["animate"]
  transition: AnimationProps["transition"]
  className?: string
  children: ReactNode
}

export function MotionDiv({
  initial,
  animate,
  transition,
  className,
  children,
}: MotionDivProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv
