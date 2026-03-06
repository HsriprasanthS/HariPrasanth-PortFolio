import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import './CaseStudyDetail.css'

const caseStudies = {
  resqride: {
    title: 'ResQRide – Roadside Assistance Platform',
    subtitle: 'Designing a real-time emergency roadside assistance mobile application',
    thumbnail: 'bi-car-front',
    color: '#FF6B6B',
    duration: '4 months',
    team: 'UI/UX Designer, Product Manager, 2 Developers',
    overview: 'ResQRide is a revolutionary platform connecting drivers in distress with nearby service providers instantly, reducing wait times from hours to minutes.',
    
    challenge: {
      title: 'The Challenge',
      points: [
        'Drivers lack immediate access to reliable roadside assistance',
        'Average wait time for help was 2-3 hours',
        'Existing solutions were fragmented and unreliable',
        'High anxiety and safety concerns during roadside emergencies'
      ]
    },

    painPoints: {
      title: 'User Pain Points',
      points: [
        'Difficulty locating trustworthy service providers',
        'Lack of real-time location tracking',
        'No transparent pricing information',
        'Communication barriers between driver and provider',
        'Safety concerns accepting help from strangers'
      ]
    },

    research: {
      title: 'Research & Discovery',
      methods: [
        { icon: 'bi-people', title: '45 User Interviews', desc: 'Conducted interviews with drivers and service providers' },
        { icon: 'bi-bar-chart', title: 'Market Analysis', desc: 'Analyzed 8 competing solutions and their limitations' },
        { icon: 'bi-search', title: 'Usability Testing', desc: 'Tested prototypes with real users in varying scenarios' }
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'ResQRide provides a seamless, secure platform that connects drivers with verified service providers in real-time, with transparent pricing, live tracking, and safety features.',
      features: [
        'Real-time service provider matching based on location and specialty',
        'Verified profiles with ratings and certifications',
        'Live GPS tracking for both parties',
        'In-app communication and call support',
        'Transparent, upfront pricing',
        'SOS emergency features'
      ]
    },

    design: {
      title: 'Design Process',
      steps: [
        { phase: 'User Research', duration: '2 weeks' },
        { phase: 'Wireframing', duration: '2 weeks' },
        { phase: 'High-Fidelity Design', duration: '3 weeks' },
        { phase: 'Interactive Prototype', duration: '2 weeks' },
        { phase: 'User Testing & Iterations', duration: '2 weeks' }
      ]
    },

    results: {
      title: 'Results & Impact',
      metrics: [
        { stat: '45 min', label: 'Average response time (vs 2-3 hrs)' },
        { stat: '4.8★', label: 'App store rating' },
        { stat: '50k+', label: 'Downloads in beta' },
        { stat: '92%', label: 'User retention rate' }
      ]
    },

    learnings: [
      'Real-time communication is critical for user trust',
      'Safety verification needs to be seamless',
      'Users prefer simplicity over feature-richness',
      'Transparent pricing builds confidence'
    ]
  },

  revive: {
    title: 'Revive Holidays App',
    subtitle: 'AI-powered travel planning and booking application',
    thumbnail: 'bi-airplane',
    color: '#4ECDC4',
    duration: '5 months',
    team: 'Lead UX/UI Designer, Product Designer, 3 Developers',
    overview: 'Revive is an intelligent travel planning platform that uses AI to suggest personalized itineraries, manage bookings, and create unforgettable travel experiences.',
    
    challenge: {
      title: 'The Challenge',
      points: [
        'Travel planning is complex and time-consuming',
        'Information scattered across multiple platforms',
        'Difficulty personalizing recommendations',
        'Booking fragmentation across airlines, hotels, activities'
      ]
    },

    painPoints: {
      title: 'User Pain Points',
      points: [
        'Overwhelmed by too many choices',
        'Time-consuming research process',
        'Difficulty coordinating different bookings',
        'Last-minute itinerary changes cause stress',
        'Poor mobile experience for on-trip adjustments'
      ]
    },

    research: {
      title: 'Research & Discovery',
      methods: [
        { icon: 'bi-people', title: '60 User Interviews', desc: 'Interviews with frequent travelers and tour planners' },
        { icon: 'bi-bar-chart', title: 'Competitor Study', desc: 'Analyzed Booking.com, Airbnb, Google Trips' },
        { icon: 'bi-search', title: 'Journey Mapping', desc: 'Mapped complete travel planning journey' }
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'Revive consolidates all travel planning in one intelligent platform with AI-powered recommendations, unified bookings, and smart itinerary management.',
      features: [
        'AI-powered personalized itinerary suggestions',
        'Unified booking for flights, hotels, activities',
        'Real-time collaboration with travel companions',
        'Offline itinerary access',
        'Smart notifications and reminders',
        'In-app messaging with service providers'
      ]
    },

    design: {
      title: 'Design Process',
      steps: [
        { phase: 'Research & Strategy', duration: '2 weeks' },
        { phase: 'Wireframing & Flows', duration: '3 weeks' },
        { phase: 'Visual Design System', duration: '3 weeks' },
        { phase: 'Component Development', duration: '2 weeks' },
        { phase: 'Testing & Refinement', duration: '2 weeks' }
      ]
    },

    results: {
      title: 'Results & Impact',
      metrics: [
        { stat: '30 min', label: 'Time saved planning (avg)' },
        { stat: '4.7★', label: 'App rating' },
        { stat: '100k+', label: 'Active users' },
        { stat: '95%', label: 'Booking completion rate' }
      ]
    },

    learnings: [
      'AI recommendations need to be transparent',
      'Simplicity is key in complex workflows',
      'Collaborative features increase engagement',
      'Mobile-first design is essential for travel apps'
    ]
  },

  travel: {
    title: 'Travel App Figma Prototype',
    subtitle: 'Interactive Figma design prototype with modern UI patterns',
    thumbnail: 'bi-geo-alt',
    color: '#FFE66D',
    duration: '3 weeks',
    team: 'UI Designer, Design Systems Specialist',
    overview: 'A comprehensive Figma prototype showcasing modern travel app design patterns, interactions, and UI components built with design system principles.',
    
    challenge: {
      title: 'The Challenge',
      points: [
        'Create reusable component library for travel apps',
        'Design intuitive onboarding for first-time users',
        'Showcase micro-interactions and animations',
        'Build scalable design system'
      ]
    },

    painPoints: {
      title: 'Design Goals',
      points: [
        'Establish consistent design patterns',
        'Create responsive component variations',
        'Design for accessibility compliance',
        'Build interactive prototype for stakeholders'
      ]
    },

    research: {
      title: 'Design Strategy',
      methods: [
        { icon: 'bi-palette', title: 'Component Audit', desc: 'Analyzed successful travel apps design patterns' },
        { icon: 'bi-diagram-3', title: 'Design System', desc: 'Created comprehensive component library' },
        { icon: 'bi-gear', title: 'Interaction Design', desc: 'Designed micro-interactions and animations' }
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'A fully interactive Figma prototype with 50+ components, multiple design variations, and production-ready specs for developers.',
      features: [
        '50+ reusable UI components',
        'Auto-layout based responsive design',
        'Dark and light theme variations',
        'Interactive prototypes with animations',
        'Component documentation',
        'Design tokens and variables'
      ]
    },

    design: {
      title: 'Design Process',
      steps: [
        { phase: 'Component Inventory', duration: '1 week' },
        { phase: 'Component Design', duration: '1.5 weeks' },
        { phase: 'Interactive Prototype', duration: '1 week' },
        { phase: 'Documentation', duration: '3 days' }
      ]
    },

    results: {
      title: 'Deliverables',
      metrics: [
        { stat: '50+', label: 'UI Components' },
        { stat: '100%', label: 'Responsive' },
        { stat: '40+', label: 'Interactions' },
        { stat: '2 themes', label: 'Light & Dark' }
      ]
    },

    learnings: [
      'Component reusability saves development time',
      'Design tokens ensure consistency',
      'Interactive prototypes improve stakeholder communication',
      'Comprehensive documentation is essential'
    ]
  }
}

export default function CaseStudyDetail() {
  const { id } = useParams()
  const study = caseStudies[id] || caseStudies.resqride

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.div 
      className="case-study-detail"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.section className="cs-hero-detail" variants={itemVariants}>
        <div className="cs-hero-overlay" style={{ backgroundColor: study.color }}></div>
        <div className="cs-hero-content-detail">
          <div className="cs-badge">Case Study</div>
          <h1>{study.title}</h1>
          <p>{study.subtitle}</p>
          
          <div className="cs-meta-detail">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">{study.duration}</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">{study.team}</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section className="cs-section-detail" variants={itemVariants}>
        <div className="cs-section-header">
          <h2>Overview</h2>
        </div>
        <p className="cs-overview-text">{study.overview}</p>
      </motion.section>

      {/* Challenge */}
      <motion.section className="cs-section-detail" variants={itemVariants}>
        <div className="cs-section-header">
          <h2>{study.challenge.title}</h2>
        </div>
        <div className="cs-points">
          {study.challenge.points.map((point, idx) => (
            <motion.div key={idx} className="cs-point" whileHover={{ x: 10 }}>
              <span className="point-icon">•</span>
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pain Points */}
      <motion.section className="cs-section-detail" variants={itemVariants}>
        <div className="cs-section-header">
          <h2>{study.painPoints.title}</h2>
        </div>
        <div className="cs-grid-2">
          {study.painPoints.points.map((point, idx) => (
            <motion.div 
              key={idx} 
              className="cs-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Research */}
      <motion.section className="cs-section-detail" variants={itemVariants}>
        <div className="cs-section-header">
          <h2>{study.research.title}</h2>
        </div>
        <div className="cs-research-methods">
          {study.research.methods.map((method, idx) => (
            <motion.div 
              key={idx}
              className="research-method"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="method-icon"><i className={`bi ${method.icon}`}></i></div>
              <h3>{method.title}</h3>
              <p>{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Solution */}
      <motion.section className="cs-section-detail" variants={itemVariants}>
        <div className="cs-section-header">
          <h2>{study.solution.title}</h2>
        </div>
        <p className="cs-solution-desc">{study.solution.description}</p>
        <div className="cs-features">
          {study.solution.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="feature-check">✓</span>
              <p>{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section className="cs-section-detail" variants={itemVariants}>
        <div className="cs-section-header">
          <h2>{study.design.title}</h2>
        </div>
        <div className="design-steps">
          {study.design.steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="design-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">{idx + 1}</div>
              <h3>{step.phase}</h3>
              <p>{step.duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Learnings */}
      <motion.section className="cs-section-detail" variants={itemVariants}>
        <div className="cs-section-header">
          <h2>Key Learnings</h2>
        </div>
        <div className="learnings-list">
          {study.learnings.map((learning, idx) => (
            <motion.div 
              key={idx}
              className="learning-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="learning-number">{idx + 1}</span>
              <p>{learning}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="cs-cta-detail" variants={itemVariants}>
        <h2>Let's work together</h2>
        <p>Interested in creating amazing experiences? I'd love to hear about your project.</p>
        <Link to="/" className="btn-primary cs-cta-btn">Back to Home</Link>
      </motion.section>
    </motion.div>
  )
}
