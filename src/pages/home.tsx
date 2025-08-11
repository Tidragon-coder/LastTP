import { Helmet } from 'react-helmet-async'; // Not compatinble with React19, for now we use a useEffect 
import { useEffect } from 'react';
import Header from '../components/organisms/header';
import BgPrincip from '../components/organisms/bgPicture';

export default function Home() {

    useEffect(() => {document.title = "LastRP - Home";}, []); // Temporary solution for setting the title

    return (

        <div>
            <Header/>
            <Helmet>
                <title>LastRP - Home</title>
                <meta name="description" content="Welcome to LastRP, the home page of our application." />
            </Helmet>
            <BgPrincip image={'src/assets/media/img-back/fiveM.png'} />
            <div>
                <h2 className="text-2xl text-red-500">Welcome to LastRP</h2>
                <p>This is the home page of the LastRP application.</p>
            </div>
        </div>
    );
}
