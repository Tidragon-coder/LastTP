import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";


import BgPrincip from '../components/organisms/bgPicture';

export default function Discord() {
    return (
        <div >
            <Header />
            <BgPrincip image={'src/assets/media/img-back/fiveM.png'} titre='LastRP - Les Discord' sousTitre='Rejoignez-nous sur Discord' hSize={'50vh'} />
            <Footer />
        </div>
    );
}