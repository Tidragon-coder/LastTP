import SummaryItem from "../molecules/summaryItem";

const sections = [
  { id: "intro", label: "📜 Introduction" },
  { id: "definition", label: "🎭 Définition RP" },
  { id: "regles-principales", label: "⚖️ Règles principales" },
  { id: "coma", label: "💤 Règle Coma" },
  { id: "mort-intro", label: "☠️ Introduction Mort RP" },
  { id: "mort-rp", label: "⚰️ Règles Mort RP" },
  { id: "nouveau-perso", label: "👤 Nouveau personnage" },
  { id: "boutique", label: "🛒 Information Boutique" },
  { id: "remboursement", label: "💰 Information Remboursement" },
];


export default function SummarySidebar() {
  return (
    <aside className="sticky top-24 p-4 border-l border-gray-700">
      <h3 className="font-semibold mb-4">Sommaire</h3>
      <ul className="space-y-2">
        {sections.map((s) => (
          <SummaryItem key={s.id} label={s.label} targetId={s.id} />
        ))}
      </ul>
    </aside>
  );
}
