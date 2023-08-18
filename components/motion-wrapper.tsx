"use client"

import { type ReactNode } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"

type MotionHeadingProps = HTMLMotionProps<"h1"> & {
  className?: string
  children: ReactNode
}

export function MotionHeading({
  className,
  children,
  ...props
}: MotionHeadingProps) {
  return (
    <motion.h1 className={className} {...props}>
      {children}
    </motion.h1>
  )
}
