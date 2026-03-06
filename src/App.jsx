import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import NewHome from './pages/NewHome'
import CaseStudyDetail from './pages/CaseStudyDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        </Routes>
        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; 2024 Hari Prasanth S. All rights reserved. | Crafting digital experiences with purpose.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
