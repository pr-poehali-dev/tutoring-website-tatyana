import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Анна Петрова',
    role: 'Мама ученицы 10 класса',
    text: 'Татьяна Юрьевна — замечательный педагог! Дочь занимается уже полгода, результаты видны сразу. Оценки улучшились, появился интерес к русскому языку.',
    rating: 5
  },
  {
    name: 'Сергей Иванов',
    role: 'Родитель',
    text: 'Очень благодарны за подготовку к ЕГЭ! Сын получил высокий балл благодаря профессионализму и терпению Татьяны Юрьевны.',
    rating: 5
  },
  {
    name: 'Мария Сидорова',
    role: 'Мама ученика 9 класса',
    text: 'Отличный репетитор! Индивидуальный подход, понятные объяснения. Сын с удовольствием ходит на занятия.',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Отзывы родителей
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
