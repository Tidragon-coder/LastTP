import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from "../components/organisms/bgPicture";

export default function ReglementLegal() {
    return (
        <div>
            <Header />
            <BgPrincip image={'src/assets/media/img-back/fiveM.png'} titre='LastRP - Réglement Légal' sousTitre='Ce règlement définit les règles légales du serveur LastRP. ' hSize={'50vh'} />
            <div className="container mx-auto px-6 py-12 text-white">
                <h1 className="text-4xl font-bold mb-6">Règlement Légal</h1>
                <p className="text-lg mb-4">Bienvenue dans le règlement légal de LastRP. Ce document est essentiel pour garantir une expérience de jeu juste et agréable pour tous les joueurs.</p>
                <p className="text-lg mb-4">Veuillez lire attentivement chaque section et vous assurer de respecter toutes les règles énoncées.</p>
            </div>
            <Footer />
        </div>
    );
}