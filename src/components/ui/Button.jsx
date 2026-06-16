import { cn } from '../../hooks/useCn'

const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:ring-offset-2 focus:ring-offset-bg-base'

export function Button({ children, variant = 'primary', size = 'md', icon: Icon, href, className = '', ...props }) {
  const variants = {
    primary: 'bg-accent-indigo hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/20',
    secondary: 'glass-card text-text-primary',
    ghost: 'text-text-secondary hover:text-accent-indigo hover:bg-accent-indigo/10',
    outline: 'border border-border hover:border-accent-indigo text-accent-indigo',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  )
}
