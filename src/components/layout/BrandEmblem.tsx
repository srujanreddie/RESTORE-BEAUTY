interface BrandEmblemProps {
  className?: string;
  light?: boolean;
}

export function BrandEmblem({
  className = 'h-8 w-10',
  light = false,
}: BrandEmblemProps) {
  const leftPetal = light ? '#8BC750' : '#7BB642';
  const rightPetal = light ? '#78A8DB' : '#4E7FB2';

  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left green lotus petals matching Restore Beauty Salon's official emblem */}
      <path
        d="M31.5 6C28.2 12.5 27.6 20.2 31.2 28.4C32.4 30.9 33.6 32.8 33.8 34.2C33.9 35.3 33.1 36.2 34 36.8C34.8 37.3 33.8 38.3 33.4 38.9C33.9 39.6 33.1 40.4 32.5 41C31.7 41.8 30.8 42.4 29.8 42.9C33.9 41.5 36.2 38.5 36.4 34.5C36.6 30.8 35.4 27.4 35.2 23.4C35 17.1 34.4 11 31.5 6Z"
        fill={leftPetal}
      />
      <path
        d="M20.2 13.8C19.8 21.8 23.2 29.8 29.4 36.6C29.8 29.2 27.5 20.6 20.2 13.8Z"
        fill={leftPetal}
      />
      <path
        d="M11.6 25.4C14.8 32.6 20.8 37.6 28.4 40.2C25.2 34 19.6 28.6 11.6 25.4Z"
        fill={leftPetal}
      />
      <path
        d="M9 38.6C14.8 43.2 22.2 44.4 29.2 42.2C23.4 39.8 16.4 38.2 9 38.6Z"
        fill={leftPetal}
      />
      {/* Right steel-blue lotus petals forming negative-space profile silhouette */}
      <path
        d="M42.8 12.8C38.4 17.4 36.4 23.4 37.4 30.4C41.8 25.6 43.8 19.4 42.8 12.8Z"
        fill={rightPetal}
      />
      <path
        d="M50.8 23.8C44.2 26.2 39.6 30.4 37.6 36.8C44 34.8 48.8 30.2 50.8 23.8Z"
        fill={rightPetal}
      />
      <path
        d="M55 38.6C48 37.6 41.2 39.2 35.4 42.4C42.2 44.4 49.4 43.2 55 38.6Z"
        fill={rightPetal}
      />
    </svg>
  );
}
