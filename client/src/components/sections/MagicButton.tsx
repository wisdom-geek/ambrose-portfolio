import React from "react";
import { Loader2, Check } from "lucide-react";

interface Props {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  loading?: boolean;
  success?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  handleClick?: () => void;
  otherClasses?: string;
}

export default function MagicButton({
  title,
  icon,
  position = "right",
  loading = false,
  success = false,
  disabled = false,
  type = "button",
  handleClick,
  otherClasses = "",
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px]"
    >
      {!success && (
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#2563eb_50%,#22d3ee_100%)]" />
      )}

      <span
        className={`inline-flex w-full h-full items-center justify-center gap-2 rounded-lg bg-slate-950 backdrop-blur-xl ${otherClasses}`}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin w-4 h-4" />
            Sending...
          </>
        ) : success ? (
          <>
            <Check className="text-green-400" />
            Message Sent
          </>
        ) : (
          <>
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </>
        )}
      </span>
    </button>
  );
}