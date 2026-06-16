import { TypeAnimation } from 'react-type-animation'
import { cn } from '../../hooks/useCn'

export function TypewriterText({ sequences = [], className = '' }) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={60}
      deletionSpeed={2}
      repeat={Infinity}
      className={cn('gradient-text', className)}
      style={{ display: 'inline-block' }}
    />
  )
}
