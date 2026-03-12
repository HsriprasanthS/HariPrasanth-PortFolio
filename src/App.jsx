import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import NewHome from './pages/NewHome'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<NewHome />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
