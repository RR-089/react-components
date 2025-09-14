import Button from "./Button";

type CardProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function Card({ title, description, onClick }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4 text-gray-600">{description}</p>
      {onClick && <Button onClick={onClick}>Check More</Button>}
    </div>
  );
}
