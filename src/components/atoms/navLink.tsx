import type { ReactNode } from 'react';
type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  importante?: boolean;
  onClick?: () => void;
};

export default function NavLink({ href, children, className, importante, onClick}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={` text-white hover:text-[#14b9b9] px-3 py-2 rounded-md text-md font-medium ${importante ? "bg-red-700 hover:bg-red-600 hover:text-gray-300" : ""} ${className ? className : ""}`} 
    >
      {importante ? "🎁" : ""}{children}

    </a>
  );
}
