import React from "react";

interface ActionProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  iconPosition?: "default" | "reverse";
  className?: string;
}

const Action: React.FC<ActionProps> = ({
  label,
  onClick = () => {},
  icon,
  variant = "primary",
  iconPosition = "default",
  className = "",
}) => {
  const baseClasses =
    "flex items-center gap-1.5 rounded-full px-5 py-2 text-lg font-medium focus:outline-none";
  const variantClasses =
    variant === "primary"
      ? "shadow-actionPrimary bg-neutral-900 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";
  const flexDirection =
    iconPosition === "reverse" ? "flex-row-reverse" : "flex-row";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${flexDirection} ${className}`}
      onClick={onClick}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Action;
