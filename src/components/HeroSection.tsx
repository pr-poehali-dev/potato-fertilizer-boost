import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592921870789-04563d55041c?w=1920')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <Badge className="mb-6 px-4 py-2 text-base bg-primary hover:bg-primary/90">
          +20% к урожаю с первого сезона
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Рекордный урожай картофеля.<br />Гарантированно.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          Специализированное органическое удобрение «Картофельная мощь»<br />для сельхозпредприятий, фермеров и розничных сетей
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Рассчитать для моего хозяйства
          <Icon name="ArrowRight" className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
