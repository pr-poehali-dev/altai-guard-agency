import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-security shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-security-accent" />
          <span className="text-xl font-bold text-white">Алтайские Медведи</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#services">Услуги</NavLink>
          <NavLink href="#about">О компании</NavLink>
          <NavLink href="#advantages">Преимущества</NavLink>
          <NavLink href="#contacts">Контакты</NavLink>
          <Button className="bg-security-accent hover:bg-security-secondary text-white">
            Заказать звонок
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-security-light">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <MobileNavLink href="#services" onClick={toggleMenu}>Услуги</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>О компании</MobileNavLink>
            <MobileNavLink href="#advantages" onClick={toggleMenu}>Преимущества</MobileNavLink>
            <MobileNavLink href="#contacts" onClick={toggleMenu}>Контакты</MobileNavLink>
            <Button className="bg-security-accent hover:bg-security-secondary text-white w-full">
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-200 hover:text-security-accent transition-colors duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href} 
    className="text-gray-200 hover:text-security-accent transition-colors duration-300 text-lg py-2"
    onClick={onClick}
  >
    {children}
  </a>
);

export default NavBar;
