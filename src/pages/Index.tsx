import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">'
      <Header />

      <main className="pt-16">
        <section id="home" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                  Репетитор по русскому языку
                </h1>
                <p className="text-xl text-muted-foreground">
                  Индивидуальный подход к каждому ученику. Качественная подготовка к ЕГЭ и контрольным работам.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => scrollToSection("contacts")} size="lg" className="bg-primary hover:bg-primary/90">
                    Записаться на занятие
                  </Button>
                  <Button onClick={() => scrollToSection("services")} size="lg" variant="outline">
                    Узнать больше
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" className="text-accent" size={24} />
                    <span className="text-sm font-semibold">4 года опыта</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-accent" size={24} />
                    <span className="text-sm font-semibold">Индивидуальный подход</span>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="https://cdn.poehali.dev/projects/b6142a6b-84c4-4843-8138-89358f823787/files/9ce20982-fe0a-4d8d-bdde-e92a04266f5a.jpg"
                    alt="Татьяна Юрьевна"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Успешность учеников</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">Обо мне</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="GraduationCap" className="text-accent flex-shrink-0 mt-1" size={32} />
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Образование</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          ГБПОУ ордена "Знак Почёта" г. Кудымкар
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div className="flex items-start gap-4">
                      <Icon name="Briefcase" className="text-accent flex-shrink-0 mt-1" size={32} />
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Опыт работы</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          4 года опыта работы с детьми в формате репетиторства. Индивидуальный подход к каждому ученику, учёт особенностей восприятия материала.
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div className="flex items-start gap-4">
                      <Icon name="Target" className="text-accent flex-shrink-0 mt-1" size={32} />
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Моя миссия</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Помогаю ученикам достичь высоких результатов, развить уверенность в себе и полюбить русский язык. Использую современные методики и проверенные практики.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary text-center mb-4">Виды занятий</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Комплексная подготовка по русскому языку для учеников разного уровня
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon name="FileCheck" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Подготовка к контрольным</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Готовлю старшеклассников к сдаче контрольных работ. Разбираем типичные задания, отрабатываем сложные темы.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                      <Icon name="Trophy" className="text-accent" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Подготовка к ЕГЭ</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Комплексная подготовка к единому государственному экзамену. Разбор всех заданий, работа над сочинением.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon name="TrendingUp" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Подтягивание уровня</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Объясняю упущенный материал, заполняем пробелы в знаниях, систематизируем полученные навыки.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                      <Icon name="BookMarked" className="text-accent" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Помощь с домашним заданием</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Помогаю разобраться с домашними заданиями, объясняю непонятные темы доступным языком.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">Отзывы учеников</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "Татьяна Юрьевна помогла мне подготовиться к ЕГЭ. Объясняет материал понятно и терпеливо. Результат превзошел все ожидания!"
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-primary">Анна К.</p>
                    <p className="text-sm text-muted-foreground">Выпускница 2023</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "Отличный педагог! За полгода занятий мой сын значительно улучшил оценки. Занятия проходят интересно и продуктивно."
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-primary">Мария В.</p>
                    <p className="text-sm text-muted-foreground">Родитель</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-scale transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "Благодаря занятиям с Татьяной Юрьевной я не только улучшил знания, но и полюбил русский язык. Рекомендую!"
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-primary">Дмитрий С.</p>
                    <p className="text-sm text-muted-foreground">Ученик 10 класса</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-white">Запишитесь на пробное занятие</h2>
              <p className="text-xl text-white/90">
                Первое занятие поможет определить текущий уровень и составить индивидуальную программу обучения
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <Card className="shadow-xl">
                  <CardContent className="p-6 text-center space-y-3">
                    <Icon name="Phone" className="text-accent mx-auto" size={32} />
                    <h3 className="font-bold text-primary text-lg">Телефон</h3>
                    <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Позвонить
                    </Button>
                  </CardContent>
                </Card>
                <Card className="shadow-xl">
                  <CardContent className="p-6 text-center space-y-3">
                    <Icon name="Mail" className="text-accent mx-auto" size={32} />
                    <h3 className="font-bold text-primary text-lg">Email</h3>
                    <p className="text-muted-foreground">tutor@example.com</p>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Написать
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary/95 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="BookOpen" size={24} />
            <span className="text-xl font-bold">Татьяна Юрьевна</span>
          </div>
          <p className="text-white/80">Репетитор по русскому языку</p>
          <p className="text-white/60 text-sm mt-4">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;