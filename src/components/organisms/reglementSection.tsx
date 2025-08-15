import ReglementCard from '../organisms/ReglementCard';


export default function ReglementSection() {
    return (
        <div className="container mx-auto px-4 py-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                <ReglementCard
                    image={'src/assets/media/img-back/fiveM.png'}
                    title="Réglement Légal"
                    link="/reglement-legal"
                />
                <ReglementCard
                    image={'src/assets/media/img-back/fiveM.png'}
                    title="Réglement Global"
                    link="/reglement-globale"
                    className="scale-105 shadow-lg shadow-blue-500/30"
                />
                <ReglementCard
                    image={'src/assets/media/img-back/fiveM.png'}
                    title="Réglement Illégal"
                    link="/reglement-illegal"
                />
            </div>
        </div>)
}