import Title from "../atoms/title";

export default function DescriptionSection() {
  return (
    <section className="w-full px-6 py-12 bg-black text-white">
      {/* Titre centré */}
      <div className="flex justify-center mb-20">
        <Title text="À propos de LastRP" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20">
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 text-lg leading-relaxed">
          <p>
            LastRP est un serveur de jeu immersif qui vous plonge dans un monde
            vivant et dynamique où chaque action compte. Rejoignez une
            communauté active, participez à des événements uniques, et
            construisez votre propre histoire. Que vous choisissiez d’être un
            citoyen modèle, un entrepreneur ambitieux ou un criminel
            redoutable, les possibilités sont infinies. Avec une équipe dédiée à
            offrir des mises à jour régulières et un gameplay équilibré, LastRP
            vous garantit une expérience de jeu inoubliable à chaque connexion.
          </p>
        </div>

        {/* Vidéo à droite */}
        <div className="w-full md:w-1/2 aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/QkkoHAzjnUs"
            title="LastRP Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
