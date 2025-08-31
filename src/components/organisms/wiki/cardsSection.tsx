import CardsPart from "./cardsPart";

export default function CardsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Explorez notre Wiki
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <CardsPart
            title="Commencer"
            subtitle="Comment débuter sur LastRP"
            link="/wiki/Commencer"
            icon="commencer"
          />
          <CardsPart
            title="Factions"
            subtitle="Toutes les factions disponibles"
            link="/wiki/Factions"
            icon="team"
          />
          <CardsPart
            title="Jobs"
            subtitle="Tous les métiers disponibles"
            link="/wiki/Jobs"
            icon="job"
          />
        </div>
      </div>
    </section>
  );
}
