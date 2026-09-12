"use client"

import { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

type MotionCardProps = {
  children: ReactNode
  className?: string
  index?: number
}

export function MotionCard({
  children,
  className = "",
  index = 0,
}: MotionCardProps) {
  // Motion writes inline styles, so the global reduced-motion CSS can't
  // reach it — the entrance has to be dropped here instead.
  const reduceMotion = useReducedMotion()
  // Cap the stagger at 0.3s: past that the last card in a grid reads as
  // "still loading" rather than as part of the same entrance.
  const delay = Math.min(index * 0.06, 0.3)

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
