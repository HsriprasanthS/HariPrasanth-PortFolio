import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const linkVariants = {
    hover: {
      color: '#6366f1',
      transition: { duration: 0.3 }
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav 
      className="navbar"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <span className="logo-text">Hari Prasanth S</span>
          </Link>
        </motion.div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <motion.li variants={linkVariants} whileHover="hover">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </motion.li>
          <motion.li variants={linkVariants} whileHover="hover">
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          </motion.li>
          <motion.li variants={linkVariants} whileHover="hover">
            <button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
          </motion.li>
          <motion.li variants={linkVariants} whileHover="hover">
            <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
          </motion.li>
          <motion.li variants={linkVariants} whileHover="hover">
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </motion.li>
        </ul>

        <motion.a 
          href="/resume.pdf"
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  )
}
