import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from '../components/layout/NavBar';
import HomePage from '../pages/HomePage';
import EcommercePage from '../pages/EcommercePage';
import ProjectPage from '../pages/ProjectPage';
import { ROUTES, SITE } from '../constants';
import { ThemeProvider } from '../context/ThemeContext';

function App() {
  useEffect(() => {
    document.title = SITE.documentTitle;
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App relative min-h-screen bg-white dark:bg-[#030712] text-[#0b192c] dark:text-slate-100 transition-colors duration-300">
          <div className="page-atmosphere" aria-hidden="true" />
          <NavBar />
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.ecommerce} element={<EcommercePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
