import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Контакты
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Свяжитесь со мной
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Телефон</p>
                        <a href="tel:+79999999999" className="text-muted-foreground hover:text-accent transition">
                          +7 (999) 999-99-99
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href="mailto:tatyana@example.com" className="text-muted-foreground hover:text-accent transition">
                          tatyana@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Город</p>
                        <p className="text-muted-foreground">Кудымкар</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">График работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 14:00 - 20:00</p>
                        <p className="text-muted-foreground">Сб: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Записаться на занятие
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Для записи на занятие свяжитесь со мной любым удобным способом. 
                    Первое занятие — бесплатно! Это позволит определить уровень подготовки 
                    и составить индивидуальную программу обучения.
                  </p>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
