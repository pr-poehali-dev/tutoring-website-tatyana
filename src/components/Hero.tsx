import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="GraduationCap" size={64} className="text-primary" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Репетитор по русскому языку
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in">
            Татьяна Юрьевна
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Помогу подготовиться к ЕГЭ, подтянуть знания и полюбить русский язык
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="text-lg px-8"
            >
              Записаться на занятие
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('services')}
              className="text-lg px-8"
            >
              Узнать подробнее
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Icon name="Award" size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">4 года</h3>
              <p className="text-muted-foreground">опыта работы</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Icon name="BookOpen" size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">ЕГЭ</h3>
              <p className="text-muted-foreground">подготовка к экзамену</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Icon name="Users" size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Индивидуально</h3>
              <p className="text-muted-foreground">подход к каждому</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;