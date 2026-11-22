import React, { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { ArrowUp, ChevronsRight } from 'lucide-react';

interface CoralButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  external?: boolean;
  showArrows?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CoralButton({
  children,
  href,
  onClick,
  type = 'button',
  external = false,
  showArrows = true,
  size = 'md',
  className = '',
}: CoralButtonProps) {
  const sizeClasses =
    size === 'sm'
      ? 'px-5 py-2.5 text-xs'
      : size === 'lg'
        ? 'px-8 py-4 text-xs sm:text-sm'
        : 'px-6 py-3 text-xs';

  const classes = `group inline-flex items-center justify-center gap-2 rounded-full bg-[#F0784A] hover:bg-[#DC6336] text-white font-semibold uppercase tracking-[0.14em] whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.03] active:scale-[0.99] shadow-sm shadow-[#F0784A]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2952] focus-visible:ring-offset-2 ${sizeClasses} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrows && (
        <ChevronsRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

interface ImageDropzoneProps {
  expectedPath: string;
  recommendedDimensions: string;
  aspectClass?: string;
  className?: string;
}

export function ImageDropzone({
  expectedPath,
  recommendedDimensions,
  aspectClass = 'aspect-[4/3]',
  className = '',
}: ImageDropzoneProps) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-[#F5E6D8] border border-dashed border-[#1E2952]/30 p-6 text-center ${aspectClass} ${className}`}
    >
      <p className="text-xs font-medium text-[#1E2952]/75 tracking-wide">
        {expectedPath} — {recommendedDimensions}
      </p>
    </div>
  );
}

interface EditorialImageProps {
  src: string;
  alt: string;
  expectedPath?: string;
  recommendedDimensions?: string;
  aspectClass?: string;
  className?: string;
  imgClassName?: string;
  zoomOnHover?: boolean;
  objectPosition?: string;
}

export function EditorialImage({
  src,
  alt,
  expectedPath = '/images/salon-photo.jpg',
  recommendedDimensions = '800x900',
  aspectClass = 'aspect-[4/3]',
  className = '',
  imgClassName = '',
  zoomOnHover = true,
  objectPosition = 'object-center',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <ImageDropzone
        expectedPath={expectedPath}
        recommendedDimensions={recommendedDimensions}
        aspectClass={aspectClass}
        className={className}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-[#F5E6D8] ${aspectClass} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${objectPosition} ${
          zoomOnHover
            ? 'transition-transform duration-500 ease-out group-hover:scale-105 hover:scale-105'
            : ''
        } ${imgClassName}`}
      />
    </div>
  );
}

export function ScrollToTopButton() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 360);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 16, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.88 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-20 md:bottom-7 right-5 md:right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#F0784A] text-white shadow-lg shadow-[#1E2952]/20 transition-colors hover:bg-[#DC6336] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2952] focus-visible:ring-offset-2"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
