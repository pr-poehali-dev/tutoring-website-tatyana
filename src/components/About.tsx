import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Обо мне
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="GraduationCap" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Образование</h3>
                  <p className="text-muted-foreground">
                    ГБПОУ ордена "Знак почета" г. Кудымкар
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Опыт работы</h3>
                  <p className="text-muted-foreground">
                    4 года работы с детьми в формате репетиторства
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-foreground leading-relaxed">
                Я — опытный педагог с профильным образованием и многолетней практикой. 
                Помогаю ученикам не только освоить программу, но и полюбить русский язык. 
                Индивидуальный подход к каждому ребенку позволяет добиваться высоких результатов 
                в обучении и успешной сдачи экзаменов.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
