import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-card shadow-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            <h1 className="text-xl font-bold text-primary">Татьяна Юрьевна</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-accent transition">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition">
              Услуги
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-accent transition">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent transition">
              Контакты
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-accent transition text-left">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition text-left">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition text-left">
              Услуги
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-accent transition text-left">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent transition text-left">
              Контакты
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;