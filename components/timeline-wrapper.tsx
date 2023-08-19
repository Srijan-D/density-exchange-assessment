"use client"

import { type ReactNode } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
  type VerticalTimelineElementProps,
  type VerticalTimelineProps,
} from "react-vertical-timeline-component"

type TVerticalTimelineComponentProps = VerticalTimelineProps & {
  children: ReactNode
  className?: string
}

export function VerticalTimelineComponent({
  children,
  className,
  ...props
}: TVerticalTimelineComponentProps) {
  return (
    <VerticalTimeline className={className} {...props}>
      {children}
    </VerticalTimeline>
  )
}

type TVerticalTimelineElementComponentProps = VerticalTimelineElementProps & {
  children: ReactNode
  className?: string
}

export function VerticalTimelineElementComponent({
  children,
  className,
  ...props
}: TVerticalTimelineElementComponentProps) {
  return (
    <VerticalTimelineElement className={className} {...props}>
      {children}
    </VerticalTimelineElement>
  )
}
