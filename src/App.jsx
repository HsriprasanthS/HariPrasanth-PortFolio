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
      </div>
    </Router>
  )
}

export default App
