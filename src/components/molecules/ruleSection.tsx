import { useState } from "react";
import RuleItem from "../atoms/ruleItem";

type Regle = {
  title?: string;
  description?: string;
};
type Alert = {
  type: "info" | "warning";
  message: string;
};

type RuleSectionProps = {
  id: string;
  title: string;
  description?: string;
  rules?: Regle[];
  txtend?: string;
  alert?: Alert[];
  level?: number;
};

export default function RuleSection({
  id,
  title,
  description,
  rules,
  txtend,
  alert,
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
      {open && (
        <div className="pl-2">
          {description && <p className="mb-4 text-gray-300">{description}</p>}
          {rules && (
            <ul className="text-gray-300 ml-4">
              {rules.map((rule, i) => (
                <RuleItem key={i} rule={rule} number={i + 1} />
              ))}
            </ul>
          )}
          {txtend && <p className="mt-4 text-gray-300">{txtend}</p>}
          {alert && (
            <div className="mt-4 space-y-3">
              {alert.map((a, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg text-sm font-medium ${a.type === "info"
                      ? "bg-green-900/40 border border-green-500 text-green-200"
                      : "bg-red-900/40 border border-red-500 text-red-200"
                    }`}
                >
                  {a.message}
                </div>
              ))}
            </div>
          )}

        </div>
      )}
    </section>
  );
}
