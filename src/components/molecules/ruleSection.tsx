import { useState } from "react";
import RuleItem from "../atoms/ruleItem";

type RuleSectionProps = {
  id: string;
  title: string;
  description?: string;
  rules?: string[];
  level?: number; // 0 = section principale, 1 = sous-section, 2 = sous-sous-section
};

export default function RuleSection({
  id,
  title,
  description,
  rules,
  level = 0,
}: RuleSectionProps) {
  const [open, setOpen] = useState(false);

  const indentClass = level === 0 ? "pl-0" : level === 1 ? "pl-6" : "pl-12";
  const titleSizeClass =
    level === 0 ? "text-2xl" : level === 1 ? "text-xl" : "text-lg";
  const borderClass =
    level === 0 ? "border-t border-gray-700 pt-4 mt-4" : "pt-2 mt-2";

  return (
    <section className={`${indentClass} ${borderClass}`} id={id}>
      <h2
        className={`${titleSizeClass} font-semibold mb-2 cursor-pointer select-none flex items-center justify-between`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="ml-2 text-gray-400 text-sm">
          {open ? "▲" : "▼"}
        </span>
      </h2>

      {/* Contenu affiché uniquement si open */}
      {open && (
        <div className="pl-2">
          {description && <p className="mb-4 text-gray-300">{description}</p>}

          {rules && (
            <ul className="list-decimal list-inside text-sm text-gray-300 ml-8">
              {rules.map((rule, i) => (
                <RuleItem key={i} text={rule} number={i + 1} />
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
