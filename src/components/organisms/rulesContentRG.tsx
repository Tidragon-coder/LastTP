import RuleSection from "../molecules/ruleSection";

export default function RulesContent() {
    return (
        <div>
            <RuleSection
                id="intro"
                title="Introduction"
                description="Bienvenue sur le règlement global de LastRP. Merci de le lire attentivement avant de jouer."
                rules={[
                    { title: "Il est de votre responsabilité de le consulter régulièrement." },
                    { title: "En jouant sur le serveur, vous acceptez de respecter ce règlement." },
                ]}
                alert={[{ type: "info", message: "Le règlement est susceptible d'être mis à jour. Les joueurs seront informés des changements majeurs." }]}
            />

            <RuleSection
                id="language"
                title="Base du langage RP"
                description="Vous trouverez ci-dessous les termes RP de base, accompagnés de leur descriptif. Ils peuvent être appris pour les novices ou tout  simplement en rappel pour les plus habituée du RP ! "
                rules={[
                    {
                        title: "MetaGaming",
                        description: "Utiliser une information reçue en dehors du jeu (Discord, discussions HRP, etc.) pour influencer son RP."
                    },
                    {
                        title: "NoFear",
                        description: "Ne pas réagir de manière réaliste à une menace (ex. : ignorer un braquage avec des armes pointées sur soi et partir comme si de rien n’était)."
                    },
                    {
                        title: "NoPainRP",
                        description: "Ne pas jouer la douleur ou les conséquences d’une blessure (ex. : se faire tirer dessus et courir normalement, ou ne pas montrer de signes de souffrance après un accident)."
                    },
                    {
                        title: "PowerGaming",
                        description: "Effectuer des actions impossibles en réalité (ex. : survivre à un accident à haute vitesse sans conséquence, ou réussir une action sans laisser de chance à l’adversaire)."
                    },
                    {
                        title: "MassRP",
                        description: "Prendre en compte le réalisme d’une ville peuplée (ex. : éviter les contres-sens, les excès de vitesse extrêmes, ou braquer dans des lieux bondés comme un hôpital ou un poste de police)."
                    },
                    {
                        title: "FreeLoot",
                        description: "Braquer quelqu’un uniquement pour lui voler ses possessions, sans motif RP valable."
                    },
                    {
                        title: "FreeKill",
                        description: "Tuer une personne sans raison RP cohérente."
                    },
                    {
                        title: "RevengeKill",
                        description: "Revenir sur les lieux où l’on a été tué pour tuer son assassin, sans développement de scène ou de motif RP."
                    },
                    {
                        title: "CarKill",
                        description: "Utiliser un véhicule pour tuer intentionnellement en roulant sur des personnes."
                    },
                    {
                        title: "Glitcher",
                        description: "Exploiter des failles du jeu pour traverser des murs ou accéder à des zones normalement inaccessibles."
                    },
                    {
                        title: "UseBug",
                        description: "Utiliser des bugs pour obtenir un avantage interdit (ex. : dupliquer des armes, des véhicules ou des ressources)."
                    },
                    {
                        title: "PowerStock / HardFarming",
                        description: "Récolter ou stocker des ressources de manière excessive et non réaliste, perturbant l’équilibre du jeu."
                    },
                    {
                        title: "ForceRP",
                        description: "Forcer un joueur à agir d’une certaine manière sans lui laisser de choix, limitant sa liberté RP."
                    },
                    {
                        title: "FearPolice",
                        description: "Avoir une attitude réaliste de crainte envers les forces de l’ordre (ex. : éviter de les provoquer, respecter les règles de conduite en leur présence). Cela s’applique particulièrement aux gangs et organisations criminelles."
                    }
                ]}
                alert={[{ type: "warning", message: "Tout non-respect de ces règles se verra sanctionné !" }]}
                level={0}
            />

            <RuleSection
                id="rgprincipale"
                title="Règle principale"
                description="Le RP (Role Play) est un style de jeu où les joueurs incarnent des personnages fictifs dans un univers donné. Le but est de créer une histoire cohérente et immersive en respectant les règles établies par la communauté et le staff du serveur."
                rules={[
                    {
                        title: "INTERDICTION de se DÉCONNECTER PENDANT une SCÈNE RP",
                        description: "Que ce soit pour éviter un revive ou une interaction en jeu. En cas de Crash, il faut dans l'instantané prévenir sur Discord un STAFF et/ou les joueurs présents sur la scène (en les mentionnant). Connectez-vous ensuite le plus rapidement possible."
                    },
                    {
                        title: "ARNAQUE INTERDITE",
                        description: "Toutes les méthodes sont interdites ! (Fausse vente d'armes/véhicules…)"
                    },
                    {
                        title: "MASQUE, CASQUE, CAGOULE, BANDANA",
                        description: "Il est totalement interdit de reconnaître une personne et sa voix lorsque la personne a le visage camouflé (sauf exceptions familiales et sentimentales)."
                    },
                    {
                        title: "Haine HRP non tolérée",
                        description: "La haine HRP n’est PAS TOLÉRÉE, la haine RP (envers le personnage et non le joueur) est elle tolérée sans qu’elle n’aille plus loin, sans qu’aucun abus ne soit commis."
                    },
                    {
                        title: "Interdiction d'utiliser une radio externe",
                        description: "Il est INTERDIT d’utiliser une radio externe au jeu (Discord, TS…) en guise de moyen de communication RP. Vous êtes obligé d’utiliser le téléphone IG ou la radio IG."
                    },
                    {
                        title: "Contestation d'une scène",
                        description: "Lorsqu’une contestation sur une scène a lieu, un REC a nous fournir est demandé, sans cela, nous ne pouvons aucunement donner suite à votre demande. Il existe de multiples logiciels qui ne consomment pas tant où l’on peut récupérer un extrait des derniers instants."
                    },
                    {
                        title: "Interdiction absolue de certains actes",
                        description: "Il est INTERDIT dans tous domaines, qu’il soit RP ou non, de défendre/effectuer des actes de pédophilie, zoophilie, scatophilie, nécrophilie, urophilie, ou toute discrimination envers un joueur. Le RP transgenre (sous dossier), homosexuel, etc., est totalement toléré. N’hésitez pas à envoyer un message privé si un quelconque problème survient."
                    },
                    {
                        title: "Actes sensibles tolérés sous conditions",
                        description: "Les actes sexistes, terroristes, cannibales ou religieux peuvent être TOLÉRÉS pour créer des scènes, tant que cela ne dépasse pas le cadre du RP, que la personne qui le subit est bien consentante pour son RP, et que cela n’affecte pas sa vie privée. Tout cela reste déconseillé."
                    },
                    {
                        title: "Interdiction de certains types de RP",
                        description: "Il est INTERDIT de faire du RP Viol, nazi/fasciste/extrémiste, de jouer un personnage réel, ou d’effectuer des actes sexuels en lieu public."
                    },
                    {
                        title: "Interdiction d'échanger des biens InGame contre des biens IRL",
                        description: "Il est INTERDIT d’échanger des biens InGame contre des biens réels (IRL)."
                    }
                ]}
                txtend="IL EST INUTILE DE MP LE STAFF"
                alert={[
                    { type: "info", message: "BESOIN D’AIDE : Ouvrez un ticket sur le Discord ou un /report en jeu." }
                ]}
            />

            <RuleSection
                id="avant-mort-rp"
                title="Avant une MORT RP"
                description="Il est absolument INTERDIT de vider ses comptes / garages ainsi que de les gives à son nouveau personnage ou un collègue sous peine de SANCTION. Si vous partez de la ville, vos biens pourront être repris seulement lorsque vous revenez avec votre personnage. Un wipe peut être effectuée, notamment pour :"
                rules={[
                    { title: "Mort RP" },
                    { title: "Passage du légal à l'illégal (ou inversement) " },
                ]}
                txtend="Merci de prévenir le STAFF afin de déposer votre dossier.
	            Un délai de 2 mois après la création de votre personnage est obligatoire avant de demander un nouveau WIPE (sauf dossier de mort RP validé par un membre du STAFF)."
            />

            <RuleSection
                id="mort-rp"
                title="La mort RP"
                rules={[
                    {
                        title: "Définition d'une mort RP",
                        description: "Une mort RP signifie la fin de vie de votre personnage. Un administrateur effectuera un wipe pour que vous puissiez recréer un personnage et débuter une nouvelle aventure RP. Plusieurs règles doivent être respectées pour qu'une mort RP soit validée."
                    },
                    {
                        title: "Contexte d'une mort RP",
                        description: "Une mort RP doit être le résultat d'une longue période d'événements et marquer la fin d'une grande aventure. Pensez à apporter des preuves de vos actes pour qu'elles soient acceptées par le STAFF."
                    },
                    {
                        title: "Prime et dossier de mort RP",
                        description: "Pour qu'une prime soit mise sur une personne, un dossier de mort RP doit être transmis au STAFF (via un ticket Discord) pour étude et validation. La mise à prix ne peut être effectuée qu'après cette validation."
                    },
                    {
                        title: "Quitter un groupe et mort RP",
                        description: "Si vous quittez un groupe de votre propre chef, vous vous exposez à une mort RP. Un dossier doit être soumis par le groupe au STAFF (via ticket Discord) pour validation."
                    },
                    {
                        title: "Suicides RP",
                        description: "Les suicides RP ne peuvent être effectués qu'après validation d'un dossier par le STAFF. La demande doit être faite via un ticket Discord."
                    },
                    {
                        title: "Mort RP pour les indics",
                        description: "Les indics (sous demande STAFF) s'exposent directement à une mort RP sans dossier, à condition qu'une raison logique et équivalente soit présente (exemple : découverte de leur rôle d’indic au sein de l’organisation)."
                    },
                    {
                        title: "Actions surréalistes et mort RP",
                        description: "Si un STAFF observe une action surréaliste (exemple : sauter de la Maze Bank), il peut vous mettre en jail permanent pour mort RP et vous obliger à ouvrir un ticket Discord."
                    },
                    {
                        title: "Conditions pour une mort RP",
                        description: "Les morts RP sont soumises aux conditions suivantes : une raison valable (trahison, vengeance, règlement de compte, indic sous dossier, etc.). Un simple citoyen qui fait son RP sans débordement ne peut faire l'objet d'une mort RP."
                    },
                    {
                        title: "Menace et avertissement",
                        description: "Avant une mort RP, la personne doit être prévenue qu’elle risque de mourir dans un futur proche. Exemples de menaces : 'Fais attention à toi', 'Tu vas le regretter', 'Je vais me venger', 'Je vais te tuer'."
                    },
                    {
                        title: "Dernière chance avant la mort RP",
                        description: "Il faut toujours laisser une porte de sortie avant une mort RP, par exemple : 'Tu vas nous aider à le retrouver ou on te tue !' (sinon, cela peut être considéré comme du ForceRP)."
                    },
                    {
                        title: "Scène de mort RP",
                        description: "Une belle scène est demandée pour plus d'immersion. La mort RP du personnage doit être constatée par un EMS (à gérer en jeu). Une scène d’enterrement peut ensuite être envisagée."
                    }
                ]}
            />

            <RuleSection
                id="nouveau-perso"
                title="Nouveau personnage"
                description="En faisant un nouveau personnage, vous vous engagez dans une nouvelle histoire et donc TOUT oublier de votre histoire passée : Les informations du serveur, vos amis, fréquentations, numéro de téléphone, connaissance… L'apparence de votre personnage, sont styles, sa psychologie doit être modifiée par rapport à votre histoire précédente."
                rules={[
                    {
                        title: "Ne pas reprendre un personnage de votre histoire passée",
                        description: "Il est absolument INTERDIT de reprendre votre personnage décédé (mort RP) ou un personnage en lien (même famille, même groupes…) avec votre précédent personnage. Vous pouvez faire revenir un ancien personnage qui a quittée la ville après que votre histoire actuelle soit terminée."
                    },
                ]}
            />

            <RuleSection
                id="coma"
                title="Le Coma"
                rules={[
                    {
                        title: "Perception pendant le coma",
                        description: "Lorsque vous êtes dans le coma, vous ne voyez rien et n'entendez rien de ce qu'il se passe autour de vous."
                    },
                    {
                        title: "Amnésie partielle après un coma",
                        description: "Vous ne vous souvenez pas directement des derniers instants qui ont précédé votre coma."
                    },
                    {
                        title: "Flashbacks et mémoire progressive",
                        description: "Vous pouvez avoir des flashbacks, des moments qui reviennent petit à petit dans votre mémoire pour comprendre ce qu'il s'est passé."
                    },
                    {
                        title: "Transport d'une personne dans le coma",
                        description: "Vous avez l'autorisation de porter une personne dans le coma pour l'emmener à l'hôpital. Tout autre acte sera sanctionné."
                    },
                    {
                        title: "Trash cadavre toléré sous conditions",
                        description: "Le trash cadavre est TOLÉRÉ tant qu'il reste dans le cadre du RP et reste raisonnable. Tout abus sera sanctionné."
                    },
                    {
                        title: "Prise en charge par les E.M.S en service",
                        description: "Si un E.M.S est en service, vous êtes dans l'OBLIGATION de l'attendre, de jouer votre scène ainsi que votre PainRP selon les circonstances."
                    },
                    {
                        title: "Prise en charge par l'unité X en absence d'E.M.S",
                        description: "Si aucun E.M.S n'est en service, vous êtes pris en charge par l'unité X. Celle-ci doit être considérée comme une unité à part entière, même si elle 'n'apparaît pas' et 'n'existe pas' réellement."
                    },
                    {
                        title: "Obligation de jouer son PainRP",
                        description: "Il est OBLIGATOIRE de jouer votre PainRP. Vous devez respecter une certaine cohérence en fonction de vos blessures : démarche, humeur, impossibilité de conduire, etc."
                    }
                ]}
            />

            <RuleSection
                id="entreprise"
                title="Les entreprises"
                description="Les entreprises sont des structures RP qui permettent aux joueurs de s'organiser et de collaborer pour atteindre des objectifs communs. Elles offrent un cadre pour le développement de carrières, la gestion de ressources et la création d'opportunités économiques au sein du serveur."
                rules={[
                    {
                        title: "Démission d'un patron d'entreprise",
                        description: "Les patrons de quelconque entreprise souhaitant quitter leur poste doivent en discuter avec le STAFF."
                    },
                    {
                        title: "Utilisation des coffres d'entreprise",
                        description: "Les coffres d'entreprise ne peuvent pas servir de coffre personnel. Ils ne peuvent pas être vidés ou volés dans leur intégralité."
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
                        description: "Il est OBLIGATOIRE d’utiliser les tenues, les véhicules ainsi que l’équipement de l’entreprise."
                    },
                    {
                        title: "Cohérence hiérarchique et salariale",
                        description: "Il est important d’avoir une certaine cohérence selon la hiérarchie de votre entreprise, ainsi que leurs salaires."
                    },
                    {
                        title: "Conseil pour la gestion des comptes",
                        description: "Nous conseillons de faire un livret des comptes afin de suivre les entrées et sorties de l’entreprise."
                    },
                    {
                        title: "Durée minimale dans une entreprise",
                        description: "Lorsque vous rejoignez une entreprise, vous devez y rester au minimum deux semaines avant de la quitter."
                    },
                    {
                        title: "Interdiction de garder son service pour des activités non liées à l'entreprise",
                        description: "Il est INTERDIT de garder son service pour des activités qui ne concernent pas l’entreprise dans laquelle vous travaillez. Vous devez prendre une fin de service avant d’aller en RP civil."
                    }
                ]}
            />

            <RuleSection
                id="boutique"
                title="Information Boutique"
                description="Nous vous remercions pour votre soutien par l’achat de différents objets présents dans notre boutique. Mais nous rappelons que c’est un acte irréversible, rien ne sera remboursé, ni échangé. Le staff reste disponible via ticket discord pour quelconque questions sur la boutique.Ne faites pas n’importe quoi avec vos achats. Lorsque vous achetez un bien dans la boutique, lors de votre WIPE, vous acceptez de perdre ses biens achetés (véhicules, armes..)."
                txtend="Sur Last, aucune arme permanente n’est et sera présente en boutique. Si vous en gagnez une via les caisses, si elle vous est dérobée en RP (fouille L.S.P.D/B.C.S.O, prise d’otage..). C’est à vous de faire en sorte de la conserver le plus longtemps possible d’en prendre soin."
                alert={[
                    { type: "warning", message: "“Article 894 du code civil : La donation est un acte par lequel le donateur se dépouille actuellement et irrévocablement de la chose donnée en faveur du donataire qui l’accepte.”" }
                ]}
            />

            <RuleSection
                id="remboursementig"
                title="Information Remboursement IG"
                description="Pensez bien à prendre des screens de vos inventaires, surtout lorsque vous farmez et/ou que vous venez de gagner quelque chose. Cela afin de pouvoir demander un remboursement dans le cas où il y aurait un bug, un depop d’objet, ou un crash. "
                alert={[
                    { type: "warning", message: "SANS SCREEN / VIDÉO / PREUVE D’ACHAT, AUCUN REMBOURSEMENT NE SERA POSSIBLE!" }
                ]}
            />

            <RuleSection
                id="divers"
                title="Règles diverses"
                rules={[
                    { title: "Le TrashStream est interdit." },
                    { title: "Le StreamSnipe est interdit." },
                    { title: "Conseils pour streamer", description: "Nous vous conseillons de cacher votre MAP en bas à gauche afin d’éviter tout HRP d'autres joueurs (Une image suffit, demandez à l’équipe STAFF si vous n’en avez pas)." },
                ]}
            />

            <RuleSection
                id="logicielext"
                title="Logiciel externe"
                description="Un logiciel externe est un programme qui n'est pas intégré au jeu, mais qui peut interagir avec lui pour offrir des fonctionnalités supplémentaires ou modifier l'expérience de jeu. "
                rules={[{
                    title: "Interdiction des CrossHair et AimBot",
                    description: "Tout CrossHair ou AimBot est STRICTEMENT INTERDIT. Toute utilisation entraînera un BAN définitif sans explication."
                },
                {
                    title: "Interdiction des packs GF et modifications avantageuses",
                    description: "Les packs GF et toute autre modification du jeu permettant un avantage sur le gameplay sont interdits, sous peine de sanction."
                },
                {
                    title: "Interdiction de l'aide à la visée et de la surbrillance rouge",
                    description: "Toute aide à la visée ou utilisation de la surbrillance rouge du réticule pour trouver quelqu'un est INTERDITE."
                }]}
            />
        </div>

    );
}
