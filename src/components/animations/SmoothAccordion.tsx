import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import type { AccordionServiceCategory } from '../../data/salonData';

interface SmoothAccordionProps {
  items: AccordionServiceCategory[];
  defaultOpenIndex?: number;
}

export function SmoothAccordion({
  items,
  defaultOpenIndex = 0,
}: SmoothAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    items.length > 0 ? defaultOpenIndex : null
  );

  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-white/15 border-t border-b border-white/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.id} className="py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E2952] rounded-md py-1"
            >
              <span className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors group-hover:text-[#FFCE8A]">
                {item.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors group-hover:border-[#F0784A] group-hover:text-[#F0784A]"
                aria-hidden="true"
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 pr-6 space-y-3">
                    <p className="text-sm sm:text-[15px] leading-relaxed text-white/80">
                      {item.summary}
                    </p>
                    {item.highlights.length > 0 && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-xs sm:text-sm text-[#FFCE8A]/95 flex items-baseline gap-2"
                          >
                            <span
                              aria-hidden="true"
                              className="text-[#F0784A] font-semibold"
                            >
                              ·
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
