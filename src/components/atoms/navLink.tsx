import type { ReactNode } from 'react';
type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
}
