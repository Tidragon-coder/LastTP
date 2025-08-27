import { useEffect } from "react";

import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from "../components/organisms/bgPicture";
import Reglement from "../components/organisms/reglementDiscordPart";

export default function ReglementGlobal() {
        useEffect(() => { document.title = "LastRP - Réglements Globaux"; }, []); // Temporary solution for setting the title
    
    return (
        <section >
            <Header />
            <BgPrincip image={'src/assets/media/img-back/BGLastRP.png'} titre='Règlements Discord' sousTitre='Ceci est le Règlement du Discord de LastRP, merci de lire attentivement avant de vous connecter' hSize={'50vh'} />
            <Reglement />
            <Footer />
        </section>
    )}