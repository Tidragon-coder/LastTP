import TitlePart from "../atoms/titlePartRG";
import RuleItem from "../atoms/ruleItem";

type RuleSectionProps = {
  id: string;
  title: string;
  description?: string;
  rules?: string[];
};

export default function RuleSection({ id, title, description, rules }: RuleSectionProps) {
  return (
    <section className="mb-12" id={id}>
      <TitlePart text={title} id={id} />
      {description && <p className="mb-4 text-gray-300">{description}</p>}

      {rules && (
        <ul className="list-none pl-2">
          {rules.map((rule, i) => (
            <RuleItem key={i} text={rule} number={i + 1} />
          ))}
        </ul>
      )}
    </section>
  );
}
