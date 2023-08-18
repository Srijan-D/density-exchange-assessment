"use client"

import { type ReactNode } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"

type MotionDivProps = HTMLMotionProps<"div"> & {
  className?: string
  children: ReactNode
}

export function MotionDiv({ className, children, ...props }: MotionDivProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  )
}
