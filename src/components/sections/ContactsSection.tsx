import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Я свяжусь с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contacts" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Контакты
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Свяжитесь со мной для записи на занятие
        </p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Способы связи
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Телефон</p>
                  <a href="tel:+79000000000" className="text-primary hover:underline">
                    +7 (900) 000-00-00
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:tutor@example.com" className="text-primary hover:underline">
                    tutor@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telegram</p>
                  <a href="https://t.me/username" className="text-primary hover:underline">
                    @username
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Часы работы</p>
                  <p className="text-foreground/70">Пн-Пт: 14:00 - 20:00</p>
                  <p className="text-foreground/70">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Записаться на занятие
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Телефон
                </label>
                <Input
                  type="tel"
                  placeholder="+7 (900) 000-00-00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Расскажите о ваших целях и пожеланиях"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
