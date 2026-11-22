import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ChevronsRight, Sparkles } from 'lucide-react';
import { salonData } from '../data/salonData';
import {
  CoralButton,
  CountUp,
  EditorialImage,
  FadeInItem,
  FadeInStagger,
  LogoMarquee,
  SkewHeading,
  SmoothAccordion,
  TestimonialCarousel,
} from '../components/animations';
import { VerticalSocialSidebar } from '../components/layout/VerticalSocialSidebar';
import type { AppRoute } from '../components/layout/Header';

interface HomePageProps {
  onNavigate: (path: AppRoute) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasMensMenu = salonData.mensMenu.length > 0;

  return (
    <div>
      {/* 1. HERO SECTION — Warm Peach (#FFCE8A) */}
      <section className="relative overflow-hidden bg-[#FFCE8A]">
        <VerticalSocialSidebar tone="dark" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 lg:pr-6">
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E2952]"
              >
                {salonData.heroBadge}
              </motion.p>

              <SkewHeading
                as="h1"
                immediate
                className="text-[28px] sm:text-4xl lg:text-[46px] xl:text-[52px] text-[#1A1A1A] leading-[1.14]"
              >
                {salonData.heroHeadline}
              </SkewHeading>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-xl text-sm sm:text-base leading-relaxed text-[#1A1A1A]/80"
              >
                {salonData.heroSubheadline}
              </motion.p>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-wrap items-center gap-6 pt-2"
              >
                <CoralButton
                  size="lg"
                  href={salonData.contact.whatsappUri}
                  external
                >
                  Book Now
                </CoralButton>

                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952] hover:text-[#F0784A] transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2952] rounded"
                >
                  <span>Learn More</span>
                  <ChevronsRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="pt-4 border-t border-[#1E2952]/15 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-[#1E2952]/85"
              >
                <span>100% Women-Only Space</span>
                <span aria-hidden="true">·</span>
                <span>Open Daily {salonData.contact.openingHours}</span>
                <span aria-hidden="true">·</span>
                <span>Pragathi Nagar, Hyderabad</span>
              </motion.div>
            </div>

            {/* Right Portrait */}
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 28, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#1E2952]/15 border border-[#1E2952]/10">
                <EditorialImage
                  src={salonData.media.heroPortrait.src}
                  alt={salonData.media.heroPortrait.alt}
                  expectedPath={salonData.media.heroPortrait.expectedPath}
                  recommendedDimensions={
                    salonData.media.heroPortrait.recommendedDimensions
                  }
                  aspectClass="aspect-[4/5]"
                  zoomOnHover={false}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E2952]/85 via-[#1E2952]/35 to-transparent p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFCE8A]">
                    Led By {salonData.founder.name}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/95">
                    CIDESCO International Certified Beauty Therapist
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW — Warm Cream (#FFF5EC) */}
      <section className="bg-[#FFF5EC] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <SkewHeading
              as="h2"
              className="text-2xl sm:text-3xl lg:text-[40px] text-[#1A1A1A]"
            >
              {salonData.name}
            </SkewHeading>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="md:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E2952]">
                About Us
              </p>
              <p className="mt-2 text-xs text-[#555555]">
                Pragathi Nagar · Single-Branch Studio
              </p>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 text-sm sm:text-[15px] leading-relaxed text-[#555555]">
              <p>{salonData.about.introLeft}</p>
              <p>{salonData.about.introRight}</p>
            </div>
          </div>

          {/* 3-Column Editorial Image Row with FadeInStagger */}
          <FadeInStagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {salonData.about.previewImages.map((photo) => (
              <FadeInItem key={photo.src} className="group">
                <div className="overflow-hidden rounded-xl border border-[#1E2952]/10 bg-white">
                  <EditorialImage
                    src={photo.src}
                    alt={photo.alt}
                    aspectClass="aspect-[4/5]"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1E2952]">
                  {photo.caption}
                </p>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#1E2952]/10 pt-8">
            <p className="max-w-2xl text-sm leading-relaxed text-[#555555]">
              Hair treatments, O3+ facials, sensitive-skin Rica waxing, D-Tan
              rituals, foot reflexology pedicures, and HD bridal artistry—all
              performed under one calm, women-only roof.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/about')}
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952] hover:text-[#F0784A] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Learn More</span>
              <ChevronsRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* 3. SALON STATS — Pure White (#FFFFFF) — Conditionally Rendered */}
      {salonData.stats.length > 0 && (
        <section className="bg-white py-20 sm:py-24 lg:py-28 border-y border-[#1E2952]/8">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading + Portrait */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                    Verified Reputation
                  </p>
                  <SkewHeading
                    as="h2"
                    className="text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A]"
                  >
                    Our Craft &amp; Trust
                  </SkewHeading>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#1E2952]/10">
                  <EditorialImage
                    src={salonData.media.statsPortrait.src}
                    alt={salonData.media.statsPortrait.alt}
                    expectedPath={salonData.media.statsPortrait.expectedPath}
                    recommendedDimensions={
                      salonData.media.statsPortrait.recommendedDimensions
                    }
                    aspectClass="aspect-[4/5]"
                  />
                </div>
              </div>

              {/* Right Column: Intro + Stacked CountUp Metrics */}
              <div className="lg:col-span-7 space-y-10">
                <p className="text-sm sm:text-base leading-relaxed text-[#555555] max-w-xl">
                  Every appointment at Restore Beauty Salon begins with an
                  honest consultation—no unnecessary upsells, strict sanitation,
                  and international CIDESCO cosmetology protocols you can trust.
                </p>

                <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 border-t border-[#1E2952]/12 pt-10">
                  {salonData.stats.map((stat) => (
                    <FadeInItem
                      key={stat.id}
                      className="space-y-2 pb-6 border-b border-[#1E2952]/10"
                    >
                      <div className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E2952]">
                        <CountUp
                          target={stat.value}
                          decimals={stat.decimals ?? 0}
                          suffix={stat.suffix}
                        />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0784A]">
                        {stat.label}
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#555555]">
                        {stat.context}
                      </p>
                    </FadeInItem>
                  ))}
                </FadeInStagger>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. OUR SERVICES SHOWCASE — Asymmetric Editorial Collage — Warm Cream */}
      {salonData.featuredServices.length > 0 && (
        <section className="bg-[#FFF5EC] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
              <div className="lg:col-span-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                  Curated Treatments
                </p>
                <SkewHeading
                  as="h2"
                  className="text-2xl sm:text-3xl lg:text-[40px] text-[#1A1A1A]"
                >
                  Our Services
                </SkewHeading>
              </div>
              <div className="lg:col-span-6">
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555] max-w-lg lg:ml-auto">
                  From dermatologist-grade O3+ skin therapies and Keratin hair
                  restoration to peaceful foot reflexology and camera-ready
                  bridal makeovers.
                </p>
              </div>
            </div>

            {/* Asymmetric 2-Column Editorial Photo Collage */}
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
              {salonData.featuredServices.map((service, index) => {
                const colClass =
                  index === 0
                    ? 'md:col-span-5'
                    : index === 1
                      ? 'md:col-span-7 md:mt-10'
                      : index === 2
                        ? 'md:col-span-7'
                        : 'md:col-span-5 md:mt-10';

                return (
                  <FadeInItem key={service.id} className={colClass}>
                    <button
                      type="button"
                      onClick={() => onNavigate('/services')}
                      className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A] rounded-2xl"
                    >
                      <div className="overflow-hidden rounded-2xl border border-[#1E2952]/10 bg-white">
                        <EditorialImage
                          src={service.image}
                          alt={service.imageAlt}
                          aspectClass={service.aspectClass}
                        />
                      </div>

                      <div className="mt-5 flex items-start justify-between gap-4 border-b border-[#1E2952]/15 pb-5">
                        <div className="space-y-1.5">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F0784A]">
                            {service.label}
                          </p>
                          <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#F0784A] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#555555]">
                            {service.subtitle}
                          </p>
                        </div>

                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1E2952]/20 bg-white text-[#1E2952] transition-all duration-200 group-hover:border-[#F0784A] group-hover:bg-[#F0784A] group-hover:text-white"
                        >
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </button>
                  </FadeInItem>
                );
              })}
            </FadeInStagger>
          </div>
        </section>
      )}

      {/* 5. SKIN & BEAUTY — Deep Royal Navy (#1E2952) Contrast Section */}
      {salonData.skinAndBeautyAccordion.length > 0 && (
        <section className="bg-[#1E2952] text-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Column: White SkewHeading + Calm Treatment Suite Portrait */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFCE8A]">
                    Personalized Cosmetology
                  </p>
                  <SkewHeading
                    as="h2"
                    className="text-2xl sm:text-3xl lg:text-[40px] text-white"
                  >
                    Skin &amp; Beauty
                  </SkewHeading>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/15">
                  <EditorialImage
                    src={salonData.media.navySectionPortrait.src}
                    alt={salonData.media.navySectionPortrait.alt}
                    expectedPath={
                      salonData.media.navySectionPortrait.expectedPath
                    }
                    recommendedDimensions={
                      salonData.media.navySectionPortrait.recommendedDimensions
                    }
                    aspectClass="aspect-[4/4]"
                  />
                </div>
              </div>

              {/* Right Column: Intro + Smooth Accordion + CIDESCO Callout */}
              <div className="lg:col-span-7 space-y-8 lg:pt-4">
                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                  Experience personalized skincare and beauty therapy crafted
                  around your unique skin tone, texture, and goals. From O3+
                  radiance facials and deep pore cleansing to Keratin hair care
                  and bridal preparation, every ritual is conducted in our
                  air-conditioned women-only suites.
                </p>

                <SmoothAccordion items={salonData.skinAndBeautyAccordion} />

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10">
                  <div className="space-y-1">
                    <p className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-[#F0784A]">
                      CIDESCO Certified
                    </p>
                    <p className="text-xs sm:text-sm text-white/75">
                      {salonData.founder.name} · Post Graduate Diploma in
                      Cosmetology
                    </p>
                  </div>

                  <CoralButton onClick={() => onNavigate('/services')}>
                    Explore Services
                  </CoralButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. BRAND PARTNERS MARQUEE — Conditionally rendered only if brandLogos.length > 0 */}
      <LogoMarquee logos={salonData.brandLogos} />

      {/* 7. SALON MENU PREVIEW — Warm Cream (#FFF5EC) */}
      {salonData.womensMenu.length > 0 && (
        <section className="bg-[#FFF5EC] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="text-center space-y-3 mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                100% Women-Only Sanctuary
              </p>
              <SkewHeading
                as="h2"
                className="text-2xl sm:text-3xl lg:text-[40px] text-[#1A1A1A]"
              >
                Restore Salon Menu
              </SkewHeading>
            </div>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hasMensMenu ? (
                <>
                  <FadeInItem>
                    <button
                      type="button"
                      onClick={() => onNavigate('/menu/men')}
                      className="group relative block w-full overflow-hidden rounded-2xl bg-[#1E2952] p-10 text-left text-white min-h-[340px]"
                    >
                      <h3 className="font-display text-2xl font-bold uppercase tracking-wider">
                        Men&apos;s Menu
                      </h3>
                    </button>
                  </FadeInItem>
                  <FadeInItem>
                    <button
                      type="button"
                      onClick={() => onNavigate('/menu/women')}
                      className="group relative block w-full overflow-hidden rounded-2xl bg-[#FFCE8A] p-10 text-left text-[#1A1A1A] min-h-[340px]"
                    >
                      <h3 className="font-display text-2xl font-bold uppercase tracking-wider">
                        Women&apos;s Menu
                      </h3>
                    </button>
                  </FadeInItem>
                </>
              ) : (
                <>
                  {/* Card 1: Deep Navy Editorial Card — Hair & Skin Care */}
                  <FadeInItem>
                    <button
                      type="button"
                      onClick={() => onNavigate('/menu/women')}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#1E2952] text-white min-h-[380px] sm:min-h-[420px] w-full text-left border border-[#1E2952]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A]"
                    >
                      <div className="absolute inset-0">
                        <img
                          src="/assets/aistudio/skincare_products_facial_steamer_cart_409174cb.jpg"
                          alt="Advanced skincare and cosmetology equipment at Restore Beauty Salon"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2952] via-[#1E2952]/75 to-[#1E2952]/55" />
                      </div>

                      <div className="relative z-10 p-8 sm:p-10 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFCE8A]">
                          Women&apos;s Menu · Part 01
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all group-hover:border-[#F0784A] group-hover:bg-[#F0784A]">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="relative z-10 p-8 sm:p-10 pt-0 space-y-4">
                        <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold uppercase tracking-wider leading-snug">
                          Hair Care &amp; Skin Rejuvenation
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 max-w-md">
                          Precision haircuts, Keratin, Hair Botox, permanent
                          smoothening, O3+ radiance facials, herbal glow &amp;
                          deep pore cleansing.
                        </p>
                        <span className="inline-flex items-center gap-1.5 pt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFCE8A] group-hover:text-[#F0784A] transition-colors">
                          <span>View Women&apos;s Menu</span>
                          <ChevronsRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </button>
                  </FadeInItem>

                  {/* Card 2: Warm Peach Editorial Card — Bridal, Spa & Grooming */}
                  <FadeInItem>
                    <button
                      type="button"
                      onClick={() => onNavigate('/menu/women')}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#FFCE8A] text-[#1A1A1A] min-h-[380px] sm:min-h-[420px] w-full text-left border border-[#1E2952]/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A]"
                    >
                      <div className="absolute inset-0">
                        <img
                          src="/assets/aistudio/bridal_makeup_and_hair_makeover_e804f3b7.jpg"
                          alt="Bridal makeup, nails, skin, spa and hair studio at Restore Beauty Salon"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FFCE8A] via-[#FFCE8A]/85 to-[#FFCE8A]/70" />
                      </div>

                      <div className="relative z-10 p-8 sm:p-10 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1E2952]">
                          Women&apos;s Menu · Part 02
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E2952]/25 text-[#1E2952] transition-all group-hover:border-[#F0784A] group-hover:bg-[#F0784A] group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="relative z-10 p-8 sm:p-10 pt-0 space-y-4">
                        <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold uppercase tracking-wider leading-snug text-[#1E2952]">
                          Bridal, Grooming &amp; Reflexology Spa
                        </h3>
                        <p className="text-sm leading-relaxed text-[#1A1A1A]/80 max-w-md">
                          HD bridal &amp; engagement makeovers, pre-bridal
                          packages, Rica sensitive-skin waxing, threading,
                          manicures &amp; foot reflexology.
                        </p>
                        <span className="inline-flex items-center gap-1.5 pt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952] group-hover:text-[#F0784A] transition-colors">
                          <span>Explore Full Menu</span>
                          <ChevronsRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </button>
                  </FadeInItem>
                </>
              )}
            </FadeInStagger>
          </div>
        </section>
      )}

      {/* 8. CLIENT TESTIMONIALS — Pure White (#FFFFFF) — Conditionally Rendered */}
      {salonData.testimonials.length > 0 && (
        <section className="bg-white py-20 sm:py-24 lg:py-28 border-t border-[#1E2952]/8">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="text-center space-y-3 mb-14 lg:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {salonData.rating.score.toFixed(1)} Stars ·{' '}
                  {salonData.rating.reviewsCount}+ {salonData.rating.source}
                </span>
              </p>
              <SkewHeading
                as="h2"
                className="text-2xl sm:text-3xl lg:text-[40px] text-[#1A1A1A]"
              >
                Client Testimonials
              </SkewHeading>
            </div>

            <TestimonialCarousel testimonials={salonData.testimonials} />
          </div>
        </section>
      )}
    </div>
  );
}
