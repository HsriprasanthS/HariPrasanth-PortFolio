import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './NewHome.css'

export default function NewHome() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedDesign, setSelectedDesign] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const titles = ['UI/UX Designer', 'Frontend Developer', 'Creative Thinker']
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 2000

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentIndex]

      if (!isDeleting) {
        // Typing effect
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1))
        } else {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting effect
        if (currentText.length > 0) {
          setCurrentText(currentTitle.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, titles])

  const handleSubmit = (e) => {
    e.preventDefault()
    // open default mail client with pre-filled email
    const recipient = 'hari2kprasanth@gmail.com'
    const subject = 'Portfolio Contact Form'
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`
    window.location.href = mailto

    setFormSubmitted(true)
    setTimeout(() => {
      setName('')
      setEmail('')
      setMessage('')
      setFormSubmitted(false)
    }, 3000)
  }

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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="new-home">
      {/* Hero Section */}
      <motion.section
        className="hero-new"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content-new">
          <motion.h1 variants={itemVariants} className="hero-name-title">
            Hari Prasanth S
          </motion.h1>

          <motion.div variants={itemVariants} className="title-animation">
            <span className="typing-text">{currentText}<span className="cursor">|</span></span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-tagline">
            Crafting intuitive digital experiences that solve real problems.
            <br />
            <small>Designing with purpose. Building with passion.</small>
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons-new">
            <motion.a
              href="/images/Hariprasanth Resume.pdf"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <i className="bi bi-download"></i> Download Resume
            </motion.a>
            <motion.button
              className="btn-secondary-new"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="bi bi-envelope-fill"></i> Hire Me
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="social-links">
            <a href="https://www.linkedin.com/in/hari-prasanths" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i> LinkedIn</a>
            <a href="https://github.com/HsriprasanthS" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i> GitHub</a>
            <a href="https://www.behance.net/for_you" className="social-icon"><i className="bi bi-behance"></i> Behance</a>
            <a href="https://dribbble.com/hari2kprasanth" className="social-icon"><i className="bi bi-dribbble"></i> Dribbble</a>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual-new"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="profile-container">

            <div className="orbit-icons">

              <img src="https://logo.svgcdn.com/logos/figma.png" className="orbit-icon figma" alt="Figma" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg" className="orbit-icon xd" alt="Adobe XD" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className="orbit-icon ps" alt="Photoshop" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" className="orbit-icon ai" alt="Illustrator" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="orbit-icon html" alt="HTML" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="orbit-icon css" alt="CSS" />

            </div>

            <div className="profile-image-placeholder">
              <img src="/images/profile.jpg" alt="Profile" />
            </div>

          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about-new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header-new">
          <h2>About Me</h2>
        </div>

        <div className="about-content-new">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate UI/UX Designer and Frontend Developer with a strong focus on creating meaningful digital experiences.
              With expertise in design thinking, user research, and modern frontend technologies, I bridge the gap between beautiful design and functional code.
            </p>
            <p>
              My design philosophy revolves around <strong>simplicity, accessibility, and user-centered design</strong>.
              I believe that great design is not just about aesthetics—it's about solving problems and creating value for users.
            </p>
            <p>
              Currently pursuing my <strong>M.Tech in Computer Science</strong> while actively involved in real-world design projects,
              I'm committed to continuous learning and staying updated with the latest design and development trends.
            </p>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <span className="detail-value">Hari Prasanth S</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">hari2kprasanth@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className="detail-value">M.Tech CSE Student</span>
            </div>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="education-new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header-new">
          <h2>Education</h2>
        </div>

        <div className="timeline-new">
          <motion.div
            className="timeline-item-new"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content-new">
              <h3>M.Tech Computer Science Engineering</h3>
              <p className="institution">Erode Sengunthar Engineering College</p>
              <p className="duration">2022 – Present (2027)</p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item-new"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content-new">
              <h3>Higher Secondary Education</h3>
              <p className="institution">Standard School</p>
              <p className="duration">2019 – 2021</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="skills-new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header-new">
          <h2>Skills & Expertise</h2>
        </div>

        <div className="skills-grid-new">
          {/* Design Skills */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Design Skills</h3>
            {[
              { name: 'Figma', level: 75 },
              { name: 'Wireframing', level: 70 },
              { name: 'Prototyping', level: 68 },
              { name: 'User Research', level: 45 },
              { name: 'Design Systems', level: 60 }
            ].map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            ))}
          </motion.div>

          {/* Development Skills */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Development Skills</h3>
            {[
              { name: 'HTML5', level: 95 },
              { name: 'CSS3', level: 90 },
              { name: 'JavaScript', level: 50 },
              { name: 'React', level: 30 },
              { name: 'Bootstrap', level: 88 }
            ].map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Tools & Software</h3>
            {[
              { name: 'FIGMA', level: 90 },
              { name: 'Git & GitHub', level: 90 },
              { name: 'VS Code', level: 95 },
              { name: 'Photoshop', level: 30 },

              { name: 'Jira', level: 50 }
            ].map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Figma Designs Section */}
      <motion.section
        id="figma-designs"
        className="figma-designs-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header-new">
          <h2>Figma Designs</h2>
        </div>

        <div className="designs-grid">
          {[
            {
              id: 1,
              title: 'DESIGN',
              desc: 'Interactive Figma design project showcasing modern UI patterns.',
              embed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/design/RjZdRu1bc1LcviiRX03PT4/DESIGN?node-id=20-6829&embed-host=share" loading="lazy" allowfullscreen></iframe>',
              thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
              tags: ['Figma', 'UI Design', 'Prototype']
            },
            {
              id: 2,
              title: 'LMS Dashboard',
              desc: 'Learning Management System dashboard with comprehensive interface design.',
              embed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/design/bP1hRMC5R5mkOtz14UYysn/LMS---Dashboard?node-id=0-1&embed-host=share" loading="lazy" allowfullscreen></iframe>',
              thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
              tags: ['Figma', 'Dashboard', 'Web']
            },
            {
              id: 3,
              title: 'G-PAY',
              desc: 'Digital payment app interface design with intuitive user experience.',
              embed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/design/xmBKKZ4HXoy25BiFdP1RIO/G-PAY?node-id=0-1&embed-host=share" loading="lazy" allowfullscreen></iframe>',
              thumbnail: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop',
              tags: ['Figma', 'App Design', 'Payment']
            }
          ].map((design, idx) => (
            <motion.div
              key={idx}
              className="design-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className="design-thumbnail-wrapper" onClick={() => setSelectedDesign(design)}>
                <img src={design.thumbnail} alt={design.title} className="design-thumbnail" />
                <div className="design-overlay">
                  <button className="play-btn">
                    <i className="bi bi-play-circle-fill"></i>
                  </button>
                </div>
              </div>
              <h3>{design.title}</h3>
              <p>{design.desc}</p>
              <div className="design-tags">
                {design.tags.map((tag, i) => (
                  <span key={i} className="design-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Figma Embed Modal */}
        {selectedDesign && (
          <motion.div
            className="figma-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              className="figma-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3 className="modal-title">{selectedDesign.title}</h3>
                <button className="modal-close" onClick={() => setSelectedDesign(null)}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              <div className="modal-embed-container">
                <div className="modal-embed" dangerouslySetInnerHTML={{ __html: selectedDesign.embed }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* Services Section */}
      <motion.section   
        className="services-new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header-new">
          <h2>Skill Set</h2>
        </div>

        <div className="services-grid-new">
          {[
            { icon: 'bi-palette', title: 'UI/UX Design', desc: 'User-centered design for web and mobile applications' },
            { icon: 'bi-globe', title: 'Website Design', desc: 'Beautiful, responsive website designs' },
            { icon: 'bi-diagram-3', title: 'Wireframing', desc: 'Information architecture and user flows' },
            { icon: 'bi-bullseye', title: 'Landing Pages', desc: 'High-converting landing page designs' },
            { icon: 'bi-pencil-square', title: 'Design Systems', desc: 'Comprehensive design systems and component libraries' },
            { icon: 'bi-code-slash', title: 'Frontend Dev', desc: 'Converting designs to responsive, functional code' }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card-new"
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="service-icon"><i className={`bi ${service.icon}`}></i></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* courses Section */}
      <div className="section-header-new">
        <h2>Achievements & Posts</h2>
      </div>
      <div className="courses-scroll">

        {[
          {
            title: "Fullstack Development Internship",
            issuer: "LinkedIn",
            year: "2023",
            description: "Web development internship experience shared on LinkedIn.",
            link: "https://www.linkedin.com/posts/hari-prasanths_fullstackdevelopment-webdevelopment-internship-activity-7388773119533973504-kGI0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          },
          {
            title: "AI Mental Health Workshop",
            issuer: "LinkedIn",
            year: "2023",
            description: "Participated in an AI & mental health workshop.",
            link: "https://www.linkedin.com/posts/hari-prasanths_ai-mentalhealth-workshop-activity-7388774024576897024-xdLq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          },
          {
            title: "MS Office Learning Journey",
            issuer: "LinkedIn",
            year: "2023",
            description: "Started MS Office skills journey under Digital Skills program.",
            link: "https://www.linkedin.com/posts/hari-prasanths_msoffice-learningjourney-digitalskills-activity-7388930832188682241-kvyJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          },
          {
            title: "Robotics STEM Innovation",
            issuer: "LinkedIn",
            year: "2023",
            description: "Shared insights on robotics and STEM innovation.",
            link: "https://www.linkedin.com/posts/hari-prasanths_robotics-stem-innovation-activity-7388931045578092544-X9qa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          },
          {
            title: "Graphics Design & Animation",
            issuer: "LinkedIn",
            year: "2023",
            description: "Explored creative tech with graphics and animation.",
            link: "https://www.linkedin.com/posts/hari-prasanths_graphicsdesign-animation-creativetech-activity-7388931329008201728-UZo9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          },
          {
            title: "Cloud Tech Internship",
            issuer: "LinkedIn",
            year: "2023",
            description: "Completed cloud technology internship.",
            link: "https://www.linkedin.com/posts/hari-prasanths_cloud-tech-internshipdone-activity-7388936648249753601-LPYg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          },
          {
            title: "Web Design Frontend - Dhruva2024",
            issuer: "LinkedIn",
            year: "2024",
            description: "Showcased frontend web design at Dhruva 2024.",
            link: "https://www.linkedin.com/posts/hari-prasanths_webdesign-frontend-dhruva2024-activity-7388945435509481472-4Puy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          },
          {
            title: "Industrial Robotics - KUKA & Siemens",
            issuer: "LinkedIn",
            year: "2024",
            description: "Post about industrial robotics collaboration with KUKA & Siemens.",
            link: "https://www.linkedin.com/posts/hari-prasanths_industrialrobotics-kuka-siemens-activity-7388947670024953856-C3K2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERSUH0BTrqgwyCtB31jijd6q8gIavTN43A"
          }
        ].map((course, idx) => (

          <motion.div
            key={idx}
            className="cert-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
          >

            <div className="cert-icon">
              <i className="bi bi-linkedin"></i>
            </div>

            <h4>{course.title}</h4>

            <p className="description">{course.description}</p>

            <p className="issuer">
              {course.issuer} • {course.year}
            </p>

            <a
              href={course.link}
              target="_blank"
              className="cert-btn linkedin-btn"
            >
              View Post
            </a>

          </motion.div>

        ))}
      </div>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact-new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header-new">
          <h2>Let's Connect</h2>
          <p>Have a project in mind? Let's discuss and create something amazing together!</p>
        </div>

        <div className="contact-content-new">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="form-textarea"
              rows="5"
            ></textarea>
            {formSubmitted && <p className="success-msg">✅ Message sent successfully!</p>}
            <button type="submit" className="btn-primary">Send Message</button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-item">
              <span className="info-icon"><i className="bi bi-telephone"></i></span>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value">+91 9750034897</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><i className="bi bi-envelope"></i></span>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">hari2kprasanth@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><i className="bi bi-geo-alt"></i></span>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Erode, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://www.linkedin.com/in/hari-prasanths" className="social-icon-contact" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/HsriprasanthS" className="social-icon-contact" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              <a href="https://www.behance.net/for_you" className="social-icon-contact" target="_blank" rel="noopener noreferrer"><i className="bi bi-behance"></i></a>
              <a href="https://dribbble.com/hari2kprasanth" className="social-icon-contact" target="_blank" rel="noopener noreferrer"><i className="bi bi-dribbble"></i></a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer-new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-content-new">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('figma-designs').scrollIntoView({ behavior: 'smooth' })}>Designs</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/hari-prasanths" rel="noopener noreferrer"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://github.com/HsriprasanthS" rel="noopener noreferrer"><i className="bi bi-github"></i> GitHub</a></li>
              <li><a href="https://www.behance.net/for_you" rel="noopener noreferrer"><i className="bi bi-behance"></i> Behance</a></li>
              <li><a href="https://dribbble.com/hari2kprasanth" rel="noopener noreferrer  "><i className="bi bi-dribbble"></i> Dribbble</a></li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p>&copy;Hari Prasanth S. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>

      {/* Fixed Back to Top Button */}
      <motion.button
        className="back-to-top-fixed"
        initial={{ opacity: 0, y: 20 }}
        animate={isScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ pointerEvents: isScrolled ? 'auto' : 'none' }}
      >
        <i className="bi bi-arrow-up"></i>
      </motion.button>
    </div>
  )
}
