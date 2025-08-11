import { Helmet} from 'react-helmet-async';
export default function Home() {
    return (
        <div>
            <Helmet>
                <title>LastRP - Home</title>
                <meta name="description" content="Welcome to LastRP, the home page of our application." />
            </Helmet>
            <div>
                <h2 className="text-2xl text-red-500">Welcome to LastRP</h2>
                <p>This is the home page of the LastRP application.</p>
            </div>
        </div>
    );
}
