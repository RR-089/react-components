import type React from "react";
``;
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-xl font-medium transition-colors duration-200 cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary:
      "bg-gray-200 text-gray-800 hoverr:bg-gray-300 active:bg-gray-400",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100 active:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
}
