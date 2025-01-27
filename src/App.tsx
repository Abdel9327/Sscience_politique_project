import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Questions from './pages/Questions';
import Calendrier from './pages/Calendrier';
import Participer from './pages/Participer';
import PartiPri from './pages/PartiPri';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/participer" element={<Participer />} />
            <Route path="/partipri" element={<PartiPri />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;