import Logo from "../atoms/logo";
import FooterColumn from "../molecules/footerColumn";

export default function Footer() {
  return (
    <footer className="bg--950 text-gray-300 px-6 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        
        <div className="flex-1">
          <Logo src={'src/assets/media/logo/logo-lastRP-xs.png'} />
          <p className="mt-4 text-sm">
            LastRP est un serveur GTA immersif. Rejoignez l'aventure et vivez votre histoire.
          </p>
        </div>

        {/* Liens */}
        <div className="flex flex-1 justify-between gap-10">
          <FooterColumn
            title="Navigation"
            links={[
              { text: "Accueil", href: "/" },
              { text: "À propos", href: "/about" },
              { text: "Équipe", href: "/team" },
              { text: "Réglement", href: "/reglement" },
              { text: "Discord", href: "/discord" },
            ]}
          />
          <FooterColumn
            title="Réseaux"
            links={[
              { text: "Discord", href: "https://discord.gg/" },
              { text: "YouTube", href: "https://youtube.com/" },
              { text: "Twitter", href: "https://twitter.com/" },
            ]}
          />
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} LastRP. Tous droits réservés.
      </div>
    </footer>
  );
}
