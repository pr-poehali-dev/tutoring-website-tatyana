import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'FileCheck',
      title: 'Подготовка к контрольным',
      description: 'Готовлю старшеклассников к сдаче контрольных работ, разбираю сложные темы и помогаю систематизировать знания'
    },
    {
      icon: 'Trophy',
      title: 'Подготовка к ЕГЭ',
      description: 'Комплексная подготовка к единому государственному экзамену по русскому языку с разбором всех типов заданий'
    },
    {
      icon: 'BookOpenCheck',
      title: 'Восполнение пробелов',
      description: 'Объясняю упущенный материал и подтягиваю уровень знаний по русскому языку до нужного стандарта'
    },
    {
      icon: 'PenTool',
      title: 'Помощь с домашним заданием',
      description: 'Помогаю разобраться с домашними заданиями, объясняю непонятные моменты и формирую навык самостоятельной работы'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Виды занятий
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Индивидуальный подход к каждому ученику с учетом его целей и уровня подготовки
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Формат занятий
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Занятия проводятся индивидуально, с учетом особенностей и потребностей каждого ученика. 
                  Длительность одного занятия — 60-90 минут. Возможны как регулярные занятия, так и разовые консультации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;