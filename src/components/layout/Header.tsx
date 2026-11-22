import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { salonData } from '../../data/salonData';
import { CoralButton } from '../animations';
import { BrandEmblem } from './BrandEmblem';

export type AppRoute =
  | '/'
  | '/about'
  | '/menu/women'
  | '/menu/men'
  | '/services'
  | '/contact';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: AppRoute) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const hasMensMenu = salonData.mensMenu.length > 0;
  const hasWomensMenu = salonData.womensMenu.length > 0;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMenuDropdownOpen(false);
  }, [currentPath]);

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const handleLinkClick = (e: React.MouseEvent, path: AppRoute) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2952]/10 bg-[#FFF5EC]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A] rounded-md py-1"
          aria-label={salonData.name}
        >
          <BrandEmblem className="h-7 w-9 shrink-0" />
          <span className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.14em] text-[#1E2952] whitespace-nowrap">
            {salonData.shortName}
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8"
        >
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className={`relative text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors py-1 ${
              isActive('/')
                ? 'text-[#F0784A]'
                : 'text-[#1E2952] hover:text-[#F0784A]'
            }`}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, '/about')}
            className={`relative text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors py-1 ${
              isActive('/about')
                ? 'text-[#F0784A]'
                : 'text-[#1E2952] hover:text-[#F0784A]'
            }`}
          >
            About
          </a>

          {/* Menu Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setMenuDropdownOpen(true)}
            onMouseLeave={() => setMenuDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMenuDropdownOpen((prev) => !prev)}
              aria-expanded={menuDropdownOpen}
              aria-haspopup="menu"
              className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A] rounded ${
                isActive('/menu')
                  ? 'text-[#F0784A]'
                  : 'text-[#1E2952] hover:text-[#F0784A]'
              }`}
            >
              <span>Menu</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  menuDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {menuDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  role="menu"
                  className="absolute left-0 top-full pt-3 w-56"
                >
                  <div className="rounded-xl border border-[#1E2952]/12 bg-white p-2 shadow-xl shadow-[#1E2952]/10">
                    {hasWomensMenu && (
                      <a
                        href="/menu/women"
                        role="menuitem"
                        onClick={(e) => handleLinkClick(e, '/menu/women')}
                        className={`block rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                          currentPath === '/menu/women'
                            ? 'bg-[#FFF5EC] text-[#F0784A]'
                            : 'text-[#1E2952] hover:bg-[#FFF5EC] hover:text-[#F0784A]'
                        }`}
                      >
                        Women&apos;s Menu
                      </a>
                    )}
                    {hasMensMenu && (
                      <a
                        href="/menu/men"
                        role="menuitem"
                        onClick={(e) => handleLinkClick(e, '/menu/men')}
                        className={`block rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                          currentPath === '/menu/men'
                            ? 'bg-[#FFF5EC] text-[#F0784A]'
                            : 'text-[#1E2952] hover:bg-[#FFF5EC] hover:text-[#F0784A]'
                        }`}
                      >
                        Men&apos;s Menu
                      </a>
                    )}
                    {salonData.womenOnly && (
                      <div className="mt-1 border-t border-[#1E2952]/8 px-4 pt-2 pb-1.5 text-[11px] text-[#555555]">
                        100% Women-Only Sanctuary
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/services"
            onClick={(e) => handleLinkClick(e, '/services')}
            className={`relative text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors py-1 ${
              isActive('/services')
                ? 'text-[#F0784A]'
                : 'text-[#1E2952] hover:text-[#F0784A]'
            }`}
          >
            Services
          </a>

          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className={`relative text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors py-1 ${
              isActive('/contact')
                ? 'text-[#F0784A]'
                : 'text-[#1E2952] hover:text-[#F0784A]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block">
            <CoralButton
              size="sm"
              showArrows={false}
              onClick={() => onNavigate('/contact')}
            >
              Book Now
            </CoralButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-[#1E2952]/20 text-[#1E2952] hover:border-[#F0784A] hover:text-[#F0784A] transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#1E2952]/10 bg-[#FFF5EC] lg:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col px-6 py-5 space-y-1"
            >
              {[
                { label: 'Home', path: '/' as AppRoute },
                { label: 'About Us', path: '/about' as AppRoute },
                ...(hasWomensMenu
                  ? [{ label: "Women's Menu", path: '/menu/women' as AppRoute }]
                  : []),
                ...(hasMensMenu
                  ? [{ label: "Men's Menu", path: '/menu/men' as AppRoute }]
                  : []),
                { label: 'Services', path: '/services' as AppRoute },
                { label: 'Contact', path: '/contact' as AppRoute },
              ].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
                    currentPath === item.path
                      ? 'bg-[#FFCE8A]/45 text-[#1E2952]'
                      : 'text-[#1E2952] hover:bg-[#FFCE8A]/25'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <CoralButton
                  className="w-full"
                  onClick={() => onNavigate('/contact')}
                >
                  Book Now
                </CoralButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
