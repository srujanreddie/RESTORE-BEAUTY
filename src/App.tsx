import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Header, type AppRoute } from './components/layout/Header';
import { BookAppointmentCta } from './components/layout/BookAppointmentCta';
import { Footer } from './components/layout/Footer';
import { MobileQuickBar } from './components/layout/MobileQuickBar';
import { ScrollToTopButton } from './components/animations';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

function normalizeRoute(pathname: string): AppRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/about') return '/about';
  if (clean === '/menu' || clean === '/menu/women') return '/menu/women';
  if (clean === '/menu/men') return '/menu/men';
  if (clean === '/services') return '/services';
  if (clean === '/contact') return '/contact';
  return '/';
}

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [route, setRoute] = useState<AppRoute>(() =>
    normalizeRoute(window.location.pathname)
  );

  const navigate = useCallback((nextPath: AppRoute) => {
    const normalized = normalizeRoute(nextPath);
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setRoute(normalized);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizeRoute(window.location.pathname));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '/about':
        return <AboutPage />;
      case '/menu/women':
        return <MenuPage variant="women" onNavigate={navigate} />;
      case '/menu/men':
        return <MenuPage variant="men" onNavigate={navigate} />;
      case '/services':
        return <ServicesPage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5EC] text-[#1A1A1A]">
      <Header currentPath={route} onNavigate={navigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BookAppointmentCta onNavigate={navigate} />
      <Footer onNavigate={navigate} />
      <ScrollToTopButton />
      <MobileQuickBar />
    </div>
  );
}
