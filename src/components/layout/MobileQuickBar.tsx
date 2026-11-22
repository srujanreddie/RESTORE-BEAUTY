import { MessageCircle, Phone } from 'lucide-react';
import { salonData } from '../../data/salonData';

export function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-[#1E2952]/12 bg-[#FFF5EC]/95 backdrop-blur-md px-3 py-2">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={salonData.contact.callUri}
          className="flex h-11 items-center justify-center gap-2 rounded-full border border-[#1E2952]/25 bg-white text-xs font-semibold uppercase tracking-wider text-[#1E2952] active:scale-[0.98] transition-transform"
        >
          <Phone className="h-3.5 w-3.5 text-[#F0784A]" />
          <span>Call Salon</span>
        </a>
        <a
          href={salonData.contact.whatsappUri}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#F0784A] text-xs font-semibold uppercase tracking-wider text-white active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span>WhatsApp Book</span>
        </a>
      </div>
    </div>
  );
}
