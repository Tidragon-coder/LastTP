import DiscordCard from "../molecules/discordCards";

const DISCORDS: {
    id: string;
    title: string;
    link: string;
    image: string;
    description: string;
}[] = [
        {
            id: "1",
            title: "LastRP Officiel",
            link: "https://discord.gg/lastfa",
            image: "src/assets/media/discord/LastRPOriginal.png",
            description: "Rejoignez le serveur officiel de LastRP pour des annonces, du support et une communauté active.",
        },
        {
            id: "2",
            title: "LastRP - Légal",
            link: "https://discord.gg/ajQEQDbg",
            image: "src/assets/media/discord/LastRPLegal.png",
            description: "Retrouvez toutes les informations de nos entreprises légales ici !",
        },
        {
            id: "3",
            title: "LastRP - Illégal",
            link: "https://discord.gg/zGBtPmdZ",
            image: "src/assets/media/discord/LastRPIllegal.png",
            description: "Toutes les informations concernant l'illégale sur ce discord.",
        },
        {
            id: "4",
            title: "LastRP - Service Publics",
            link: "https://discord.gg/BtTNVj59",
            image: "src/assets/media/discord/LastRP911.png",
            description: "Tu veux t'engager dans les services publics ? Besoin d'informations ? C'est ici !",
        },
        {
            id: "5",
            title: "LastRP - Hayes Auto",
            link: "https://discord.gg/DJKHanyP",
            image: "src/assets/media/discord/Hayesauto.png",
            description: "Nos mécanos experts sont là pour VOUS.",
        },
        {
            id: "6",
            title: "LastRP - Benny's",
            link: "https://discord.gg/nnukHggx",
            image: "src/assets/media/discord/bennys.png",
            description: "Une vieille entreprise de mécanique qui marche du tonnerre, non ?",
        },
        {
            id: "7",
            title: "LastRP - Vigneron",
            link: "https://discord.gg/VAeRWS9W",
            image: "src/assets/media/discord/vigneron.png",
            description: "Besoin d'un vin comment ? Sucré ? Simple ? Renseignez-vous et commandez dès maintenant !",
        },
        {
            id: "8",
            title: "LastRP - Tabac",
            link: "https://discord.gg/4ub4YhdU",
            image: "src/assets/media/discord/Tabac.png",
            description: "Une cigarette pour les plus pauvres et un cigare pour les plus riche !",
        },
        {
            id: "9",
            title: "LastRP - Unicorn",
            link: "https://discord.gg/PdZF7Hgf",
            image: "src/assets/media/discord/Unicorn.png",
            description: "Viens faire la fête avec nos danseuses professionnelles...",
        },
        {
            id: "10",
            title: "LastRP - BurgerShot",
            link: "https://discord.gg/FwsZVfhH",
            image: "src/assets/media/discord/BurgerShot.png",
            description: "Mangez simple et à votre guise, telle est notre devine.",
        },
        {
            id: "11",
            title: "LastRP - Wiwang Tower Bar",
            link: "https://discord.gg/6PXfD5yA",
            image: "src/assets/media/discord/Wiwang.png",
            description: "La fête dans une géante tour, c'est pas géniale ça ?",
        },
        {
            id: "12",
            title: "LastRP - Dynasty8",
            link: "https://discord.gg/argDEmZ8",
            image: "src/assets/media/discord/Dynasty8.png",
            description: " Avoir une maison pour se loger, c'est mieux, tu ne trouves pas ?",
        },
    ];


export default function DiscordPage() {
    return (
        <div className="min-h-screen bg-gray-950 py-12 px-6">
            <h1 className="text-3xl font-bold text-white mb-16 text-center">📢 Tous les Discords</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {DISCORDS.map((discord) => (
                    <DiscordCard key={discord.id} {...discord} />
                ))}
            </div>
        </div>
    );
}
