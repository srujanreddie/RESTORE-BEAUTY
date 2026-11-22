import { Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { salonData } from '../../data/salonData';
import { BrandEmblem } from './BrandEmblem';
import type { AppRoute } from './Header';

interface FooterProps {
  onNavigate: (path: AppRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent, path: AppRoute) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#1E2952] text-white pb-20 md:pb-0">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center gap-3"
            >
              <BrandEmblem light className="h-8 w-10 shrink-0" />
              <span className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.14em] text-white">
                {salonData.shortName}
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/75 max-w-xs">
              {salonData.name} — a 100% women-only beauty salon and wellness
              studio in Pragathi Nagar, Hyderabad, led by CIDESCO International
              Certified cosmetologist {salonData.founder.name}.
            </p>
            <p className="text-xs text-[#FFCE8A] tracking-wide">
              {salonData.rating.score.toFixed(1)} ★ Rated ·{' '}
              {salonData.rating.reviewsCount}+ {salonData.rating.source} Reviews
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#FFCE8A]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="hover:text-[#F0784A] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="hover:text-[#F0784A] transition-colors"
                >
                  About Us
                </a>
              </li>
              {salonData.womensMenu.length > 0 && (
                <li>
                  <a
                    href="/menu/women"
                    onClick={(e) => handleNav(e, '/menu/women')}
                    className="hover:text-[#F0784A] transition-colors"
                  >
                    Women&apos;s Menu
                  </a>
                </li>
              )}
              {salonData.mensMenu.length > 0 && (
                <li>
                  <a
                    href="/menu/men"
                    onClick={(e) => handleNav(e, '/menu/men')}
                    className="hover:text-[#F0784A] transition-colors"
                  >
                    Men&apos;s Menu
                  </a>
                </li>
              )}
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-[#F0784A] transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="hover:text-[#F0784A] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Single-Branch Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#FFCE8A]">
              Contact
            </h3>
            <div className="space-y-3.5 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#F0784A] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  {salonData.contact.addressLine1},{' '}
                  {salonData.contact.addressLine2},{' '}
                  {salonData.contact.addressLine3}
                  <span className="block mt-1 text-xs text-white/60">
                    Landmark: {salonData.contact.landmark}
                  </span>
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#F0784A] shrink-0" />
                <a
                  href={salonData.contact.callUri}
                  className="tabular-nums hover:text-[#FFCE8A] transition-colors"
                >
                  {salonData.contact.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[#F0784A] shrink-0 mt-0.5" />
                <div>
                  <p>{salonData.contact.openingDays}</p>
                  <p className="text-xs text-[#FFCE8A] tabular-nums">
                    {salonData.contact.openingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Connect & Social Media */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#FFCE8A]">
              Connect &amp; Social Media
            </h3>

            {salonData.contact.email && (
              <p className="text-sm text-white/80">
                <a
                  href={`mailto:${salonData.contact.email}`}
                  className="hover:text-[#FFCE8A] transition-colors"
                >
                  {salonData.contact.email}
                </a>
              </p>
            )}

            <div className="flex items-center gap-3 pt-1">
              {salonData.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label}: ${social.handle}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#F0784A] hover:bg-[#F0784A]"
                >
                  {social.id === 'instagram' ? (
                    <Instagram className="h-4 w-4" />
                  ) : (
                    <MessageCircle className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-white/65">
              <p className="uppercase tracking-wider text-white/85 font-semibold">
                Payments Accepted
              </p>
              <p>{salonData.about.paymentMethods.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-8 py-5 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {salonData.name}. All rights reserved.
          </p>
          <p>Pragathi Nagar, Kukatpally, Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
