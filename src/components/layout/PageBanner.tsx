import { SkewHeading } from '../animations';
import { VerticalSocialSidebar } from './VerticalSocialSidebar';

interface PageBannerProps {
  breadcrumbLabel: string;
  title: string;
  subtitle?: string;
}

export function PageBanner({
  breadcrumbLabel,
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFF5EC] border-b border-[#1E2952]/10 py-16 sm:py-22 lg:py-26">
      {/* Subtle architectural peach radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[44rem] rounded-full bg-[#FFCE8A]/35 blur-3xl"
      />

      <VerticalSocialSidebar tone="dark" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#555555] mb-4">
          <span>Home</span>
          <span aria-hidden="true" className="mx-3 text-[#F0784A]">
            /
          </span>
          <span className="text-[#1E2952]">{breadcrumbLabel}</span>
        </p>

        <SkewHeading
          as="h1"
          immediate
          className="text-2xl sm:text-4xl lg:text-5xl text-[#1A1A1A] mx-auto max-w-4xl"
        >
          {title}
        </SkewHeading>

        {subtitle && (
          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-[#555555]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
