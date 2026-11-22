import { buildWhatsAppBookingUrl, salonData } from '../data/salonData';
import {
  CoralButton,
  EditorialImage,
  FadeInItem,
  FadeInStagger,
  SkewHeading,
  SmoothAccordion,
} from '../components/animations';
import { PageBanner } from '../components/layout/PageBanner';
import type { AppRoute } from '../components/layout/Header';

interface ServicesPageProps {
  onNavigate: (path: AppRoute) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div>
      <PageBanner
        breadcrumbLabel="Services"
        title="Our Services"
        subtitle="Tailored hair styling, CIDESCO-guided facials, gentle Rica waxing, foot reflexology, and HD bridal artistry crafted exclusively for women."
      />

      {/* Alternating 2-Column Editorial Service Rows */}
      <div>
        {salonData.womensMenu.map((category, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? 'bg-white' : 'bg-[#FFF5EC]';

          return (
            <section
              key={category.id}
              className={`${bgClass} py-16 sm:py-22 border-b border-[#1E2952]/8`}
            >
              <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                      0{index + 1}. Women-Only Treatment Suite
                    </p>

                    <SkewHeading
                      as="h2"
                      className="text-2xl sm:text-3xl lg:text-[34px] text-[#1A1A1A]"
                    >
                      {category.title}
                    </SkewHeading>

                    <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555]">
                      {category.subtitle}
                    </p>

                    <ul className="divide-y divide-[#1E2952]/10 border-t border-b border-[#1E2952]/10">
                      {category.items.map((item) => (
                        <li
                          key={item.name}
                          className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5"
                        >
                          <div>
                            <p className="text-sm font-semibold text-[#1E2952]">
                              {item.name}
                            </p>
                            <p className="text-xs text-[#555555] mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          {item.regularPrice && (
                            <span className="text-xs font-bold text-[#F0784A] tabular-nums whitespace-nowrap shrink-0">
                              {item.regularPrice}
                              {item.duration ? ` · ${item.duration}` : ''}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <CoralButton
                        href={buildWhatsAppBookingUrl(category.title)}
                        external
                      >
                        Inquire &amp; Book
                      </CoralButton>

                      <button
                        type="button"
                        onClick={() => onNavigate('/menu/women')}
                        className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E2952] underline underline-offset-4 hover:text-[#F0784A] transition-colors py-2"
                      >
                        View Full Menu
                      </button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="group overflow-hidden rounded-2xl border border-[#1E2952]/10 bg-[#F5E6D8]">
                      <EditorialImage
                        src={category.image}
                        alt={category.imageAlt}
                        aspectClass="aspect-[4/3]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Deep Navy Highlight Section — Cosmetology & Hygiene Suite */}
      {salonData.skinAndBeautyAccordion.length > 0 && (
        <section className="bg-[#1E2952] text-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFCE8A]">
                  Clinical Cosmetology
                </p>
                <SkewHeading
                  as="h2"
                  className="text-2xl sm:text-3xl lg:text-[34px] text-white"
                >
                  Cosmetology &amp; Spa Suite
                </SkewHeading>
                <div className="overflow-hidden rounded-2xl border border-white/15">
                  <EditorialImage
                    src="/assets/aistudio/cosmetology_tools_cart_cf7a50d8.jpg"
                    alt="Multi-function skin management cosmetology equipment inside Restore Beauty Salon"
                    aspectClass="aspect-[4/4]"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                  Every facial and scalp ritual at Restore Beauty Salon combines
                  CIDESCO-trained technique with dedicated cosmetology
                  instruments, ozone steaming, and sanitized care stations.
                </p>
                <SmoothAccordion items={salonData.skinAndBeautyAccordion} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4-Column Bordered Feature Card Grid */}
      {salonData.serviceFeatureGrid.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                Why Women Choose Restore
              </p>
              <SkewHeading
                as="h2"
                className="text-2xl sm:text-3xl lg:text-[36px] text-[#1A1A1A]"
              >
                The Restore Standard
              </SkewHeading>
            </div>

            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#1E2952]/15 rounded-2xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#1E2952]/12 bg-white">
              {salonData.serviceFeatureGrid.map((feature) => (
                <FadeInItem
                  key={feature.id}
                  className="p-7 sm:p-8 flex flex-col justify-between gap-4 hover:bg-[#FFF5EC]/60 transition-colors"
                >
                  <div className="space-y-4">
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-[#F0784A]">
                      {feature.number}.
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-[#1E2952]">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#555555]">
                      {feature.description}
                    </p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>
      )}
    </div>
  );
}
