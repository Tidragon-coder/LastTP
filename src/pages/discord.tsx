import { useEffect } from "react";

import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";


import BgPrincip from '../components/organisms/bgPicture';
import DiscordPart from "../components/organisms/discordPart";

export default function Discord() {
        useEffect(() => { document.title = "LastRP - Discord"; }, []); // Temporary solution for setting the title
    return (
        <div >
            <Header />
            <BgPrincip image={'src/assets/media/img-back/BGLastRP.png'} titre='Les Discords' sousTitre='Rejoignez-nous sur Discord' hSize={'50vh'} />
            <DiscordPart />
            <Footer />
        </div>
    );
}