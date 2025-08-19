import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from "../components/organisms/bgPicture";

export default function ReglementGlobal() {
    return (
        <div >
            <Header />
            <BgPrincip image={'src/assets/media/img-back/fiveM.png'} titre='LastRP - Régléments Globaux' sousTitre='Ce règlement définit les règles de base du serveur LastRP. Tout joueur doit en prendre connaissance avant de jouer' hSize={'50vh'}/>
            <Footer />
        </div>
    );
}