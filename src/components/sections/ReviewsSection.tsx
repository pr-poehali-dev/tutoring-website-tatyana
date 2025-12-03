import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Мария Ивановна',
      role: 'Мама ученицы 11 класса',
      text: 'Татьяна Юрьевна помогла моей дочери подготовиться к ЕГЭ. Результат превзошел все ожидания - 92 балла! Очень благодарны за профессионализм.',
      rating: 5
    },
    {
      name: 'Дмитрий',
      role: 'Ученик 10 класса',
      text: 'Благодаря занятиям с Татьяной Юрьевной я смог подтянуть свои знания по русскому языку. Объясняет понятно и доступно.',
      rating: 5
    },
    {
      name: 'Елена Петровна',
      role: 'Мама ученика 9 класса',
      text: 'Отличный репетитор! Сын стал лучше понимать предмет, оценки значительно улучшились. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Отзывы
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Что говорят мои ученики и их родители
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-4 italic">
                "{review.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
