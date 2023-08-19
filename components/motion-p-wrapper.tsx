"use client"

import { type ReactNode } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"

type MotionParaProps = HTMLMotionProps<"p"> & {
    className?: string
    children: ReactNode
}


export function MotionParagraph({
    className,
    children,
    ...props
}: MotionParaProps) {
    return (
        <motion.p className={className} {...props}>
            {children}
        </motion.p>
    )
}