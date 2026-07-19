interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ambrose Logo"
    >
      {/* Background */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="#062056"
        stroke="#06b6d4"
        strokeWidth="2"
      />

      {/* A */}
      <polygon
        points="25,70 35,30 45,70"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <line
        x1="30"
        y1="55"
        x2="40"
        y2="55"
        stroke="#06b6d4"
        strokeWidth="2.5"
      />

      {/* M */}
      <polyline
        points="55,70 60,35 65,50 70,35 75,70"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Accent */}
      <rect
        x="80"
        y="10"
        width="8"
        height="8"
        fill="#06b6d4"
      />
    </svg>
  );
}