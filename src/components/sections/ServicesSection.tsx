import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: 'FileCheck',
      title: 'Подготовка к контрольным',
      description: 'Готовлю старшеклассников к сдаче контрольных работ'
    },
    {
      icon: 'Trophy',
      title: 'Подготовка к ЕГЭ',
      description: 'Готовлю к сдаче ЕГЭ по русскому языку'
    },
    {
      icon: 'BookMarked',
      title: 'Восполнение пробелов',
      description: 'Объясняю упущенный материал и подтягиваю уровень'
    },
    {
      icon: 'PenTool',
      title: 'Помощь с домашними заданиями',
      description: 'Помогаю с домашним заданием по русскому языку'
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Виды занятий
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Индивидуальный подход к каждому ученику с учетом его уровня подготовки и целей
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={service.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
