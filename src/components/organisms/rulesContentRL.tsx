import RuleSection from "../molecules/ruleSection";

export default function RulesContentLegal() {
  return (
    <div>
      <RuleSection
        id="intro"
        title="📜 Introduction"
        description="Bienvenue sur le règlement légal de LastRP. Merci de le lire attentivement avant de jouer."
        level={0}
      />

      <RuleSection
        id="regles-principales"
        title="⚖️ Règles principales"
        rules={[
          "Respectez les lois et les règles du serveur.",
          "Tout comportement abusif sera sanctionné.",
        ]}
        level={0}
      />

      <RuleSection
        id="patron"
        title="💼 Devenir Patron"
        description="Pour devenir patron, vous devez respecter certaines conditions et responsabilités."
        rules={[
          "Gérer correctement votre entreprise.",
          "Ne pas exploiter les mécaniques du serveur.",
        ]}
        level={0}
      />

      <RuleSection
        id="entreprise"
        title="🏢 Entreprise"
        level={0}
      />

      <RuleSection
        id="ems"
        title="🚑 E.M.S"
        description="Les membres de l’E.M.S doivent intervenir rapidement en cas d’incident."
        rules={[
          "Respecter les procédures médicales RP.",
          "Ne pas abuser de l’accès aux véhicules ou équipements.",
        ]}
        level={1}
      />

      <RuleSection
        id="lspd-bcso"
        title="👮 L.S.P.D / B.C.S.O"
        description="Les forces de l’ordre doivent maintenir la loi et l’ordre sur le serveur."
        rules={[
          "Respecter le RP policier.",
          "Ne pas abuser de la force ou du métagaming.",
        ]}
        level={1}
      />

      <RuleSection
        id="mecano"
        title="🔧 Mécano"
        description="Les mécanos doivent aider les joueurs dans leurs véhicules."
        rules={[
          "Fournir un service RP réaliste.",
          "Ne pas exploiter le métier pour tricher ou gagner illégalement.",
        ]}
        level={1}
      />

      <RuleSection
        id="avocat"
        title="⚖️ Avocat"
        description="Les avocats défendent les joueurs en cas de procès RP."
        rules={[
          "Respecter les règles RP du tribunal.",
          "Ne pas divulguer des informations hors RP.",
        ]}
        level={1}
      />

      <RuleSection
        id="juge"
        title="👨‍⚖️ Juge"
        description="Les juges doivent statuer de manière impartiale dans les affaires RP."
        rules={[
          "Suivre les procédures légales RP.",
          "Ne pas favoriser certains joueurs.",
        ]}
        level={1}
      />

      <RuleSection
        id="procureur"
        title="📜 Procureur"
        description="Le procureur représente l’État dans les affaires pénales RP."
        rules={[
          "Préparer et présenter les dossiers de manière RP.",
          "Ne pas manipuler les preuves hors RP.",
        ]}
        level={1}
      />
    </div>
  );
}
