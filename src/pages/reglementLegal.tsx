import { useEffect } from "react";

import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from "../components/organisms/bgPicture";
import RulesContentRL from "../components/organisms/rulesContentRL";
import SummarySidebar from "../components/organisms/summarySidebar";

export default function ReglementLegal() {
    useEffect(() => { document.title = "LastRP - Réglements Légal"; }, []); // Temporary solution for setting the title
    
    return (
        <div >
            <Header />
            <BgPrincip image={'src/assets/media/img-back/fiveM.png'} titre='Règlements Légal' sousTitre='Ce règlement définit les règles de base du serveur LastRP. Tout joueur doit en prendre connaissance avant de jouer' hSize={'50vh'} />
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
                <div className="md:col-span-3">
                    <RulesContentRL />
                </div>
                <div className="hidden md:block md:col-span-1">
                    <SummarySidebar type="legal" />
                </div>
            </div>
            <Footer />
        </div>
    );
}