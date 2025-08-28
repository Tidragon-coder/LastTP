import SummaryItem from "../molecules/summaryItem";


type Section = {
  id: string;
  label: string;
  children?: Section[];
};

// 📜 Règlement Global
const RG: Section[] = [
  { id: "intro", label: "📜 Introduction" },
  { id: "rgprincipale", label: "⚖️ Règles principales" },
  { id: "avant-mort-rp", label: "⚠️ Avant une mort RP" },
  { id: "mort-rp", label: "⚰️ La mort RP" },
  { id: "nouveau-perso", label: "🆕 Nouveau personnage" },
  { id: "coma", label: "💤 Le coma" },
  { id: "entreprise", label: "🏢 Les entreprises" },
  { id: "boutique", label: "🛒 Informations boutique" },
  { id: "remboursementig", label: "💳 Remboursement InGame" },
  { id: "divers", label: "📌 Règles diverses" },
  { id: "logicielext", label: "💻 Logiciels externes" },
];


// ⚖️ Règlement Légal
const RL: Section[]  = [
  { id: "intro", label: "📜 Introduction" },
  { id: "regles-principales", label: "⚖️ Règles principales" },
  { id: "patron", label: "💼 Devenir Patron" },
  {
    id: "entreprise",
    label: "🏢 Entreprise",
    children: [
      { id: "ems", label: "🚑 E.M.S" },
      { id: "lspd-bcso", label: "👮 L.S.P.D / B.C.S.O" },
      { id: "mecano", label: "🔧 Mécano" },
      { id: "avocat", label: "⚖️ Avocat" },
      { id: "juge", label: "👨‍⚖️ Juge" },
      { id: "procureur", label: "📜 Procureur" },
    ],
  },
];

// 🔪 Règlement Illégal
const RI: Section[] = [
  { id: "intro", label: "📜 Introduction" },
  { id: "leader", label: "👑 Devenir Leader" },
  { id: "groupes", label: "🕶️ Catégorie de groupes" },
  { id: "alliance-business", label: "🤝 Alliance & Business" },
  { id: "drogues", label: "💊 Drogues" },
  {
    id: "braquages",
    label: "🔫 Braquages",
    children: [
      { id: "base", label: "📌 Règles de bases" },
      { id: "supérette", label: "🏪 Braquage Supérette" },
      { id: "fleeca", label: "🏦 Braquage Fleeca Bank / Bijouterie" },
      { id: "pacific", label: "🏛️ Braquage Pacific Standard" },
      { id: "convoie-braquage", label: "🚛 Braquage convoi" },
      { id: "cambriolage", label: "🔓 Cambriolage" },
    ],
  },
  { id: "otage", label: "🔗 Prise d'Otage" },
  { id: "convoie", label: "🚚 Convoie" },
  { id: "police", label: "👮 Police" },
  { id: "gunfight-hopital", label: "💥 Gunfight / Hôpital" },
  { id: "divers", label: "📌 Divers" },
];


type SummarySidebarProps = {
  type: "global" | "legal" | "illegal";
};

export default function SummarySidebar({ type }: SummarySidebarProps) {
  let sections;
  switch (type) {
    case "legal":
      sections = RL;
      break;
    case "illegal":
      sections = RI;
      break;
    default:
      sections = RG;
  }

  return (
    <aside className="sticky top-24 p-4 border-l border-gray-700">
      <h3 className="font-semibold mb-4">Sommaire</h3>
      <ul className="space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <SummaryItem label={s.label} targetId={s.id} />
            {s.children && (
              <ul className="ml-4 mt-1 space-y-1">
                {s.children.map((child) => (
                  <SummaryItem
                    key={child.id}
                    label={child.label}
                    targetId={child.id}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

