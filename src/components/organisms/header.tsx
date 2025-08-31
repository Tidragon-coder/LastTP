import Logo from '../atoms/logo';
import Navigation from '../molecules/navigation';
import Button from '../atoms/button';



export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-2 bg-gray-900 shadow-md ">
      <div className="flex items-center space-x-4">
        <Logo src={'src/assets/media/logo/logo-lastRP-xs.png'} />
        <Button href="#banniere" color="danger" size="medium" >
          Se connecter
        </Button>
      </div>

      <Navigation />
    </header>
  );
}

