import type { ReactNode } from 'react';
type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  importante?: boolean;
};

export default function NavLink({ href, children, className, importante }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`${importante ? "text-gray-200" : ""} text-white hover:text-[#14b9b9] px-3 py-2 rounded-md text-md font-medium ${className ?? ""}`} 
    >
      {children}
    </a>
  );
}
