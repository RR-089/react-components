type LabelProps = {
  text: string;
  size?: "sm" | "md" | "lg";
  color?: "gray" | "red" | "blue";
};

export default function Label({
  text,
  size = "md",
  color = "gray",
}: LabelProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const colorClasses = {
    gray: "text-gray-700",
    red: "text-red-700",
    blue: "text-blue-700",
  };

  return (
    <span className={`${sizeClasses[size]} ${colorClasses[color]} font-medium`}>
      {text}
    </span>
  );
}
