import RuleSection from "../molecules/ruleSection";

export default function IllegalRulesContent() {
  return (
    <div>
      <RuleSection
        id="intro"
        title="📜 Introduction"
        description="Bienvenue sur le règlement illégal de LastRP. Ces règles concernent les activités illégales en jeu et doivent être respectées pour garantir un RP cohérent."
      />

      <RuleSection
        id="leader"
        title="👑 Devenir Leader"
        description="Pour devenir leader d'un groupe illégal, vous devez montrer votre sérieux RP et respecter le staff."
      />

      <RuleSection
        id="groupes"
        title="🕶️ Catégorie de groupes"
        description="Il existe plusieurs catégories de groupes : gangs, mafias, organisations illégales..."
      />

      <RuleSection
        id="alliance-business"
        title="🤝 Alliance & Business"
        description="Les alliances et transactions entre groupes doivent rester RP et équilibrées."
      />

      <RuleSection
        id="drogues"
        title="💊 Drogues"
        description="Règles liées à la production, vente et transport de drogues en RP."
        rules={[
          "Respectez les quantités réalistes et les interactions RP.",
          "Évitez de spammer des ventes pour ne pas déséquilibrer le serveur.",
        ]}
      />

      {/* Braquages avec sous-parties */}
      <RuleSection
        id="braquages"
        title="🔫 Braquages"
        description="Règles générales pour tous les braquages."
        rules={[
          "Planifier RP les braquages avec les membres de votre groupe.",
          "Respecter les cooldowns et zones RP définies.",
        ]}
      />

      <RuleSection
        id="base"
        title="📌 Règles de base"
        description="Règles de base applicables à tous les types de braquages."
        rules={[
          "Ne jamais mettre un joueur hors RP sans raison valable.",
          "Respecter la chronologie RP et ne pas abuser des ressources.",
        ]}
      />

      <RuleSection
        id="supérette"
        title="🏪 Braquage Supérette"
        rules={[
          "Les supérettes doivent être braquées en petits groupes.",
          "Ne pas bloquer le serveur ou gêner le RP d'autres joueurs.",
        ]}
        level={1} // retrait visuel pour indiquer sous-partie
      />

      <RuleSection
        id="fleeca"
        title="🏦 Braquage Fleeca Bank / Bijouterie"
        rules={[
          "Les braquages de banque nécessitent une préparation RP avec plan et rôles.",
          "Les alarmes et policiers doivent être respectés RP.",
        ]}
        level={1}
      />

      <RuleSection
        id="pacific"
        title="🏛️ Braquage Pacific Standard"
        rules={[
          "Prévoir un plan RP complet et organiser votre équipe.",
          "Respecter le cooldown des braquages et les règles de respawn.",
        ]}
        level={1}
      />

      <RuleSection
        id="convoie-braquage"
        title="🚛 Braquage convoi"
        rules={[
          "Les convois sont des événements RP et doivent être annoncés aux autorités RP si nécessaire.",
        ]}
        level={1}
      />

      <RuleSection
        id="cambriolage"
        title="🔓 Cambriolage"
        rules={[
          "Le cambriolage doit être cohérent avec le RP de votre personnage et ne pas spammer les victimes.",
        ]}
        level={1}
      />

      <RuleSection
        id="otage"
        title="🔗 Prise d'Otage"
        description="Règles pour les prises d'otage :"
        rules={[
          "Respecter le RP de la victime et ne pas forcer des actions irréalistes.",
          "Limiter la durée des scènes RP et prévenir le staff si nécessaire.",
        ]}
      />

      <RuleSection
        id="convoie"
        title="🚚 Convoie"
        rules={[
          "Planifier RP le convoi et respecter la sécurité RP des participants.",
        ]}
      />

      <RuleSection
        id="police"
        title="👮 Police"
        description="Interactions RP avec la police :"
        rules={[
          "Respecter les règles RP de la police et ne pas tricher.",
          "Les arrestations et poursuites doivent être RP.",
        ]}
      />

      <RuleSection
        id="gunfight-hopital"
        title="💥 Gunfight / Hôpital"
        rules={[
          "Les gunfights doivent être RP et justifiés.",
          "Les soins et hospitalisations doivent suivre les règles RP du serveur.",
        ]}
      />

      <RuleSection
        id="divers"
        title="📌 Divers"
        description="Règles diverses concernant le RP illégal."
        rules={[
          "Ne jamais utiliser de bugs pour votre avantage.",
          "Respecter le RP des autres joueurs en toutes circonstances.",
        ]}
      />
    </div>
  );
}
