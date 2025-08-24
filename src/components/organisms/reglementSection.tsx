import ReglementCard from "../organisms/ReglementCard";

export default function ReglementSection() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {/* Rangée de 3 */}
        <ReglementCard
          image={"src/assets/media/img-back/ReglementL.png"}
          title=""
          link="/reglement-legal"
        />
        <ReglementCard
          image={"src/assets/media/img-back/fiveM.png"}
          title="Règlement Global"
          link="/reglement-global"
          className="scale-105 shadow-lg shadow-blue-500/30"
        />
        <ReglementCard
          image={"src/assets/media/img-back/fiveM.png"}
          title="Règlement Illégal"
          link="/reglement-illegal"
        />

        {/* Bloc centré en dessous */}
        <div className="col-span-1 md:col-span-3 mt-8 flex justify-center">
          <ReglementCard
            image={"src/assets/media/img-back/fiveM.png"}
            title="Règlement Discord"
            link="/reglement-discord"
          />
        </div>
      </div>
    </div>
  );
}
