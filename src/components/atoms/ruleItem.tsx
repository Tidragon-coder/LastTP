type RuleItemProps = {
  text: string;
  number?: number;
};

export default function RuleItem({ text, number }: RuleItemProps) {
  return (
    <li className="flex items-start gap-2 text-lg leading-relaxed mb-2">
      {number && (
        <span className="font-bold text-primary-500">{number}.</span>
      )}
      <span>{text}</span>
    </li>
  );
}
