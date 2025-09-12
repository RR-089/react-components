type LabelProps = {
  text: string;
  size?: "sm" | "md" | "lg";
  color?: "white" | "gray";
};

export default function Label({
  text,
  size = "md",
  color = "white",
}: LabelProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const colorClasses = {
    white: "text-white",
    gray: "text-gray-100",
  };

  return (
    <label
      className={`${sizeClasses[size]} ${colorClasses[color]} font-medium`}
    >
      {text}
    </label>
  );
}
