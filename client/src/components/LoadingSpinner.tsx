import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function LoadingSpinner({ size = "md", color = "#22d3ee" }: LoadingSpinnerProps) {
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  const actualSize = sizeMap[size];
  const radius = actualSize / 2 - 2;

  return (
    <motion.svg
      width={actualSize}
      height={actualSize}
      viewBox={`0 0 ${actualSize} ${actualSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Outer rotating ring */}
      <circle
        cx={actualSize / 2}
        cy={actualSize / 2}
        r={radius}
        stroke={color}
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Inner animated stroke */}
      <motion.circle
        cx={actualSize / 2}
        cy={actualSize / 2}
        r={radius}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeDasharray={`${Math.PI * radius * 0.5} ${Math.PI * radius * 2}`}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -Math.PI * radius * 2 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        strokeLinecap="round"
      />

      {/* Pulsing dot at the end */}
      <motion.circle
        cx={actualSize / 2}
        cy={2}
        r="1.5"
        fill={color}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
