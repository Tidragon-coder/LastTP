import StatCard from "../atoms/statCard";
import Title from "../atoms/titlePart";
export default function StatsSection() {
    return (
        <>
                <div className="flex justify-center mb-20">
                    <Title text="Statistiques du serveur" />
                </div>
            <section className="w-full px-6 py-12 bg-black">
                <div className="flex flex-col md:flex-row justify-around items-center gap-10">
                    <StatCard
                        number="250+"
                        title="Joueurs actifs"
                        description="Connectés chaque jour sur le serveur."
                    />
                    <StatCard
                        number="1500+"
                        title="Missions terminées"
                        description="Depuis le lancement du serveur."
                    />
                    <StatCard
                        number="98%"
                        title="Satisfaction"
                        description="Basée sur les retours des joueurs."
                    />
                    <StatCard
                        number="24/7"
                        title="Serveur en ligne"
                        description="Toujours prêt à vous accueillir."
                    />
                </div>
            </section>
        </>
    );
}
