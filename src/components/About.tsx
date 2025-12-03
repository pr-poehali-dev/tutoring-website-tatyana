import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Обо мне
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/30" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Татьяна Юрьевна
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Репетитор по русскому языку с профессиональным образованием и многолетним опытом работы с детьми.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <Icon name="School" size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Образование</h4>
                    <p className="text-muted-foreground">
                      ГБПОУ ордена "Знак почета" г. Кудымкар
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <Icon name="Briefcase" size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Опыт работы</h4>
                    <p className="text-muted-foreground">
                      4 года работы с детьми в формате репетиторства
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <Icon name="Target" size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Специализация</h4>
                    <p className="text-muted-foreground">
                      Подготовка к ЕГЭ, помощь старшеклассникам, работа с упущенным материалом
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;