import { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { salonData } from '../data/salonData';
import { CoralButton, EditorialImage, SkewHeading } from '../components/animations';
import { PageBanner } from '../components/layout/PageBanner';

interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDateTime: string;
  comment: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

export function ContactPage() {
  const serviceOptions = useMemo(() => {
    const list: string[] = [];
    for (const cat of salonData.womensMenu) {
      list.push(cat.title);
      for (const item of cat.items) {
        list.push(`${cat.title} — ${item.name}`);
      }
    }
    return list;
  }, []);

  const [form, setForm] = useState<BookingFormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDateTime: '',
    comment: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<BookingFormState | null>(
    null
  );

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'Please enter your full name.';
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      next.phone = 'Please enter a valid 10-digit phone or WhatsApp number.';
    }
    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.service.trim()) {
      next.service = 'Please select the service you are interested in.';
    }
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmittedData({ ...form });
  };

  const buildSubmittedWhatsAppUrl = (data: BookingFormState) => {
    const lines = [
      `Hi Restore Beauty Salon, I would like to book an appointment.`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
      data.preferredDateTime
        ? `Preferred Date/Time: ${data.preferredDateTime}`
        : '',
      data.comment ? `Notes: ${data.comment}` : '',
    ].filter(Boolean);
    return `${salonData.contact.whatsappBase}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
  };

  return (
    <div>
      <PageBanner
        breadcrumbLabel="Contact"
        title="Contact Us"
        subtitle="Visit our single-branch women-only salon in Pragathi Nagar, Kukatpally, or send an appointment request below."
      />

      {/* 2-Column Split: Single-Branch Contact Details + Booking Form */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Single-Branch Contact Details & Building Identification */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                  Single-Branch Studio
                </p>
                <SkewHeading
                  as="h2"
                  className="text-xl sm:text-2xl lg:text-[28px] text-[#1A1A1A]"
                >
                  Contact Details
                </SkewHeading>
              </div>

              <div className="space-y-6 divide-y divide-[#1E2952]/10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF5EC] text-[#F0784A]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952]">
                      Address
                    </h3>
                    <p className="text-sm leading-relaxed text-[#555555]">
                      {salonData.contact.addressLine1},{' '}
                      {salonData.contact.addressLine2},{' '}
                      {salonData.contact.addressLine3}
                    </p>
                    <p className="text-xs font-medium text-[#1E2952]/80">
                      Landmark: {salonData.contact.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF5EC] text-[#F0784A]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952]">
                      Phone &amp; WhatsApp
                    </h3>
                    <a
                      href={salonData.contact.callUri}
                      className="block text-base font-semibold text-[#1A1A1A] hover:text-[#F0784A] transition-colors tabular-nums"
                    >
                      {salonData.contact.phone}
                    </a>
                    <a
                      href={salonData.contact.whatsappUri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#F0784A] hover:text-[#1E2952] transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {salonData.contact.email && (
                  <div className="flex items-start gap-4 pt-6">
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952]">
                        Email
                      </h3>
                      <a
                        href={`mailto:${salonData.contact.email}`}
                        className="text-sm text-[#555555] hover:text-[#F0784A]"
                      >
                        {salonData.contact.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF5EC] text-[#F0784A]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952]">
                      Opening Hours
                    </h3>
                    <p className="text-sm text-[#555555]">
                      {salonData.contact.openingDays}
                    </p>
                    <p className="text-sm font-semibold text-[#1E2952] tabular-nums">
                      {salonData.contact.openingHours}
                    </p>
                  </div>
                </div>

                {salonData.socialLinks.length > 0 && (
                  <div className="flex items-start gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF5EC] text-[#F0784A]">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E2952]">
                        Instagram
                      </h3>
                      {salonData.socialLinks
                        .filter((s) => s.id === 'instagram')
                        .map((social) => (
                          <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#555555] hover:text-[#F0784A] transition-colors"
                          >
                            {social.handle}
                          </a>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Exterior Identification Photo */}
              <div className="rounded-2xl overflow-hidden border border-[#1E2952]/12 bg-[#FFF5EC]">
                <EditorialImage
                  src={salonData.media.exteriorFacade.src}
                  alt={salonData.media.exteriorFacade.alt}
                  aspectClass="aspect-[16/10]"
                />
                <div className="px-5 py-3.5 text-xs text-[#1E2952]">
                  <span className="font-semibold">Spot Our Signboard:</span>{' '}
                  First Floor, Nakoda Deep Residency (Above Sri Tirupatamma
                  General Stores)
                </div>
              </div>
            </div>

            {/* Right Column: GET IN TOUCH WITH US Booking Form */}
            <div
              id="book"
              className="lg:col-span-7 rounded-2xl bg-[#FFF5EC] border border-[#1E2952]/12 p-7 sm:p-10"
            >
              <div className="space-y-2 mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                  Appointment Request
                </p>
                <SkewHeading
                  as="h2"
                  className="text-xl sm:text-2xl lg:text-[28px] text-[#1A1A1A]"
                >
                  Get In Touch With Us
                </SkewHeading>
              </div>

              {submittedData ? (
                <div className="rounded-2xl bg-white border border-[#1E2952]/12 p-7 sm:p-8 space-y-5">
                  <div className="flex items-center gap-3 text-[#1E2952]">
                    <CheckCircle2 className="h-7 w-7 text-[#F0784A] shrink-0" />
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider">
                        Request Ready To Confirm
                      </h3>
                      <p className="text-xs text-[#555555] mt-0.5">
                        Thank you, {submittedData.name}. Send your details
                        directly to our salon WhatsApp desk for instant slot
                        confirmation.
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm border-y border-[#1E2952]/10 py-4">
                    <div>
                      <dt className="text-[#555555]">Phone</dt>
                      <dd className="font-semibold text-[#1E2952] tabular-nums">
                        {submittedData.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#555555]">Email</dt>
                      <dd className="font-semibold text-[#1E2952]">
                        {submittedData.email}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-[#555555]">Service Required</dt>
                      <dd className="font-semibold text-[#1E2952]">
                        {submittedData.service}
                      </dd>
                    </div>
                    {submittedData.preferredDateTime && (
                      <div className="sm:col-span-2">
                        <dt className="text-[#555555]">Preferred Date / Time</dt>
                        <dd className="font-semibold text-[#1E2952]">
                          {submittedData.preferredDateTime}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <div className="flex flex-wrap items-center gap-4">
                    <CoralButton
                      href={buildSubmittedWhatsAppUrl(submittedData)}
                      external
                    >
                      Confirm on WhatsApp
                    </CoralButton>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setForm({
                          name: '',
                          phone: '',
                          email: '',
                          service: '',
                          preferredDateTime: '',
                          comment: '',
                        });
                      }}
                      className="text-xs font-semibold uppercase tracking-wider text-[#1E2952] underline underline-offset-4 hover:text-[#F0784A]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2952] mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name)
                            setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Your full name"
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#555555]/50 focus:outline-none focus:ring-2 focus:ring-[#F0784A] ${
                          errors.name
                            ? 'border-red-500'
                            : 'border-[#1E2952]/15'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2952] mb-2"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, phone: e.target.value }));
                          if (errors.phone)
                            setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#555555]/50 focus:outline-none focus:ring-2 focus:ring-[#F0784A] tabular-nums ${
                          errors.phone
                            ? 'border-red-500'
                            : 'border-[#1E2952]/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="booking-email"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2952] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email)
                            setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="you@example.com"
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#555555]/50 focus:outline-none focus:ring-2 focus:ring-[#F0784A] ${
                          errors.email
                            ? 'border-red-500'
                            : 'border-[#1E2952]/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-service"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2952] mb-2"
                      >
                        Service Required *
                      </label>
                      <select
                        id="booking-service"
                        required
                        value={form.service}
                        onChange={(e) => {
                          setForm((prev) => ({
                            ...prev,
                            service: e.target.value,
                          }));
                          if (errors.service)
                            setErrors((prev) => ({
                              ...prev,
                              service: undefined,
                            }));
                        }}
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#F0784A] ${
                          errors.service
                            ? 'border-red-500'
                            : 'border-[#1E2952]/15'
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-datetime"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2952] mb-2"
                    >
                      Preferred Date &amp; Time
                    </label>
                    <input
                      id="booking-datetime"
                      type="text"
                      value={form.preferredDateTime}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          preferredDateTime: e.target.value,
                        }))
                      }
                      placeholder="e.g., Saturday, 5:30 PM (Open 8:00 AM – 10:00 PM)"
                      className="w-full rounded-xl border border-[#1E2952]/15 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#555555]/50 focus:outline-none focus:ring-2 focus:ring-[#F0784A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-comment"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2952] mb-2"
                    >
                      Comment
                    </label>
                    <textarea
                      id="booking-comment"
                      rows={4}
                      value={form.comment}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, comment: e.target.value }))
                      }
                      placeholder="Any skin sensitivities, hair length notes, or bridal date details..."
                      className="w-full rounded-xl border border-[#1E2952]/15 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#555555]/50 focus:outline-none focus:ring-2 focus:ring-[#F0784A] resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <CoralButton type="submit" size="lg">
                      Send Message
                    </CoralButton>
                    <span className="text-xs text-[#555555]">
                      100% Women-Only Salon · Pragathi Nagar
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Single-Branch Location Map */}
      {salonData.contact.mapsEmbedUrl && (
        <section className="bg-[#FFF5EC] py-16 sm:py-20 border-t border-[#1E2952]/10">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0784A]">
                  Directions
                </p>
                <SkewHeading
                  as="h2"
                  className="text-xl sm:text-2xl lg:text-[32px] text-[#1A1A1A]"
                >
                  Find Us In Pragathi Nagar
                </SkewHeading>
              </div>

              <a
                href={salonData.contact.mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E2952]/20 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2952] hover:border-[#F0784A] hover:text-[#F0784A] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#1E2952]/15 bg-white shadow-sm">
              <iframe
                title="Restore Beauty Salon For Women — Pragathi Nagar, Hyderabad Map"
                src={salonData.contact.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] sm:h-[440px] w-full border-0"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
