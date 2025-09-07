import { useEffect } from "react";

import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from "../components/organisms/bgPicture";
import RulesContentRI from "../components/organisms/rulesContentRI";
import SummarySidebar from "../components/organisms/summarySidebar";

export default function ReglementIllegal() {
    useEffect(() => { document.title = "LastRP - Réglements Illegal"; }, []); // Temporary solution for setting the title
    return (
        <div >
            <Header />
            <BgPrincip image={'src/assets/media/img-back/BGLastRP.png'} titre='Règlements Illegal'  hSize={'50vh'} />
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
                <div className="md:col-span-3">
                    <RulesContentRI />
                </div>
                <div className="hidden md:block md:col-span-1">
                    <SummarySidebar type="illegal" />
                </div>
            </div>
            <Footer />
        </div>
    );
}