import CardsPart from "./wiki/cardsPart";

export default function ReglementSection() {
  return (
    <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Explorez nos Règlements
            </h2>
    
            <div className="flex flex-wrap justify-center gap-6">
              <CardsPart
                title="Règlement Global"
                subtitle="Reglementation de LastRP"
                link="/reglement-global"
                reglement={true}
                icon="earth"
              />
              <CardsPart
                title="Règlement Legal"
                subtitle="Reglementation des métiers légaux"
                link="/reglement-legal"
                reglement={true}
                icon="legal"
              />
              <CardsPart
                title="Règlement Illégal"
                subtitle="Reglementation des métiers illégaux"
                link="/reglement-illegal"
                reglement={true}
                icon="illegal"
              />
              <CardsPart
                title="Règlement Discord"
                subtitle="La reglementation de nos Discord"
                link="/reglement-discord"
                reglement={true}
                icon="discord"
              />
            </div>
          </div>
        </section>




    // <div className="container mx-auto px-4 py-32 space-y-10">
    //   {/* Première ligne */}
    //   <div className="flex flex-col md:flex-row md:space-x-6 justify-center">
    //     <ReglementCard
    //       image={"src/assets/media/img-back/ReglementL.png"}
    //       title="Règlement Legal"
    //       link="/reglement-legal"
    //     />
    //     <ReglementCard
    //       image={"src/assets/media/img-back/fiveM.png"}
    //       title="Règlement Global"
    //       link="/reglement-global"
    //       // className="scale-105 shadow-lg shadow-blue-500/30"
    //     />
    //   </div>

    //   {/* Deuxième ligne */}
    //   <div className="flex flex-col md:flex-row md:space-x-6 justify-center">
    //     <ReglementCard
    //       image={"src/assets/media/img-back/fiveM.png"}
    //       title="Règlement Illégal"
    //       link="/reglement-illegal"
    //     />
    //     <ReglementCard
    //       image={"src/assets/media/img-back/fiveM.png"}
    //       title="Règlement Discord"
    //       link="/reglement-discord"
    //     />
    //   </div>
    // </div>
  );
}
