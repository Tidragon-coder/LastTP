import NavLink from '../atoms/navLink';


export default function Navigation() {
  return (
    <nav className="flex space-x-4 " >
      <NavLink href="/">Accueil</NavLink>
      <NavLink href="#rules">Boutique</NavLink>
      <NavLink href="#forum">Wiki</NavLink>
      <NavLink href="/reglement">Réglement</NavLink>
      <NavLink href="#about">Discord</NavLink>
    </nav>
  );
}
