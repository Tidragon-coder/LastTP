import RuleSection from "../molecules/ruleSection";

export default function RulesContent() {
    return (
        <div>
            <RuleSection
                id="intro"
                title="Introduction"
                description="Bienvenue sur le règlement global de LastRP. Merci de le lire attentivement avant de jouer."
            />

            <RuleSection
                id="definition"
                title="Définition RP"
                description="Le RP (RolePlay) consiste à incarner un personnage fictif dans un univers donné."
            />
            <RuleSection
                id="regles-principales"
                title="Règles principales"
                rules={[
                    "Respectez les autres joueurs en toutes circonstances.",
                    "Aucune insulte hors RP ne sera tolérée.",
                    "Le métagaming est interdit.",
                ]}
            />

            <RuleSection
                id="coma"
                title="Règle Coma"
                rules={[
                    "Si votre personnage est dans le coma, vous ne pouvez pas communiquer.",
                    "Vous devez attendre un médecin pour être réanimé.",
                ]}
            />

            <RuleSection
                id="mort-intro"
                title="Introduction Mort RP"
                description="La mort RP implique la fin de l’histoire de votre personnage."
            />

            <RuleSection
                id="mort-rp"
                title="Règles Mort RP"
                rules={[
                    "La mort RP doit être validée par le staff dans certains cas.",
                    "Une fois mort RP, vous perdez toutes vos possessions et relations.",
                ]}
            />

            <RuleSection
                id="nouveau-perso"
                title="Nouveau personnage"
                description="En cas de Mort RP, vous devez recréer un nouveau personnage avec une histoire différente."
                rules={[
                    "Vous ne pouvez pas utiliser les informations de votre ancien personnage.",
                    "Vous devez respecter les règles de création de personnage.",
                ]}
            />

            <RuleSection
                id="boutique"
                title="Information Boutique"
                description="Les achats en boutique soutiennent le serveur mais ne sont pas remboursables."
            />

            <RuleSection
                id="remboursement"
                title="Information Remboursement"
                description="Les remboursements sont possibles uniquement en cas de bug technique confirmé par le staff."
            />
        </div>

    );
}
