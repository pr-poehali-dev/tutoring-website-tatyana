import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Обо мне
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={48} className="text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Татьяна Юрьевна
                </h3>
                
                <div className="space-y-4 text-foreground/80">
                  <div className="flex gap-3">
                    <Icon name="GraduationCap" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Образование:</p>
                      <p>ГБПОУ ордена "Знак почета" г. Кудымкар</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="Award" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Опыт работы:</p>
                      <p>4 года работы с детьми в формате репетиторства</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="Target" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Специализация:</p>
                      <p>Подготовка к ЕГЭ, контрольным работам, помощь в освоении школьной программы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
