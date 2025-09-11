type LabelProps = {
  text: string;
};

export default function Label({ text }: LabelProps) {
  return <label className="text-white text-sm font-medium">{text}</label>;
}
