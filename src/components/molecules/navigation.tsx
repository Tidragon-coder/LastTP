import NavLink from '../atoms/navLink';


export default function Navigation() {
  return (
    <nav className="flex space-x-6 relative">
      <NavLink href="/">Accueil</NavLink>
      <NavLink href="#rules">Boutique</NavLink>
      <NavLink href="#forum">Wiki</NavLink>


      <div className="relative group text-white hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium ">
        <NavLink href="/reglement" className="text-white hover:text-blue-400">
          Règlement
        </NavLink>

        <div className="absolute left-0 mt-2 hidden w-48 rounded-lg bg-gray-800 shadow-lg group-hover:block">
          <NavLink href="/reglement-global" className="block px-4 py-2 hover:bg-gray-700">
            📜 Règlement Global
          </NavLink>
          <NavLink href="/reglement-legal" className="block px-4 py-2 hover:bg-gray-700">
            ⚖️ Règlement Légal
          </NavLink>
          <NavLink href="/reglement-illegal" className="block px-4 py-2 hover:bg-gray-700">
            🔪 Règlement Illégal
          </NavLink>
        </div>
      </div>


      <NavLink href="/discord">Discord</NavLink>
    </nav>
  );
}
