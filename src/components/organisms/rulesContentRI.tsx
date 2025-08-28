import RuleSection from "../molecules/ruleSection";

export default function IllegalRulesContent() {
  return (
    <div>
      <RuleSection
        id="intro"
        title="Introduction"
        description="Bienvenue sur le règlement illégal de LastRP. Ces règles concernent les activités illégales en jeu et doivent être respectées pour garantir un RP cohérent."
        rules={[
          { title: "Il est de votre responsabilité de le consulter régulièrement." },
          { title: "En jouant sur le serveur, vous acceptez de respecter ce règlement." },
        ]}
        alert={[{ type: "info", message: "Le règlement est susceptible d'être mis à jour. Les joueurs seront informés des changements majeurs." }]}
        level={0}
      />

      <RuleSection
        id="alliance"
        title="Alliance & business"
        description="Les alliances et transactions entre groupes doivent rester RP et équilibrées."
        rules={[
          {
            title: "Interdiction des alliances non commerciales",
            description: "Les alliances qui ne sont pas en rapport avec du business sont INTERDITES, afin de garder une certaine cohérence RP."
          },
          {
            title: "Business entre groupes",
            description: "Vous pouvez faire du business avec n’importe quel groupe de la ville, mais vous devez garder une certaine cohérence RP."
          },
          {
            title: "Interdiction des braquages conjoints",
            description: "Dès que 2 groupes braquent un seul et même groupe, cela est considéré comme une alliance. Cela est INTERDIT."
          },
          {
            title: "Interdiction des transactions dans les QG",
            description: "Il est INTERDIT d’effectuer des transactions au sein du QG d’un groupe, afin de respecter le MassRP et la cohérence du lieu."
          },
          {
            title: "Limitation des contrats entre organisations illégales",
            description: "Tout cela est juste à but commercial et uniquement entre deux organisations illégales. Il est INTERDIT de mettre plusieurs contrats sur le même groupe ou la même personne."
          }
        ]}
      />

      <RuleSection
        id="drogues"
        title="Drogues"
        description="Règles liées à la production, vente et transport de drogues en RP."
        rules={[
          {
            title: "Revendication et exploitation d'une drogue",
            description: "N’importe quel groupe a l’autorisation de revendiquer une certaine drogue, à condition de l’exploiter et de la défendre. Il doit prévenir l’ensemble de l’illégal InGame et sur Discord pour éviter les confusions (en informant le gérant illégal)."
          },
          {
            title: "Travail sur n'importe quelle drogue",
            description: "Chaque groupe peut travailler sur n’importe quelle drogue, mais cela se fait à ses risques et périls."
          },
          {
            title: "Sanctions pour intrusion sur une drogue revendiquée",
            description: "Tout individu retrouvé sur une drogue sans l’autorisation de celui qui la revendique s’expose à des représailles. Après plusieurs avertissements, il s’expose ensuite à une mort RP."
          },
          {
            title: "Interdiction de farm dans un véhicule",
            description: "Il est INTERDIT de farmer à l’intérieur d’un véhicule. Il faut avoir pied à terre."
          },
          {
            title: "Vente des drogues produites",
            description: "Les organisations doivent vendre les drogues qu’elles produisent aux gangs, qui écoulent ensuite les stocks dans la rue."
          },
          {
            title: "Limite de véhicules pour le farm",
            description: "Une limite de 3 véhicules maximum est imposée pour le farm."
          },
          {
            title: "Interdiction de vente dans son propre quartier ou un quartier rival",
            description: "Il est INTERDIT de vendre la drogue que l’on exploite dans son propre quartier, à proximité ou dans un quartier rival (pour maintenir une cohérence RP)."
          },
          {
            title: "Revendication et protection des points de drogue",
            description: "Un gang est autorisé à revendiquer un point de drogue, mais il doit le protéger. Si un groupe rival souhaite prendre possession du point, les propriétaires actuels doivent déserté les lieux."
          }
        ]}
      />

      <RuleSection
        id="braquages"
        title="Braquages"
        description="Règles générales pour tous les braquages."
        rules={[
          {
            title: "Scène RP obligatoire après un braquage",
            description: "Tout braquage ou prise d’otage sur un individu doit être accompagné d’une scène RP. Vous devez avoir une raison valable pour braquer cet individu."
          },
          {
            title: "Interdiction de braquer un membre du L.S.P.D/B.C.S.O en service pour son équipement",
            description: "Il est strictement INTERDIT de braquer un membre du L.S.P.D/B.C.S.O en service pour son équipement."
          },
          {
            title: "Braquage des forces de l'ordre : acte rare et dernier choix",
            description: "Le braquage sur un membre des forces de l’ordre doit rester un acte rare et de dernier choix. Il est impossible de l’utiliser pour l’échanger avec l’un des vôtres."
          },
          {
            title: "Interdiction de braquer pour vider les comptes/coffres (FreeLoot)",
            description: "Vous ne pouvez pas braquer un individu dans l’unique but de lui faire vider ses comptes ou coffres pour ensuite vous les donner."
          },
          {
            title: "Respect du FairPlay lors des braquages",
            description: "Restez FairPlay : ne dépouillez pas entièrement le joueur en face de vous. Prenez-lui, par exemple, la moitié de ce qu’il a en sa possession."
          },
          {
            title: "Course-poursuite minimale de 5 minutes",
            description: "Lorsque vous prévoyez un plan d’échappatoire, assurez-vous de faire au minimum 5 minutes de course-poursuite."
          },
          {
            title: "Interdiction d'attendre les policiers pour partir en poursuite",
            description: "Il est strictement INTERDIT d’attendre les policiers pour partir en poursuite. Vous devez pousser la scène à des négociations."
          },
          {
            title: "Interdiction de braquer des E.M.S en service",
            description: "Il est strictement INTERDIT de braquer des E.M.S en service."
          },
          {
            title: "Respect des règles spécifiques à chaque braquage",
            description: "Vous devez impérativement respecter les règles spécifiques à chaque type de braquage."
          },
          {
            title: "Interdiction du WINRP",
            description: "Toute tentative de WINRP aura de lourdes conséquences."
          },
          {
            title: "Préparation minimale pour chaque braquage",
            description: "Chaque braquage doit avoir un minimum de préparation : un plan de secours et une vraie scène pour prendre des otages. Si la scène est bâclée, elle sera annulée et des sanctions seront appliquées."
          },
          {
            title: "Interdiction des faux otages",
            description: "Il est INTERDIT d’avoir de faux otages. Si cette règle n’est pas respectée, les joueurs concernés peuvent être bannis."
          },
          {
            title: "Cohérence des tenues, véhicules et armes",
            description: "Vous devez avoir une cohérence sur vos tenues, vos véhicules et vos armes. Référez-vous au guide des organisations."
          }
        ]}
      />

      <RuleSection
        id="braquage-superette"
        title="Braquage Supérette"
        description="Règles spécifiques au braquage de supérette."
        rules={[
          {
            title: "Prise d'otage facultative",
            description: "Vous n’êtes pas obligé de prendre un otage, mais vous pouvez le faire si vous le souhaitez. Attention : un PNJ (comme Apu) ne peut PAS être considéré comme un otage."
          },
          {
            title: "Limite de la rançon par otage",
            description: "La rançon peut être d’un maximum de 2 000 $ par otage."
          },
          {
            title: "Restriction sur les armes utilisées",
            description: "Vous devez braquer avec une arme de poing. Les armes lourdes sont interdites, et il est strictement INTERDIT de braquer à l’arme blanche."
          },
          {
            title: "FairPlay et cohérence des véhicules",
            description: "Soyez FairPlay et utilisez un véhicule cohérent et équivalent à ceux du L.S.P.D / B.C.S.O."
          },
          {
            title: "Limite du nombre de véhicules pour les braqueurs",
            description: "Préférez un seul véhicule côté braqueur. Deux véhicules maximum sont autorisés."
          },
          {
            title: "Obligation d'attendre les forces de l'ordre pour négocier (si otage)",
            description: "Vous êtes OBLIGÉS d’attendre les forces de l'ordre pour une négociation si vous avez un otage."
          },
          {
            title: "Assaut légal sans otage",
            description: "Si vous n’avez pas d’otage, le L.S.P.D / B.C.S.O peut lancer un assaut en toute légalité."
          },
          {
            title: "Départ possible après 5 minutes sans arrivée des forces de l'ordre",
            description: "Si les forces de l'ordre n’arrivent pas au bout de 5 minutes, vous pouvez partir."
          }
        ]}
        alert={[
          { type: "warning", message: "Des SANCTIONS seront appliquées si cela n’est pas respecté." }]}
        level={1}
      />

      <RuleSection
        id="braquages-FB"
        title="Braquage Fleeca / Bijouterie"
        description="Règles spécifiques aux braquages de Fleeca Bank et Bijouterie."
        rules={[
          {
            title: "Nombre minimum d'otages",
            description: "Vous êtes obligés d’avoir un minimum de 4 otages."
          },
          {
            title: "Limite de la rançon par otage",
            description: "La rançon peut être d’un maximum de 5 000 $ par otage, mais le L.S.P.D / B.C.S.O n’est pas obligé de fournir cette somme."
          },
          {
            title: "Armes autorisées",
            description: "Vous devez braquer avec une arme à feu minimum. Il est strictement INTERDIT de braquer à l’arme blanche."
          },
          {
            title: "FairPlay et cohérence des véhicules",
            description: "Soyez FairPlay et utilisez des véhicules cohérents et équivalents à ceux du L.S.P.D / B.C.S.O."
          },
          {
            title: "Limite du nombre de véhicules pour les braqueurs",
            description: "Préférez deux véhicules côté braqueur. Trois véhicules maximum sont autorisés."
          },
          {
            title: "Interdiction de braquages simultanés",
            description: "Il est INTERDIT que le groupe fasse un autre braquage en même temps que celui-ci."
          },
          {
            title: "Fréquence minimale des braquages",
            description: "Vous devez effectuer un braquage de Fleeca OU de bijouterie toutes les 48 heures minimum."
          },
          {
            title: "Obligation d'attendre les forces de l'ordre pour négocier",
            description: "Vous êtes OBLIGÉS d’attendre les forces de l'ordre pour une négociation."
          },
          {
            title: "Départ possible après 10 minutes sans arrivée des forces de l'ordre",
            description: "Si les forces de l'ordre n’arrivent pas au bout de 10 minutes, vous pouvez partir."
          },
          {
            title: "Préparation obligatoire du braquage",
            description: "Un braquage de ce type doit être préparé. Tout travail bâclé sera accompagné d’une sanction."
          }
        ]}
        alert={[
          { type: "warning", message: "Des SANCTIONS seront appliquées si cela n’est pas respecté." }]}
        level={1}
      />

      <RuleSection
        id="braquage-PS"
        title="Braquage Pacific Standard"
        description="Règles de base applicables à tous les types de braquages."
        rules={[
          {
            title: "Nombre minimum d'otages",
            description: "Vous êtes obligés d’avoir un minimum de 8 otages."
          },
          {
            title: "Limite de la rançon par otage",
            description: "La rançon peut être d’un maximum de 15 000 $ par otage, mais le L.S.P.D / B.C.S.O n’est pas obligé de fournir cette somme."
          },
          {
            title: "Armes autorisées",
            description: "Vous devez braquer avec une arme lourde minimum. Il est strictement INTERDIT de braquer à l’arme blanche ou de poing."
          },
          {
            title: "FairPlay et cohérence des véhicules",
            description: "Soyez FairPlay et utilisez des véhicules cohérents et équivalents à ceux du L.S.P.D / B.C.S.O."
          },
          {
            title: "Limite du nombre de véhicules pour les braqueurs",
            description: "Préférez quatre véhicules côté braqueur. Six véhicules maximum sont autorisés."
          },
          {
            title: "Interdiction de braquages simultanés",
            description: "Il est INTERDIT que le groupe fasse un autre braquage en même temps que celui-ci."
          },
          {
            title: "Fréquence minimale des braquages",
            description: "Vous devez effectuer un braquage de la Banque Pacifique Standard toutes les deux semaines (336 heures) minimum."
          },
          {
            title: "Obligation d'attendre les forces de l'ordre pour négocier",
            description: "Vous êtes OBLIGÉS d’attendre les forces de l'ordre pour une négociation."
          },
          {
            title: "Départ possible après 15 minutes sans arrivée des forces de l'ordre",
            description: "Si les forces de l'ordre n’arrivent pas au bout de 15 minutes, vous pouvez partir."
          },
          {
            title: "Dossier obligatoire pour le braquage",
            description: "Un dossier est nécessaire pour faire ce braquage. Il doit être soumis sur le Discord illégal."
          },
          {
            title: "Préparation obligatoire du braquage",
            description: "Un braquage de ce type doit être préparé deux jours à l’avance minimum. Tout travail bâclé sera accompagné d’une sanction."
          }
        ]}
        alert={[
          { type: "warning", message: "Des SANCTIONS seront appliquées si cela n’est pas respecté." }]}
        level={1}
      />

      <RuleSection
        id="cambriolage"
        title="Cambriolage"
        rules={[
          {
            title: "Nombre maximum de cambrioleurs",
            description: "Maximum 4 cambrioleurs autorisés."
          },
          {
            title: "Véhicule adapté au cambriolage",
            description: "Vous devez avoir un véhicule correspondant à un cambriolage (camionnette/van)."
          },
          {
            title: "Interdiction des motos (sauf pour les guetteurs)",
            description: "Les motos sont interdites, sauf pour les guetteurs."
          },
          {
            title: "Prise d'otage limitée",
            description: "Vous pouvez UNIQUEMENT prendre en otage une personne à l’intérieur de l’endroit cambriolé."
          },
          {
            title: "Interdiction de demander une rançon",
            description: "Aucune rançon ne peut être demandée."
          },
          {
            title: "FairPlay et cohérence des véhicules",
            description: "Soyez FairPlay et utilisez un véhicule cohérent et équivalent à ceux du L.S.P.D / B.C.S.O."
          },
          {
            title: "Limite du nombre de véhicules",
            description: "Préférez un seul véhicule côté cambrioleur. Deux véhicules maximum sont autorisés."
          },
          {
            title: "Pas d'obligation d'attendre les forces de l'ordre",
            description: "Vous n’êtes pas obligés d’attendre les forces de l’ordre."
          },
          {
            title: "Repérage avant le cambriolage",
            description: "Un cambriolage ne nécessite pas une grande préparation, mais faites un repérage avant pour garder une certaine cohérence."
          }
        ]}
        level={1}
      />

      <RuleSection
        id="convoie-braquage"
        title="Braquage convoi"
        rules={[
          {
            title: "Obligation d'avoir des otages",
            description: "Vous êtes obligés d’avoir un ou plusieurs otages."
          },
          {
            title: "Prise d'otage selon la taille du convoi (4 véhicules max)",
            description: "Si le convoi compte un maximum de 4 véhicules, vous pouvez tenter de prendre en otage des agents du L.S.P.D / B.C.S.O."
          },
          {
            title: "Prise d'otage selon la taille du convoi (plus de 4 véhicules)",
            description: "Si le convoi compte plus de 4 véhicules, vous devez prendre des otages à l’extérieur du convoi."
          },
          {
            title: "Autorisation de faire barrage au convoi",
            description: "Vous pouvez faire barrage au convoi. Il est INTERDIT d'utiliser un Gunfight pour arrêter un convoi."
          },
          {
            title: "Limite du nombre de groupes par convoi",
            description: "Il est INTERDIT d’avoir plus de 2 groupes braquant un même convoi."
          },
          {
            title: "Interdiction d'utiliser des informations HRP",
            description: "Il est INTERDIT d’utiliser des informations HRP pour braquer un convoi. Dans le cas contraire, l’équipe se réserve le droit de supprimer le groupe."
          },
          {
            title: "Préparation obligatoire du braquage",
            description: "Un braquage de ce type doit être préparé. Tout travail bâclé sera accompagné d’une sanction."
          },
          {
            title: "Interdiction de tirer (GunFight)",
            description: "Il est INTERDIT de tirer. Toute mentalité GunFight se verra bannie, et l’équipe illégale peut supprimer un groupe."
          },
          {
            title: "FairPlay avec les forces de l'ordre",
            description: "Restez FairPlay avec les forces de l’ordre. La scène doit être propre, et les voitures ne doivent pas être placées dans tous les sens."
          }
        ]}
        level={1}
      />

      <RuleSection
        id="prise-otage"
        title="Prise d'Otage"
        rules={[
          {
            title: "Interdiction des prises d'otages dans les zones safes",
            description: "Il est INTERDIT de prendre en otage dans les zones safes (parkings publics, magasins de vêtements, hôpitaux, postes de police et à proximité de toute entreprise)."
          },
          {
            title: "Présence minimale des forces de l'ordre et ambulanciers",
            description: "Il faut un minimum de forces de l’ordre et d’ambulanciers présents en ville et en service pour lancer la scène. Évitez ce genre de scène en tout début ou fin de soirée. Vous pouvez faire un /report pour demander un renseignement. Sinon, la scène sera immédiatement annulée."
          },
          {
            title: "Interdiction de mentir sur la présence d'un otage",
            description: "Il est strictement INTERDIT de dire aux forces de l'ordre d'arrêter de vous suivre sous prétexte que vous avez un otage dans le véhicule (si ce n’est pas le cas)."
          },
          {
            title: "Demande de rançon et négociation",
            description: "Pour les demandes de rançons, vous pouvez demander de plus grosses sommes selon la personne entre vos mains (force de l’ordre, patrons d’entreprise…). Cependant, les forces de l'ordre peuvent refuser. Trouvez un terrain d’entente avec les secours plutôt que de tuer l’otage."
          },
          {
            title: "Prise d'otage d'un membre du L.S.P.D / B.C.S.O",
            description: "Vous pouvez prendre en otage un membre du L.S.P.D / B.C.S.O, mais cela doit rester un acte rare. Les raisons acceptables incluent : pression (libération d’un membre de son groupe, braquage Standard Pacifique / convoi, intimidation)."
          },
          {
            title: "Prise d'otage en dernier recours lors d'une course-poursuite",
            description: "En course-poursuite, vous pouvez braquer un membre du L.S.P.D / B.C.S.O pour vous sauver, mais cela doit être un dernier recours et UNIQUEMENT si la proportionnalité le permet. Si vous êtes seul face à 5 policiers, abandonnez."
          },
          {
            title: "Interdiction des faux otages",
            description: "Il est INTERDIT de prendre de faux otages (un ami, un membre de votre propre groupe…). L’otage doit être réellement pris en otage à l’issue d’une scène non prévue HRP, sauf avec un dossier validé."
          }
        ]}
      />

      <RuleSection
        id="convoie"
        title="Convoie"
        rules={[
          {
            title: "Objectifs des convois",
            description: "Les convois peuvent être organisés pour : se rendre à un point de rendez-vous, transporter des drogues, chasser ou capturer une personne (la personne chassée peut faire appel à son groupe pour l’aider), ou pour tout autre événement demandé par les STAFFS."
          },
          {
            title: "Limite du nombre de véhicules",
            description: "Maximum de 5 véhicules autorisés dans le convoi, dont 2 Tout-Terrain."
          },
          {
            title: "Interdiction de convois simultanés",
            description: "Il est INTERDIT que le groupe fasse un convoi et une autre scène séparément en même temps."
          },
          {
            title: "Interdiction des rideaux et pits abusifs",
            description: "Tout convoi utilisant des rideaux ou des pits de manière abusive sera sévèrement sanctionné."
          }
        ]}
      />

      <RuleSection
        id="police"
        title="Police"
        rules={[
          {
            title: "Respect du FEAR Police",
            description: "Vous devez respecter le FEAR Police (la 'peur' de la police)."
          },
          {
            title: "Provocation de la police",
            description: "Vous pouvez provoquer la police, mais cela se fait à vos risques et périls."
          },
          {
            title: "Privilégier la fuite et les mots aux conflits",
            description: "Privilégiez les mots et la fuite plutôt que les conflits et les GunFights. Les mentalités menant à des GunFights seront sévèrement sanctionnées."
          },
          {
            title: "Interdiction de loot sur un agent en service",
            description: "Il est INTERDIT de looter l’équipement d’un agent de police en service. Si l’agent est hors-service, vous pouvez le prendre. Il appartient aux membres du L.S.P.D / B.C.S.O de ranger leur équipement."
          },
          {
            title: "Interdiction d'appeler la police pour piéger un groupe rival",
            description: "Il est INTERDIT de faire appel à la police pour les envoyer sur un groupe rival dans le but de les faire braquer. Cela est autorisé UNIQUEMENT pour chercher à les faire tomber."
          },
          {
            title: "Plans mule / bateau autorisés après 10 minutes",
            description: "Les plans mule / bateau sont autorisés après 10 minutes sur de grosses scènes. Attention, les poursuites maritimes doivent durer 30 minutes maximum."
          },
          {
            title: "Interdiction de s'échapper une fois arrêté au poste",
            description: "Lorsque vous êtes arrêté, il vous est INTERDIT de tenter de vous échapper une fois au poste. Vous devez attendre votre transfert vers la prison fédérale de Bolingbroke."
          },
          {
            title: "Interdiction de prendre la fuite à la nage",
            description: "Il est INTERDIT de prendre la fuite à la nage. Cela est considéré comme du WINRP."
          }
        ]}
      />

      <RuleSection
        id="gunfight-hopital"
        title="Gunfight / Hôpital"
        rules={[
          {
            title: "Privilégier la négociation",
            description: "Vous devez privilégier la négociation plutôt que les coups de feu."
          },
          {
            title: "Risques et conséquences des GunFights",
            description: "Déclencher un GunFight est un risque qui doit être réfléchi et aura de lourdes conséquences. Il doit y avoir une suite de raisons valables pour justifier un GunFight."
          },
          {
            title: "Sommations et tirs en l'air",
            description: "Si une poursuite a lieu après la scène, vous avez l’autorisation de tirer en l’air pour faire des sommations (3 sommations séparées de 5 secondes) après 10 minutes de poursuite. Vous pouvez crever les pneus après 15 minutes de course-poursuite."
          },
          {
            title: "Obligation de se rendre à l'hôpital en cas de coma",
            description: "Si vous êtes dans le coma à la suite d’un GunFight, vous êtes OBLIGÉS de vous rendre à l’hôpital et/ou d’écouter les services médicaux pour soigner vos blessures."
          },
          {
            title: "Interdiction de retourner sur la scène du GunFight",
            description: "Il est absolument INTERDIT de retourner sur la scène du GunFight pour récupérer des objets ou des individus."
          },
          {
            title: "Tentative d'évasion à l'hôpital",
            description: "Si vous êtes attrapé par les forces de l’ordre et qu’une scène de soins à l’hôpital a lieu, vous avez l’autorisation de tenter de vous échapper, à vos risques et périls. Vous devez jouer votre PainRP (par exemple, ne pas vous lever juste après avoir été réanimé)."
          }
        ]}
      />

      <RuleSection
        id="divers"
        title="Divers"
        rules={[
          {
            title: "Drive-By autorisées sous conditions",
            description: "Les Drive-By sont autorisées uniquement s’il y a un motif pertinent."
          },
          {
            title: "Interdiction de jeter des objets illégaux lors d'une course-poursuite",
            description: "Il vous est INTERDIT de jeter tout objet illégal (arme, drogue, etc.) lors d’une course-poursuite avec les forces de l’ordre."
          },
          {
            title: "Cacher des objets dans le coffre",
            description: "Vous pouvez cacher des objets dans votre coffre, mais cela se fait à vos risques et périls."
          },
          {
            title: "Récupération d'une entreprise par une organisation",
            description: "Une organisation a le droit de récupérer une seule entreprise maximum. Nous vous demandons de NE PAS embaucher EXCLUSIVEMENT des personnes de votre groupe, mais de toute la ville."
          },
          {
            title: "Utilisation d'appareils aériens ou sous-marins",
            description: "Vous avez l’autorisation d’utiliser un appareil aérien ou sous-marin pour vous rendre sur un point de rendez-vous ou autre déplacement. Attention à ne pas en abuser."
          },
          {
            title: "Interdiction d'utiliser des appareils pour fuir une course-poursuite",
            description: "Il est INTERDIT d’utiliser un appareil aérien ou sous-marin pour fuir une course-poursuite, sauf si le plan a été validé par l’équipe illégale."
          },
          {
            title: "Interdiction des fausses cartes d'identité",
            description: "Il est INTERDIT de présenter une fausse carte d’identité, peu importe le contexte RP. Cela doit être validé par l’équipe illégale."
          },
          {
            title: "Oubli de papiers et relevé d'empreintes",
            description: "Vous pouvez prétendre avoir oublié vos papiers. Les forces de l’ordre pourront effectuer un relevé d’empreintes, qui est incontestable."
          }
        ]}
      />

    </div>
  );
}
