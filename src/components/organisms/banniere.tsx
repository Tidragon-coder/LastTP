import Button from "../atoms/button";
import Titre from "../atoms/titlePart";

export default function Banniere() {
  return (
    <div id="banniere" className="w-full bg-gradient-to-r from-[#20a49c] via-[#0B0838] to-[#20a49c] flex flex-col items-center justify-center py-10 px-6 text-center">
      <Titre text="Plongez dans l’aventure RP !" />
      <p className="text-white text-lg max-w-2xl mt-10 mb-10">
        Rejoignez une communauté active et vivez une expérience unique sur notre serveur RP.
        Préparez-vous à écrire votre propre histoire !
      </p>
      <Button
        size="large"
        color="default"
        href="https://cfx.re/join/ak3drz"
      >
        Cliquez ici pour jouer
      </Button>
    </div>
  );
}
