import RuleSection from "../molecules/ruleSection";

export default function RulesContentLegal() {
  return (
    <div>
      <RuleSection
        id="intro"
        title="Introduction"
        description="Bienvenue sur le règlement légal de LastRP. Merci de le lire attentivement avant de jouer."
        rules={[
          { title: "Il est de votre responsabilité de le consulter régulièrement." },
          { title: "En jouant sur le serveur, vous acceptez de respecter ce règlement." },
        ]}
        alert={[{ type: "info", message: "Le règlement est susceptible d'être mis à jour. Les joueurs seront informés des changements majeurs." }]}
        level={0}
      />

      <RuleSection
        id="entreprise"
        title="Entreprise"
        description="Les entreprises sont des structures importantes sur LastRP. Voici les règles à respecter pour les patrons et les employés."
        rules={[
          {
            title: "Démission d'un patron d'entreprise",
            description: "Les patrons souhaitant quitter leur poste doivent en discuter avec le STAFF."
          },
          {
            title: "Utilisation des coffres d'entreprise",
            description: "Les coffres d'entreprise ne peuvent pas servir de coffre personnel et ne peuvent pas être vidés ou volés dans leur intégralité."
          },
          {
            title: "Interdiction d'utiliser les ressources de l'entreprise à des fins personnelles",
            description: "Il est INTERDIT d’utiliser l’argent, les véhicules ou l’équipement de l’entreprise à des fins personnelles."
          },
          {
            title: "Relevé de compte pour le FISC",
            description: "Si le FISC demande un relevé du compte de l’entreprise, le patron devra fournir l’intégralité du relevé."
          },
          {
            title: "Obligation d'utiliser les ressources de l'entreprise",
            description: "Il est OBLIGATOIRE d’utiliser les tenues, les véhicules et l’équipement de l’entreprise."
          },
          {
            title: "Cohérence hiérarchique et salariale",
            description: "Merci d’avoir une certaine cohérence selon la hiérarchie de votre entreprise, ainsi que leurs salaires."
          },
          {
            title: "Conseil pour la gestion des comptes",
            description: "Nous conseillons de faire un livret des comptes pour suivre les entrées et sorties de l’entreprise."
          },
          {
            title: "Durée minimale dans une entreprise",
            description: "Lorsque vous rejoignez une entreprise, vous devez y rester au minimum deux semaines avant de la quitter."
          },
          {
            title: "Interdiction de garder son service pour des activités non liées à l'entreprise",
            description: "Il est INTERDIT de garder son service pour des activités qui ne concernent pas l’entreprise. Vous devez prendre une fin de service avant d’aller en RP civil."
          }
        ]}
        level={0}
      />

      <RuleSection
        id="ems"
        title="E.M.S"
        description="Les membres de l’E.M.S doivent intervenir rapidement en cas d’incident."
        rules={[{
          title: "Interdiction d'être un EMS ripoux",
          description: "Il est STRICTEMENT INTERDIT d’être un EMS ripoux, sauf si cela a été validé par l’équipe légal."
        },
        {
          title: "Respect du secret médical et du Serment d'Hippocrate",
          description: "Vous êtes médecin et donc sous la responsabilité du secret médical et du Serment d'Hippocrate. Nous vous demandons de respecter ces principes."
        },
        {
          title: "Interdiction des certificats médicaux gratuits sans examen",
          description: "Il est INTERDIT de délivrer un certificat médical gratuitement et sans scène d’examen."
        },
        {
          title: "Attente obligatoire lors des grosses scènes RP",
          description: "Lorsque vous arrivez sur une grosse scène RP (prise d’otage, etc.), vous devez attendre que celle-ci soit terminée avant de réanimer les personnes, que ce soit côté L.S.P.D/B.C.S.O ou illégal. Vous avez l'OBLIGATION d’attendre que la scène soit terminée des deux côtés."
        },
        {
          title: "Neutralité obligatoire sur les scènes",
          description: "Vous devez garder une certaine neutralité sur vos scènes et ne pas avantager un parti (amis, famille, etc.) en HRP."
        },
        {
          title: "Qualité des scènes EMS",
          description: "Faites durer la scène et ne cherchez pas à simplement réanimer. Vous devez poser des questions, vous assurer que la personne va bien, etc. Un travail bâclé sera sanctionné, et l’équipe légal peut exiger un licenciement."
        }]}
        level={1}
      />

      <RuleSection
        id="lspd-bcso"
        title="L.S.P.D / B.C.S.O"
        description="Les forces de l’ordre doivent maintenir la loi et l’ordre sur le serveur."
        rules={[
          {
            title: "Interdiction du RP Ripoux sans validation",
            description: "Il est INTERDIT de faire un RP Ripoux sans avoir soumis et fait valider un dossier par l’équipe légal."
          },
          {
            title: "Interdiction des activités illégales et divulgation d'informations",
            description: "Vous avez l’INTERDICTION de pratiquer toute activité illégale et criminelle (farm de drogue, réunion illégale, etc.). Il est également INTERDIT de divulguer des informations à des personnes pratiquant l'illégalité, sauf si vous êtes enquêteur ou si cela est nécessaire pour faire avancer le RolePlay."
          },
          {
            title: "Utilisation obligatoire du bipeur pour les codes d'urgence",
            description: "Le bipeur se trouve sur votre radio. Si vous ne l’avez pas sur vous, vous avez l’INTERDICTION d’effectuer des Code 2, Code 3 ou Code 99."
          },
          {
            title: "Référence aux règles supplémentaires",
            description: "Pour toutes les autres règles et informations, consultez le G-Docs L.S.P.D/B.C.S.O disponible sur les serveurs Discord respectifs (L.S.P.D et B.C.S.O)."
          }
        ]}
        level={1}
      />


      <RuleSection
        id="gouvernement"
        title="Gouvernement"
        description="Les membres du gouvernement doivent gérer la ville de manière RP."
        rules={[
          {
            title: "Interdiction du RP Ripoux sans validation",
            description: "Il est INTERDIT de faire un RP Ripoux sans avoir soumis et fait valider un dossier par l’équipe légal."
          },
          {
            title: "Gestion des entreprises par le gouvernement",
            description: "C’est au gouvernement de gérer sa ville et ses entreprises. Il décide donc des entreprises présentes ou non. Chaque changement d’entreprise doit être signalé à l’équipe légal."
          },
          {
            title: "Scène de jugement obligatoire",
            description: "Si la justice est en place (juge, avocats, procureur…), une scène de jugement pour mettre une personne en fédéral est OBLIGATOIRE. Si le jugement est impossible, un convoi avec une annonce doit quand même avoir lieu."
          },
          {
            title: "Gestion des gardes du corps et déplacements gouvernementaux",
            description: "Le gouvernement a ses propres gardes du corps. Il gère donc le bâtiment gouvernemental ainsi que ses déplacements. Il peut demander l’aide du L.S.P.D/B.C.S.O si nécessaire."
          }
        ]}
        level={1}
      />

      <RuleSection
        id="mecano"
        title="Mécano"
        description="Les mécanos doivent aider les joueurs dans leurs véhicules."
        rules={[
          {
            title: "Jouer sa scène de réparation",
            description: "Vous devez jouer votre scène de réparation : prenez le temps de réparer le véhicule et ne vous contentez pas d’appuyer sur 'Réparer le véhicule' et de repartir. Une roue ne se change pas en 15 secondes !"
          },
          {
            title: "Obligation d'être en service pour réparer",
            description: "Vous devez être en service pour pouvoir réparer les véhicules. Il est INTERDIT de réparer des véhicules hors service en utilisant simplement 'Réparer le véhicule'. Cela est considéré comme du WinRP."
          },
          {
            title: "Réparation des véhicules gravement endommagés",
            description: "N’hésitez pas à emmener les véhicules trop endommagés dans le garage de l’entreprise pour les réparer. Cela ajoute du réalisme et est plus immersif (RP)."
          }
        ]}
        level={1}
      />
      <RuleSection
        id="avocat"
        title="Avocat"
        description="Les avocats défendent les joueurs en cas de procès RP."
        rules={[
          {
            title: "Interdiction du RP Ripoux sans validation",
            description: "Il est INTERDIT de faire un RP Ripoux sans avoir soumis et fait valider un dossier par l’équipe légal."
          },
          {
            title: "Obligation de défendre les clients",
            description: "Vous êtes dans l’OBLIGATION de défendre chaque personne qui vous le demande. À vous de décider de la qualité de cette défense."
          },
          {
            title: "Respect du secret professionnel",
            description: "Vous êtes sous la responsabilité du secret professionnel. Nous vous demandons de le respecter scrupuleusement."
          },
          {
            title: "Accès aux dossiers d'arrestation",
            description: "Vous pouvez avoir accès aux dossiers d’arrestation de la personne que vous défendez afin de constituer un dossier de défense. Ce dossier est visible via le M.D.T du L.S.P.D / B.C.S.O."
          },
          {
            title: "Conseil pour la constitution du dossier de défense",
            description: "Nous conseillons de demander le dossier d’arrestation le plus tôt possible afin de monter le dossier de défense de manière optimale."
          }
        ]}
        level={1}
      />

      <RuleSection
        id="juge"
        title="Juge"
        description="Les juges doivent statuer de manière impartiale dans les affaires RP."
        rules={[
          {
            title: "Cohérence et tranchant dans le RP",
            description: "Nous vous demandons d’être le plus tranchant possible et de maintenir une cohérence RP irréprochable."
          },
          {
            title: "Responsabilité dans les sentences",
            description: "C’est VOUS qui avez le dernier mot sur la sentence appliquée. Soyez Fair-Play : vous sanctionnez le personnage RP, pas le joueur. Trouvez un juste milieu pour une décision équilibrée."
          }
        ]}
        level={1}
      />

      <RuleSection
        id="procureur"
        title="Procureur"
        description="Le procureur représente l’État dans les affaires pénales RP."
        rules={[
          {
            title: "Décision de jugement et proposition de sentence",
            description: "C’est à vous de décider si un suspect doit être jugé. Lors du procès, vous devez soumettre une décision au juge, qui pourra l’accepter ou la modifier selon son jugement."
          },
          {
            title: "Rapport obligatoire avant le procès",
            description: "Vous devez rédiger un rapport détaillant les actes reprochés et la sanction proposée pour les agents. Ce rapport doit être envoyé **12 heures avant le procès**."
          },
          {
            title: "Information sur la situation des forces de l'ordre",
            description: "Vous devez vous informer régulièrement de la situation du L.S.P.D et du B.C.S.O pour adapter vos décisions en conséquence."
          }
        ]}
        level={1}
      />
    </div>
  );
}
