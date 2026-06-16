import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUpImport from 'react-countup'
const CountUp = CountUpImport.default || CountUpImport

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.8 }}
      animate={isInView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {isInView && <CountUp start={0} end={value} duration={duration} suffix={suffix} prefix={prefix} />}
    </motion.span>
  )
}
