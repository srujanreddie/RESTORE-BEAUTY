import { Instagram, MessageCircle, Phone } from 'lucide-react';
import { salonData, type SocialLink } from '../../data/salonData';

interface VerticalSocialSidebarProps {
  tone?: 'dark' | 'light';
}

function SocialIcon({ id }: { id: SocialLink['id'] }) {
  if (id === 'instagram') return <Instagram className="h-4 w-4" />;
  if (id === 'whatsapp') return <MessageCircle className="h-4 w-4" />;
  return <Phone className="h-4 w-4" />;
}

export function VerticalSocialSidebar({ tone = 'dark' }: VerticalSocialSidebarProps) {
  if (salonData.socialLinks.length === 0) return null;

  const textClass =
    tone === 'light'
      ? 'text-white/75 hover:text-[#FFCE8A]'
      : 'text-[#1E2952]/75 hover:text-[#F0784A]';

  const lineClass = tone === 'light' ? 'bg-white/25' : 'bg-[#1E2952]/25';

  return (
    <aside
      aria-label="Social Links"
      className="hidden xl:flex flex-col items-center gap-5 absolute right-6 top-1/2 -translate-y-1/2 z-20"
    >
      <span className={`h-10 w-px ${lineClass}`} aria-hidden="true" />
      {salonData.socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.label} (${social.handle})`}
          title={`${social.label}: ${social.handle}`}
          className={`flex flex-col items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0784A] rounded p-1 ${textClass}`}
        >
          <SocialIcon id={social.id} />
        </a>
      ))}
      <span className={`h-10 w-px ${lineClass}`} aria-hidden="true" />
    </aside>
  );
}
