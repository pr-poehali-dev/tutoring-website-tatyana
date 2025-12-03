import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="BookOpen" size={64} className="text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Татьяна Юрьевна
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Репетитор по русскому языку
          </p>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            Профессиональная подготовка к ЕГЭ и контрольным работам. 
            Индивидуальный подход к каждому ученику с 4-летним опытом работы.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contacts')}
              className="text-lg px-8"
            >
              Записаться на занятие
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('services')}
              className="text-lg px-8"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
