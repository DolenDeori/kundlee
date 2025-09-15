import * as React from "react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  label: string;
  variant?: "teal" | "saffron" | "outline";
  className?: string;
};

const variantClasses: Record<string, string> = {
  teal: "bg-teal-900 hover:bg-teal-800 text-white",
  saffron: "bg-saffron hover:bg-saffron-dark text-white",
  outline:
    "border-2 border-teal-900 text-teal-900 bg-transparent hover:bg-teal-900 hover:text-white",
};

export const PremiumButton = React.forwardRef<
  HTMLButtonElement,
  PremiumButtonProps
>(({ icon, label, variant = "teal", className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "premium-btn w-full font-inter font-medium px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden",
      variantClasses[variant],
      className
    )}
    {...props}
  >
    <span>{label}</span>
    {icon && <span className="ml-2">{icon}</span>}
  </button>
));
PremiumButton.displayName = "PremiumButton";
