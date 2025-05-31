import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Help } from '@/pages/Help';
import { Contacts } from '@/pages/Contacts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}; 