import { motion } from 'framer-motion'
import './CaseStudy.css'

export default function CaseStudy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="case-study">
      {/* Header */}
      <motion.section 
        className="cs-hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="cs-hero-content">
          <motion.div variants={itemVariants} className="cs-category">
            📱 Mobile App Design
          </motion.div>

          <motion.h1 variants={itemVariants} className="cs-title">
            FitFlow App
          </motion.h1>

          <motion.p variants={itemVariants} className="cs-subtitle">
            Redesigning a fitness tracking mobile app to improve user engagement and retention through intuitive design and engaging interactions.
          </motion.p>

          <motion.div variants={itemVariants} className="cs-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Lead UI/UX Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">3 Months</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team Size</span>
              <span className="meta-value">8 People</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="cs-hero-visual"
          variants={itemVariants}
        >
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="screen-content">
                <div className="app-icon">💪</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        className="cs-section overview-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Project Overview</h2>
        </div>

        <div className="overview-grid">
          <motion.div 
            className="overview-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Challenge</h3>
            <p>
              The existing fitness app had a 40% drop-off rate after the first week. Users found it complicated, 
              with poor onboarding and unclear navigation patterns preventing them from tracking workouts effectively.
            </p>
          </motion.div>

          <motion.div 
            className="overview-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Solution</h3>
            <p>
              Conducted UX research with 50+ users, identified pain points, and redesigned the entire interface 
              with a focus on simplicity, visual hierarchy, and delightful micro-interactions to improve retention.
            </p>
          </motion.div>

          <motion.div 
            className="overview-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Impact</h3>
            <p>
              After launch, we achieved a 65% improvement in user retention, 45% increase in daily active users, 
              and 4.8-star app rating with 10,000+ downloads in the first month.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Research & Discovery */}
      <motion.section 
        className="cs-section research-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Research & Discovery</h2>
        </div>

        <div className="research-content">
          <motion.div 
            className="research-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="research-number">1</div>
            <div className="research-details">
              <h4>User Interviews</h4>
              <p>Conducted 15 in-depth interviews with fitness enthusiasts and casual gym-goers to understand their workout habits and pain points.</p>
            </div>
          </motion.div>

          <motion.div 
            className="research-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="research-number">2</div>
            <div className="research-details">
              <h4>Competitive Analysis</h4>
              <p>Analyzed 5 competing fitness apps to identify best practices and opportunities for differentiation in the market.</p>
            </div>
          </motion.div>

          <motion.div 
            className="research-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="research-number">3</div>
            <div className="research-details">
              <h4>Usability Testing</h4>
              <p>Tested existing app with 30+ users, identified key friction points, and validated new design concepts.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section 
        className="cs-section process-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Design Process</h2>
        </div>

        <div className="process-timeline">
          {[
            {
              title: 'Ideation',
              description: 'Brainstormed solutions and created multiple design directions based on research insights.',
              color: 'var(--primary-color)'
            },
            {
              title: 'Wireframing',
              description: 'Developed detailed wireframes focusing on information architecture and user flows.',
              color: 'var(--secondary-color)'
            },
            {
              title: 'Visual Design',
              description: 'Created high-fidelity designs with consistent color palette, typography, and components.',
              color: 'var(--tertiary-color)'
            },
            {
              title: 'Prototyping',
              description: 'Built interactive prototypes to validate interactions and animations before development.',
              color: 'var(--primary-color)'
            },
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot" style={{ borderColor: step.color }}></div>
              <div className="timeline-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section 
        className="cs-section features-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Key Design Features</h2>
        </div>

        <div className="features-grid">
          {[
            {
              emoji: '🎯',
              title: 'Simplified Onboarding',
              description: '3-step onboarding process that gets users started in under 2 minutes'
            },
            {
              emoji: '🎨',
              title: 'Visual Hierarchy',
              description: 'Clear visual patterns that guide users through key actions'
            },
            {
              emoji: '✨',
              title: 'Micro-interactions',
              description: 'Delightful animations that provide feedback and celebrate achievements'
            },
            {
              emoji: '📊',
              title: 'Data Visualization',
              description: 'Beautiful charts and graphs that make progress visible and motivating'
            },
            {
              emoji: '🎵',
              title: 'Sound Design',
              description: 'Carefully crafted audio cues that enhance the user experience'
            },
            {
              emoji: '🔄',
              title: 'Gesture Navigation',
              description: 'Intuitive swipe and tap patterns following iOS/Android conventions'
            },
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              className="feature-card"
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="feature-emoji">{feature.emoji}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Results */}
      <motion.section 
        className="cs-section results-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Results & Impact</h2>
        </div>

        <div className="results-grid">
          {[
            { metric: '+65%', label: 'User Retention' },
            { metric: '+45%', label: 'Daily Active Users' },
            { metric: '4.8★', label: 'App Rating' },
            { metric: '10k+', label: 'Downloads' },
          ].map((result, idx) => (
            <motion.div 
              key={idx}
              className="result-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="result-metric"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              >
                {result.metric}
              </motion.div>
              <div className="result-label">{result.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Learnings */}
      <motion.section 
        className="cs-section learnings-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Key Learnings</h2>
        </div>

        <motion.div 
          className="learnings-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="learning-item">
            <h4>🎯 User Research is Critical</h4>
            <p>Understanding real user pain points through research led to more impactful design decisions than assumptions.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="learning-item">
            <h4>✨ Details Matter</h4>
            <p>Micro-interactions and animations, when thoughtfully designed, significantly improve user engagement and satisfaction.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="learning-item">
            <h4>🔄 Iterative Design</h4>
            <p>Continuous testing and refinement based on user feedback is essential for delivering a superior product.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="cs-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="cta-box"
          whileHover={{ scale: 1.02 }}
        >
          <h2>Let's create something amazing together!</h2>
          <p>I'm always interested in discussing new projects and creative ideas.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  )
}
