import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'ClipboardCheck',
    title: 'Подготовка к контрольным',
    description: 'Готовлю старшеклассников к сдаче контрольных работ по русскому языку'
  },
  {
    icon: 'FileText',
    title: 'Подготовка к ЕГЭ',
    description: 'Комплексная подготовка к единому государственному экзамену по русскому языку'
  },
  {
    icon: 'BookOpen',
    title: 'Устранение пробелов',
    description: 'Объясняю упущенный материал и подтягиваю уровень знаний'
  },
  {
    icon: 'PenTool',
    title: 'Помощь с домашними заданиями',
    description: 'Помогаю разобраться с домашними заданиями и закрепить материал'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Виды занятий
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Предлагаю индивидуальные занятия по русскому языку для школьников разных возрастов
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
