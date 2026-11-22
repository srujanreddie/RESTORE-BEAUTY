import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppBookingUrl, salonData } from '../data/salonData';
import {
  CoralButton,
  FadeInItem,
  FadeInStagger,
  SkewHeading,
} from '../components/animations';
import { PageBanner } from '../components/layout/PageBanner';
import type { AppRoute } from '../components/layout/Header';

interface MenuPageProps {
  variant: 'women' | 'men';
  onNavigate: (path: AppRoute) => void;
}

export function MenuPage({ variant, onNavigate }: MenuPageProps) {
  const categories =
    variant === 'men' ? salonData.mensMenu : salonData.womensMenu;
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const visibleCategories =
    selectedCategoryId === 'all'
      ? categories
      : categories.filter((c) => c.id === selectedCategoryId);

  // Clean women-only notice if someone visits /menu/men while mensMenu is empty
  if (variant === 'men' && categories.length === 0) {
    return (
      <div>
        <PageBanner
          breadcrumbLabel="Our Menus"
          title="100% Women-Only Sanctuary"
          subtitle="Restore Beauty Salon For Women in Pragathi Nagar exclusively serves women in a private, female-staffed studio."
        />
        <section className="bg-white py-20">
          <div className="mx-auto max-w-2xl px-6 text-center space-y-6">
            <p className="text-sm sm:text-base leading-relaxed text-[#555555]">
              We do not offer a men&apos;s menu so that every client enjoys
              uninterrupted privacy during facials, hair treatments, grooming,
              and bridal sessions. Explore our complete Women&apos;s Menu below.
            </p>
            <CoralButton onClick={() => onNavigate('/menu/women')}>
              View Women&apos;s Menu
            </CoralButton>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageBanner
        breadcrumbLabel="Our Menus"
        title={variant === 'men' ? 'Menu For Men' : 'Menu For Women'}
        subtitle="Explore our full single-branch treatment menu. Because hair length, skin type, and bridal customization vary per client, personalized quotes are shared instantly on WhatsApp or during your complimentary in-salon consultation."
      />

      {/* Interactive Category Filter Bar */}
      <section className="bg-white border-b border-[#1E2952]/10 py-6 sticky top-16 md:top-20 z-30">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap shrink-0 transition-colors ${
                selectedCategoryId === 'all'
                  ? 'bg-[#1E2952] text-white'
                  : 'bg-[#FFF5EC] text-[#1E2952] hover:bg-[#FFCE8A]/50'
              }`}
            >
              All Categories ({categories.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap shrink-0 transition-colors ${
                  selectedCategoryId === cat.id
                    ? 'bg-[#F0784A] text-white'
                    : 'bg-[#FFF5EC] text-[#1E2952] hover:bg-[#FFCE8A]/50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Deep Navy (#1E2952) and Pure White (#FFFFFF) Editorial Pricing Cards */}
      <section className="bg-[#FFF5EC] py-16 sm:py-22">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-10 sm:space-y-12">
          <FadeInStagger className="space-y-10 sm:space-y-12">
            {visibleCategories.map((category, idx) => {
              const isNavy = idx % 2 === 0;

              return (
                <FadeInItem key={category.id}>
                  <article
                    id={category.id}
                    className={`rounded-2xl overflow-hidden border transition-shadow ${
                      isNavy
                        ? 'bg-[#1E2952] text-white border-[#1E2952]'
                        : 'bg-white text-[#1A1A1A] border-[#1E2952]/12 shadow-sm'
                    }`}
                  >
                    {/* Card Header */}
                    <div
                      className={`px-6 sm:px-10 pt-8 sm:pt-10 pb-6 border-b ${
                        isNavy ? 'border-white/15' : 'border-[#1E2952]/10'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div className="space-y-2">
                          <p
                            className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                              isNavy ? 'text-[#FFCE8A]' : 'text-[#F0784A]'
                            }`}
                          >
                            0{idx + 1}. Restore Women&apos;s Menu
                          </p>
                          <SkewHeading
                            as="h2"
                            className={`text-xl sm:text-2xl lg:text-[28px] ${
                              isNavy ? 'text-white' : 'text-[#1E2952]'
                            }`}
                          >
                            {category.title}
                          </SkewHeading>
                          <p
                            className={`text-xs sm:text-sm ${
                              isNavy ? 'text-white/75' : 'text-[#555555]'
                            }`}
                          >
                            {category.subtitle}
                          </p>
                        </div>

                        <a
                          href={buildWhatsAppBookingUrl(category.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                            isNavy
                              ? 'bg-[#F0784A] text-white hover:bg-[#DC6336]'
                              : 'bg-[#1E2952] text-white hover:bg-[#F0784A]'
                          }`}
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          <span>Inquire Category</span>
                        </a>
                      </div>
                    </div>

                    {/* Responsive Pricing & Service Table */}
                    <div className="px-6 sm:px-10 py-6 overflow-x-auto">
                      <table className="w-full min-w-[600px] border-collapse text-left">
                        <thead>
                          <tr
                            className={`border-b text-[11px] font-bold uppercase tracking-[0.18em] ${
                              isNavy
                                ? 'border-white/15 text-[#FFCE8A]'
                                : 'border-[#1E2952]/12 text-[#1E2952]'
                            }`}
                          >
                            <th className="py-3 pr-4 w-[46%]">Service</th>
                            <th className="py-3 px-3 w-[16%]">Regular Price</th>
                            <th className="py-3 px-3 w-[15%]">Member Price</th>
                            <th className="py-3 px-3 w-[12%]">Duration</th>
                            <th className="py-3 pl-3 text-right w-[11%]">
                              Book
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          className={`divide-y ${
                            isNavy
                              ? 'divide-white/10'
                              : 'divide-[#1E2952]/8'
                          }`}
                        >
                          {category.items.map((item) => (
                            <tr
                              key={item.name}
                              className={`transition-colors ${
                                isNavy
                                  ? 'hover:bg-white/[0.04]'
                                  : 'hover:bg-[#FFF5EC]/60'
                              }`}
                            >
                              <td className="py-4 pr-4 align-top">
                                <p
                                  className={`text-sm sm:text-[15px] font-semibold ${
                                    isNavy ? 'text-white' : 'text-[#1A1A1A]'
                                  }`}
                                >
                                  {item.name}
                                </p>
                                <p
                                  className={`mt-1 text-xs leading-relaxed ${
                                    isNavy ? 'text-white/70' : 'text-[#555555]'
                                  }`}
                                >
                                  {item.description}
                                </p>
                              </td>
                              <td className="py-4 px-3 align-top text-sm font-semibold tabular-nums whitespace-nowrap">
                                {item.regularPrice ? (
                                  <span
                                    className={
                                      isNavy ? 'text-[#FFCE8A]' : 'text-[#1E2952]'
                                    }
                                  >
                                    {item.regularPrice}
                                  </span>
                                ) : (
                                  <span
                                    className={`text-xs font-normal ${
                                      isNavy
                                        ? 'text-white/60'
                                        : 'text-[#555555]'
                                    }`}
                                  >
                                    On Consultation
                                  </span>
                                )}
                              </td>
                              <td className="py-4 px-3 align-top text-sm tabular-nums whitespace-nowrap">
                                {item.memberPrice ? (
                                  <span>{item.memberPrice}</span>
                                ) : (
                                  <span
                                    className={`text-xs ${
                                      isNavy
                                        ? 'text-white/45'
                                        : 'text-[#555555]/70'
                                    }`}
                                  >
                                    —
                                  </span>
                                )}
                              </td>
                              <td className="py-4 px-3 align-top text-xs sm:text-sm tabular-nums whitespace-nowrap">
                                {item.duration ? (
                                  <span>{item.duration}</span>
                                ) : (
                                  <span
                                    className={
                                      isNavy
                                        ? 'text-white/50'
                                        : 'text-[#555555]/75'
                                    }
                                  >
                                    —
                                  </span>
                                )}
                              </td>
                              <td className="py-4 pl-3 align-top text-right whitespace-nowrap">
                                <a
                                  href={buildWhatsAppBookingUrl(item.name)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                                    isNavy
                                      ? 'text-[#FFCE8A] hover:text-[#F0784A]'
                                      : 'text-[#F0784A] hover:text-[#1E2952]'
                                  }`}
                                >
                                  <span>Inquire</span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Card Footer Note */}
                    <div
                      className={`px-6 sm:px-10 py-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
                        isNavy
                          ? 'border-white/10 text-white/60 bg-black/10'
                          : 'border-[#1E2952]/8 text-[#555555] bg-[#FFF5EC]/50'
                      }`}
                    >
                      <span>
                        Complimentary consultation included with every visit.
                      </span>
                      <span className="font-semibold uppercase tracking-wider">
                        {salonData.shortName} · Pragathi Nagar
                      </span>
                    </div>
                  </article>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
