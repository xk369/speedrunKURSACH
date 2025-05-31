import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Help } from '@/pages/Help';
import { Contacts } from '@/pages/Contacts';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/use-theme';
import { CategoryProvider } from '@/context/CategoryContext';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <CategoryProvider>
        <div className={`min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-theme ${theme}`}>
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CategoryProvider>
    </Router>
  );
}

export default App;
