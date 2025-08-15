import Button from '../components/atoms/button';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';

import BgPrincip from '../components/organisms/bgPicture';


export default function Wiki() {
    return (
        <>
            <Header />
            <BgPrincip image={'src/assets/media/img-back/fiveM.png'} titre='LastRP - Régléments' sousTitre='Réglementation du serveur' />
            <h1 className='text-4xl font-bold text-white'>Page wiki</h1>
            <Button size='medium' href='/' color='secondary'>Home</Button>
            <Footer />
        </>
    )
}