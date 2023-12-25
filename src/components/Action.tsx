import React from "react";

interface ActionProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Action: React.FC<ActionProps> = ({
  label,
  onClick = () => {},
  icon,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "flex items-center gap-1 rounded-full px-5 py-2.5 text-lg font-medium focus:outline-none";
  const variantClasses =
    variant === "primary"
      ? "shadow-actionPrimary bg-neutral-900 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Action;
