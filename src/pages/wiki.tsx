import { useEffect } from "react";

import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from "../components/organisms/bgPicture";
import CardsSection from "../components/organisms/wiki/cardsSection";

export default function Wiki() {
    useEffect(() => { document.title = "LastRP - Wiki"; }, []); // Temporary solution for setting the title
    return (
        <>
            <Header />
            <BgPrincip image={'src/assets/media/img-back/BGLastRP.png'} titre='Le wiki' sousTitre='Le wiki de LastRP' hSize={'50vh'} />
            <CardsSection />

            <Footer />
        </>
    )
}
