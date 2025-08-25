import { useEffect } from 'react';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';

import BgPrincip from '../components/organisms/bgPicture';
import ReglementSection from '../components/organisms/reglementSection';

export default function Wiki() {
    useEffect(() => { document.title = "LastRP - Réglement"; }, []);
    return (
        <>
            <Header />
            
            <BgPrincip image={'src/assets/media/img-back/BGLastRP.png'} titre='Règlements' sousTitre='Réglementation du serveur' hSize={'50vh'}/>
            <ReglementSection />
        
            <Footer />
        </>
    )
}