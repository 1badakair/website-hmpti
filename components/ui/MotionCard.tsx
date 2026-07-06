"use client"

import { ReactNode } from "react"
import { motion } from "motion/react"

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
  const delay = Math.min(index * 0.1, 0.5) // Cap delay at 0.5s

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
