"use client"

import { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

type MotionSectionProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionSection({
  children,
  className = "",
  delay = 0,
}: MotionSectionProps) {
  // Motion writes inline styles, so the global reduced-motion CSS can't
  // reach it — the entrance has to be dropped here instead.
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
