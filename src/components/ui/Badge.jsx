import { cn } from '../../hooks/useCn'
export function Badge({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-accent-indigo/15 text-accent-indigo border border-accent-indigo/20',
    cyan: 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/20',
    violet: 'bg-accent-violet/15 text-accent-violet border border-accent-violet/20',
  }
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}