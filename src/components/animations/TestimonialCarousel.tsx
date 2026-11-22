import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import type { TestimonialItem } from '../../data/salonData';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  if (testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx >= activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      {/* Left: 3 circular interactive client avatar medallions */}
      <div className="lg:col-span-4 flex items-center justify-center lg:justify-start gap-4 sm:gap-5">
        {testimonials.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`View review by ${item.author}`}
              aria-pressed={isActive}
              animate={{
                scale: isActive ? 1.12 : 0.94,
                opacity: isActive ? 1 : 0.65,
              }}
              whileHover={{ scale: isActive ? 1.14 : 1.02, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 flex-col items-center justify-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A] focus-visible:ring-offset-2 ${
                isActive
                  ? 'border-[#F0784A] bg-[#1E2952] text-white shadow-lg shadow-[#1E2952]/15'
                  : 'border-[#1E2952]/20 bg-[#F5E6D8] text-[#1E2952] hover:border-[#F0784A]/60'
              }`}
            >
              <span className="font-display text-base sm:text-lg font-bold tracking-wider">
                {item.initials}
              </span>
              <span
                className={`mt-0.5 text-[10px] font-medium tracking-wide ${
                  isActive ? 'text-[#FFCE8A]' : 'text-[#555555]'
                }`}
              >
                {item.rating.toFixed(1)} ★
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Right: Bold editorial quote + author + prev/next controls */}
      <div className="lg:col-span-8">
        <div className="mb-5 text-[#F0784A]" aria-hidden="true">
          <Quote className="h-9 w-9 fill-[#F0784A]/15 stroke-[#F0784A]" />
        </div>

        <div className="min-h-[168px] sm:min-h-[150px] relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -28 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <blockquote className="font-display text-base sm:text-xl lg:text-[22px] font-bold uppercase tracking-wide leading-[1.5] text-[#1A1A1A]">
                “{current.quote}”
              </blockquote>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-[#1E2952]">
                  {current.author}
                </span>
                <span aria-hidden="true" className="text-[#1E2952]/35">
                  ·
                </span>
                <span className="text-[#555555]">{current.context}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous client testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1E2952]/25 bg-white text-[#1E2952] transition-all duration-200 hover:border-[#F0784A] hover:bg-[#F0784A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A]"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next client testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1E2952]/25 bg-white text-[#1E2952] transition-all duration-200 hover:border-[#F0784A] hover:bg-[#F0784A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <span className="ml-2 text-xs font-medium tracking-wider text-[#555555] tabular-nums">
            0{activeIndex + 1} / 0{testimonials.length}
          </span>
        </div>
      </div>
    </div>
  );
}
