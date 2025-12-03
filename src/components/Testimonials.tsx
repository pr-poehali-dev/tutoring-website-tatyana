import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Анна Петровна',
      role: 'Мама ученицы 11 класса',
      text: 'Татьяна Юрьевна помогла моей дочери подготовиться к ЕГЭ. Результат превзошёл все ожидания — 94 балла! Спасибо за профессионализм и терпение.',
      rating: 5
    },
    {
      name: 'Дмитрий',
      role: 'Ученик 10 класса',
      text: 'Благодаря занятиям с Татьяной Юрьевной я наконец-то понял правила русского языка. Оценки улучшились, и я стал увереннее на уроках.',
      rating: 5
    },
    {
      name: 'Мария Сергеевна',
      role: 'Мама ученика 9 класса',
      text: 'Очень довольны результатами! Сын подтянул успеваемость по русскому языку, стал внимательнее и ответственнее относиться к учёбе.',
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Отзывы
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Что говорят родители и ученики о занятиях
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-lg">
              <Icon name="Users" size={24} className="text-accent" />
              <p className="text-lg font-semibold text-foreground">
                Более 50 довольных учеников за 4 года работы
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
