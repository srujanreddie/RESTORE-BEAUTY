import type { BrandPartner } from '../../data/salonData';

interface LogoMarqueeProps {
  logos: BrandPartner[];
  heading?: string;
}

export function LogoMarquee({
  logos,
  heading = 'BRANDED PRODUCTS',
}: LogoMarqueeProps) {
  if (logos.length === 0) return null;

  const trackItems = [...logos, ...logos];

  return (
    <section className="bg-white py-14 border-y border-[#1E2952]/10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-8 text-center">
        <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#1E2952]">
          {heading}
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="animate-salon-marquee flex items-center gap-16 px-8">
          {trackItems.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="flex items-center justify-center shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {partner.logoPath ? (
                <img
                  src={partner.logoPath}
                  alt={partner.name}
                  referrerPolicy="no-referrer"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              ) : (
                <span className="font-display text-lg font-bold tracking-widest text-[#1E2952]">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
