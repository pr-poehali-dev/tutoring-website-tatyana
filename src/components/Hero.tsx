import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Репетитор по русскому языку
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Татьяна Юрьевна
            </p>
            <p className="text-lg text-foreground mb-8">
              Профессиональная подготовка к экзаменам, помощь в освоении программы и индивидуальный подход к каждому ученику
            </p>
            <Button size="lg" onClick={scrollToContacts} className="bg-primary hover:bg-primary/90">
              Записаться на занятие
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/b6142a6b-84c4-4843-8138-89358f823787/files/1e074ba4-eaa6-4561-87fd-99febb66ee3d.jpg"
              alt="Татьяна Юрьевна - репетитор по русскому языку"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
