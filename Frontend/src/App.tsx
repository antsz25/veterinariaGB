import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles.css'
import LandingPage from './components/LandingPage/LandingPage.component';
export default function App() {
  return (
      <main style ={{

      }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </main>
  )
}
