import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from "../components/organisms/bgPicture";

export default function ReglementIllegal() {
    return (
        <div >
            <Header />
            <BgPrincip image={'src/assets/media/img-back/fiveM.png'} titre='LastRP - Réglement Illegal' sousTitre='Ce règlement definit les regles illegales du serveur LastRP. ' hSize={'50vh'} />
            <div className="container mx-auto px-6 py-12 text-white">
                <h1 className="text-4xl font-bold mb-6">Règlement Illegal</h1>
                <p className="text-lg mb-4">Bienvenue dans le réglement illegal de LastRP. Ce document est essentiel pour garantir une experience de jeu juste et agreable pour tous les joueurs.</p>
                <p className="text-lg mb-4">Veuillez lire attentivement chaque section et vous assurer de respecter toutes les régles énoncées.</p>
            </div>
            <Footer />
        </div>
    );}