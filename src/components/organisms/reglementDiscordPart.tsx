import { ShieldAlert, Gavel } from "lucide-react";

export default function DiscordRules() {
  const rules = [
    "Il est préférable pour nos joueurs d'être renommé avec votre ID UNIQUE, NOM ET PRENOM roleplay sur discord. Par exemple : [1] Jerry TANZ. Ce pseudonyme ne doit contenir aucun jeu de mot et ne pas symboliser une personne ayant commis un crime contre l’humanité, un homme politique, ou un personnage public, fictif ou réel. Il ne peut non-plus contenir des références à des groupes communautaires.",
    "Le respect est à conserver à chaque interaction commise sur nos serveurs discords. Aucune permission n'est donnée pour manquer de respect, insulter ou énoncer n'importe quelle phrase qui pourrait porter atteinte à une personne ou au serveur. Les propos à caractère haineux, racistes, homophobes et/ou discriminants sont prohibés.",
    "Les images et vidéos envoyées ne peuvent porter atteinte à un membre de la communauté de Last RolePlay. Les contenus à caractère haineux, religieux, politique, sexuel, homophobe ou discriminant/insultant envers autrui sont interdits.",
    "Les trolls audios sont interdits. Les salons vocaux sont là pour traiter vos demandes ou vous amuser entre joueurs de Last RolePlay. Il est préférable d'avoir du matériel audio convenable.",
    "L'ensemble de nos serveurs discords sont destinés à une communauté francophone, veuillez écrire en français uniquement. Exprimez-vous correctement avec un langage simple, clair et compréhensible.",
    "Tous les liens menant vers des sites frauduleux ou de téléchargements illégaux sont interdits. Cela inclut également les liens vers applications illégales, virus, cracks, etc.",
    "La publicité menant vers d'autres serveurs est interdite, tout comme la publicité en général (par exemple vers votre entreprise de vente).",
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6  rounded-2xl shadow-2xl">
      <div className="flex items-center justify-center gap-3 mb-8">
        <ShieldAlert className="w-10 h-10 text-red-400" />
        <h2 className="text-4xl font-extrabold text-white tracking-wide">
          Règlement officiel
        </h2>
      </div>

      <p className="text-indigo-100 mb-10 text-center max-w-2xl mx-auto">
        Afin de garantir une atmosphère conviviale et sécurisée, chaque membre se doit 
        de respecter les règles ci-dessous. Tout manquement pourra entraîner une sanction.
      </p>

      <ul className="space-y-6">
        {rules.map((rule, index) => (
          <li
            key={index}
            className="bg-indigo-950/60 border-l-4 border-indigo-500 p-5 rounded-xl shadow-md hover:bg-indigo-900/60 transition"
          >
            <div className="flex items-start gap-3">
              <Gavel className="w-6 h-6 text-indigo-400 mt-1" />
              <p className="text-gray-100 leading-relaxed">{rule}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
