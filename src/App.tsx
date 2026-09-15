import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavigationProvider } from './components/NavigationContext';

// Pages matching Heroism site structure
import { CalculatorPage } from './pages/CalculatorPage';
import { FarmReinBotsPage } from './pages/FarmReinBotsPage';
import { WarBotsKvkPage } from './pages/WarBotsKvkPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/bots" element={<FarmReinBotsPage />} />
        <Route path="/war-bots" element={<WarBotsKvkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Legacy redirect */}
        <Route path="/pricing" element={<FarmReinBotsPage />} />
        <Route path="*" element={<CalculatorPage />} />
      </Routes>
    </>
  );
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <AppRoutes />
      </NavigationProvider>
    </BrowserRouter>
  );
};

export default App;
