import { useState } from "react";
import NavLink from "../atoms/navLink";
import { Menu, X } from "lucide-react"; // icônes burger/croix

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Bouton mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex space-x-6">
        <NavLink href="/">Accueil</NavLink>
        <NavLink href="#rules" importante={true}>Boutique</NavLink>
        <NavLink href="/wiki">Wiki</NavLink>

        {/* Dropdown */}
        <div className="relative group text-white px-3 py-2 rounded-md text-md font-medium">
          <NavLink href="/reglement" className="text-white hover:#14b9b9">
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
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-32 bg-gray-900 flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          <NavLink href="/" onClick={() => setIsOpen(false)}>
            Accueil
          </NavLink>
          <NavLink href="#rules" importante={true} onClick={() => setIsOpen(false)}>
            Boutique
          </NavLink>
          <NavLink href="/wiki" onClick={() => setIsOpen(false)}>
            Wiki
          </NavLink>

          {/* Dropdown mobile */}
          <div className="flex flex-col space-y-2">
            <NavLink href="/reglement" onClick={() => setIsOpen(false)}>
              Règlement
            </NavLink>
            {/* <NavLink href="/reglement-global" onClick={() => setIsOpen(false)}>
              📜 Règlement Global
            </NavLink>
            <NavLink href="/reglement-legal" onClick={() => setIsOpen(false)}>
              ⚖️ Règlement Légal
            </NavLink>
            <NavLink href="/reglement-illegal" onClick={() => setIsOpen(false)}>
              🔪 Règlement Illégal
            </NavLink> */}
          </div>

          <NavLink href="/discord" onClick={() => setIsOpen(false)}>
            Discord
          </NavLink>
        </div>
      )}
    </nav>
  );
}
