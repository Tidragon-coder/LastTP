import { Helmet } from 'react-helmet-async'; // Not compatinble with React19, for now we use a useEffect 
import { useEffect } from 'react';
import Header from '../components/organisms/header';
import BgPrincip from '../components/organisms/bgPicture';
import DescriptionSection from '../components/organisms/descriptionSection';
import StatSection from '../components/organisms/statsSection';
import TeamSection from '../components/organisms/teamSection';
import Footer from '../components/organisms/footer';

export default function Home() {

    useEffect(() => { document.title = "LastRP - Home"; }, []); // Temporary solution for setting the title

    return (

        <div >
            <Helmet>
                <title>LastRP - Home</title>
                <meta name="description" content="Welcome to LastRP, the home page of our application." />
            </Helmet>

            <Header />
            <div className="flex flex-col gap-24">

                <BgPrincip image={'src/assets/media/img-back/fiveM.png'} titre='LastRP' sousTitre='XX joueurs en ligne' />
                <DescriptionSection />
                <StatSection />
                <TeamSection />
                <Footer />
                
            </div>


        </div>
    );
}
