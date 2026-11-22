import { Phone } from 'lucide-react';
import { salonData } from '../../data/salonData';
import { CoralButton, SkewHeading } from '../animations';
import type { AppRoute } from './Header';

interface BookAppointmentCtaProps {
  onNavigate: (path: AppRoute) => void;
}

export function BookAppointmentCta({ onNavigate }: BookAppointmentCtaProps) {
  return (
    <section className="bg-[#FFF5EC] border-t border-[#1E2952]/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <SkewHeading
              as="h2"
              className="text-2xl sm:text-3xl lg:text-[38px] text-[#1A1A1A]"
            >
              Book an Appointment Now!
            </SkewHeading>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555]">
              Have a question about skin therapy, hair treatments, or bridal
              packages? Connect with our CIDESCO-certified team in Pragathi
              Nagar—open every day from {salonData.contact.openingHours}.
            </p>
            <a
              href={salonData.contact.callUri}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E2952] hover:text-[#F0784A] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#F0784A]" />
              <span className="tabular-nums">{salonData.contact.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-3">
            <CoralButton
              size="lg"
              href={salonData.contact.whatsappUri}
              external
            >
              Book Now
            </CoralButton>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E2952] underline underline-offset-4 hover:text-[#F0784A] transition-colors py-2 px-1"
            >
              Or Send Inquiry Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
