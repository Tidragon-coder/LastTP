import { useEffect, useState } from 'react';
import Header from '../components/organisms/header';
import BgPrincip from '../components/organisms/bgPicture';
import DescriptionSection from '../components/organisms/descriptionSection';
import StatSection from '../components/organisms/statsSection';
import Banniere from '../components/organisms/banniere';
import TeamSection from '../components/organisms/teamSection';
import Footer from '../components/organisms/footer';
import { getPlayerCount } from '../api/fiveM';

export default function Home() {
    useEffect(() => {
        document.title = "Last RolePlay";
    }, []);

    const [nbjoueurs, setNbJoueurs] = useState<number | null>(null);

    useEffect(() => {
        const fetchAndLogPlayerCount = async () => {
            try {
                const count = await getPlayerCount();
                setNbJoueurs(count);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAndLogPlayerCount();
    }, []);

    return (
        <div>
            <Header />
            <div className="flex flex-col gap-20">
                <BgPrincip
                    image={'src/assets/media/img-back/BGLastRP.png'}
                    titre='Last RolePlay'
                    sousTitre={
                        nbjoueurs !== null
                            ? `${nbjoueurs} ${nbjoueurs > 1 ? 'joueurs' : 'joueur'} en ligne`
                            : 'Chargement...'
                    }
                    home={true}
                />
                <DescriptionSection />
                <StatSection />
                <Banniere />
                <TeamSection />
                <Footer />
            </div>
        </div>
    );
}
