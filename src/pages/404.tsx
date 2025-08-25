import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

import BgPrincip from '../components/organisms/bgPicture';
import Button from "../components/atoms/button";

export default function NotFoundPage() {
    return (
        <>
            <Header />
            <BgPrincip
                image={'src/assets/media/img-back/BGLastRP.png'}
                titre='LastRP - Oups...'
                sousTitre="Cette page n'existe pas 🚧"
                
            />

            <div className="flex justify-center m-8">
                <Button href="/" color="primary" size="large">
                    Retour à l'accueil
                </Button>
            </div>

            <Footer />
        </>
    );
}
