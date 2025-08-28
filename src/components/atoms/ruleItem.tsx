type RuleItemProps = {
  rule: {
    title?: string;
    description?: string;
  };
  number?: number;
};

export default function RuleItem({ rule, number }: RuleItemProps) {
  return (
    <li className="flex flex-col gap-1 text-[15px] leading-relaxed mb-4">
      <div className="flex items-start gap-2">
        {number && (
          <span className="font-bold text-primary-500 mt-1">{number}.</span>
        )}
        <span className="font-semibold">{rule.title}</span>
      </div>
      <p className="text-gray-400 pl-4">{rule.description}</p>
    </li>
  );
}
