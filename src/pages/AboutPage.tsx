import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Award, Check, X } from 'lucide-react';
import { salonData } from '../data/salonData';
import {
  CoralButton,
  EditorialImage,
  FadeInItem,
  FadeInStagger,
  SkewHeading,
} from '../components/animations';
import { PageBanner } from '../components/layout/PageBanner';

export function AboutPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % salonData.studioGallery.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + salonData.studioGallery.length) %
              salonData.studioGallery.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  const activePhoto =
    lightboxIndex !== null ? salonData.studioGallery[lightboxIndex] : null;

  return (
    <div>
      <PageBanner
        breadcrumbLabel="About Us"
        title={salonData.name}
        subtitle="A dedicated single-branch, 100% women-only beauty salon and wellness studio in Pragathi Nagar, Kukatpally, Hyderabad."
      />

      {/* Full Salon Story & Founder K. Shirisha Spotlight */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left: Story */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                Founder &amp; Lead Cosmetologist
              </p>
              <SkewHeading
                as="h2"
                className="text-2xl sm:text-3xl lg:text-[34px] text-[#1A1A1A]"
              >
                {salonData.about.headline}
              </SkewHeading>

              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#555555]">
                {salonData.about.fullStoryParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Certifications list */}
              <div className="pt-4 border-t border-[#1E2952]/12 space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952] flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#F0784A]" />
                  <span>Verified Credentials — {salonData.founder.name}</span>
                </p>
                <ul className="space-y-2">
                  {salonData.founder.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-start gap-2.5 text-sm text-[#1A1A1A]"
                    >
                      <Check className="h-4 w-4 text-[#F0784A] shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <CoralButton href={salonData.contact.whatsappUri} external>
                  Book Consultation
                </CoralButton>
              </div>
            </div>

            {/* Right: Official Visiting Card & CIDESCO Studio Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="overflow-hidden rounded-2xl border border-[#1E2952]/12 bg-[#FFF5EC] p-3">
                <img
                  src={salonData.founder.visitingCardImage}
                  alt="Official Restore Beauty Salon For Women logo and K. Shirisha CIDESCO International visiting card"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>

              <div className="rounded-2xl bg-[#1E2952] p-6 sm:p-7 text-white space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFCE8A]">
                  Studio Amenities
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-white/85">
                  {salonData.about.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="text-[#F0784A] font-bold"
                      >
                        ·
                      </span>
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Tour Photo Gallery */}
      <section className="bg-[#FFF5EC] py-20 sm:py-24 border-y border-[#1E2952]/10">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                Inside Our Pragathi Nagar Sanctuary
              </p>
              <SkewHeading
                as="h2"
                className="text-2xl sm:text-3xl lg:text-[36px] text-[#1A1A1A]"
              >
                Studio Tour
              </SkewHeading>
            </div>
            <p className="text-sm text-[#555555] max-w-md">
              Real photographs of our styling stations, CIDESCO consultation
              desk, private facial rooms, reflexology lounge, and Nakoda Deep
              Residency entrance.
            </p>
          </div>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salonData.studioGallery.map((photo, index) => (
              <FadeInItem key={photo.id}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group block w-full text-left overflow-hidden rounded-2xl border border-[#1E2952]/10 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A]"
                >
                  <EditorialImage
                    src={photo.src}
                    alt={photo.alt}
                    aspectClass="aspect-[4/3]"
                  />
                  <div className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F0784A]">
                        {photo.category}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[#1E2952]">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </button>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 2-Column Highlight Section: Vision & Sanctuary Standards */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-4 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[#1E2952]/12 lg:pr-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                01. Clinical Aesthetics
              </p>
              <SkewHeading
                as="h2"
                className="text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A]"
              >
                {salonData.about.vision.title}
              </SkewHeading>
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555]">
                {salonData.about.vision.text}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                02. Privacy &amp; Care
              </p>
              <SkewHeading
                as="h2"
                className="text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A]"
              >
                {salonData.about.standards.title}
              </SkewHeading>
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555]">
                {salonData.about.standards.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Studio Tour */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E2952]/90 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#1E2952] border border-white/15 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close gallery viewer"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#F0784A] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black/30 flex items-center justify-center">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-6 py-4 text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFCE8A]">
                    {activePhoto.category}
                  </p>
                  <p className="text-sm font-medium">{activePhoto.caption}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + salonData.studioGallery.length) %
                          salonData.studioGallery.length
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:border-[#F0784A] hover:bg-[#F0784A] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % salonData.studioGallery.length
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:border-[#F0784A] hover:bg-[#F0784A] transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
