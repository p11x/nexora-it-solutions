import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function AnimatedLogo({ size = 'md', showText = true, linkTo = '/' }) {
  const sizes = {
    sm: { img: 28, text: 'text-lg' },
    md: { img: 36, text: 'text-xl' },
    lg: { img: 48, text: 'text-2xl' },
    xl: { img: 64, text: 'text-3xl' },
  }

  const current = sizes[size]

  const logoVariants = {
    initial: { opacity: 0, rotate: -15, scale: 0.8 },
    animate: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    },
    hover: {
      rotate: [0, -8, 8, -4, 0],
      scale: [1, 1.12, 1.08, 1.1, 1],
      filter: [
        'drop-shadow(0 0 0px rgba(79,70,229,0))',
        'drop-shadow(0 0 10px rgba(79,70,229,0.5))',
        'drop-shadow(0 0 16px rgba(8,145,178,0.6))',
        'drop-shadow(0 0 10px rgba(79,70,229,0.4))',
        'drop-shadow(0 0 6px rgba(79,70,229,0.2))',
      ],
      transition: { duration: 0.7, ease: 'easeInOut' }
    }
  }

  const textVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }
    }
  }

  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div
          variants={logoVariants}
          animate={{
            y: [0, -3, 0],
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{
            y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover="hover"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={logo}
            alt="Viprove Infotech Logo"
            width={current.img}
            height={current.img}
            style={{
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </motion.div>

        {showText && (
          <motion.div variants={textVariants} style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: current.text.replace('text-', ''),
                color: '#0F172A',
                letterSpacing: '-0.02em',
              }}
              className={current.text}
            >
              Viprove
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '0.65rem',
                color: '#64748B',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Infotech
            </div>
          </motion.div>
        )}
      </motion.div>
    </Link>
  )
}