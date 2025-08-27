import StatCard from "../atoms/statCard";
import Title from "../atoms/titlePart";
export default function StatsSection() {
    var tdy = new Date();
    var end = new Date('2025-12-20');
    var diff = end.getTime() - tdy.getTime();
    var days = Math.ceil(diff / (1000 * 3600 * 24));
    return (
        <div className="mt-20">
            <div className="flex justify-center ">
                <Title text="Statistiques du serveur" />
            </div>
            <section className="w-full px-6 py-12 bg-gray-950">
                <div className="flex flex-col md:flex-row justify-around items-center gap-10">
                    <StatCard
                        number={days}
                        add="J"
                        title="Avant la sortie officielle"
                        description="RDV le 20 Décembre 2025."
                    />
                    <StatCard
                        number={30}
                        add="+"
                        title="Membres discord"
                        description="Rejoignez notre communauté dans l'onglet Discord."
                    />
                    <StatCard
                        number={20}
                        add="+"
                        title="Personnes du Staff"
                        description="Présents pour vous aider."
                    />
                    <StatCard
                        number={5}
                        add="+"
                        title="Streamers partenaires"
                        description="Ils parlent de nous."
                    />
                </div>
            </section>
        </div>
    );
}
