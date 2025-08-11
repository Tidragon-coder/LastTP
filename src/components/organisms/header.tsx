import Logo from '../atoms/logo';
import Navigation from '../molecules/navigation';

type HeaderProps = {
  logoSrc: string;
};

export default function Header({ logoSrc }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Logo src={logoSrc} />
      <Navigation />
    </header>
  );
}
