interface BrandEmblemProps {
  className?: string;
  light?: boolean;
}

export function BrandEmblem({ className = 'h-7 w-7', light = false }: BrandEmblemProps) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left botanical petals inspired by Restore Beauty Salon's lotus emblem */}
      <path
        d="M23 30C15 30 7.5 27.5 4 24C9.5 22.5 16 24 22 27.5C15.5 21.5 11.5 15 11.5 9.5C16.5 12.5 20.5 18 23 24.5C21.5 16.5 22 9 25 3C28 9.5 27.5 17.5 25 25.5"
        fill={light ? '#FFCE8A' : '#4E8F49'}
      />
      {/* Right contrasting petals */}
      <path
        d="M26 27C29 19.5 32.5 13.5 37.5 10.5C37 16 33.5 22 27.5 27.5C33.5 24 39.5 23 44 25C40 28.5 33 30.5 25.5 30.5"
        fill={light ? '#F0784A' : '#1E2952'}
      />
    </svg>
  );
}
