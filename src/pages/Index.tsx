import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'small',
      name: 'Пакет 25 кг',
      weight: 25,
      price: 1250,
      coverage: 1,
      description: 'Для пробных участков и небольших хозяйств'
    },
    {
      id: 'medium',
      name: 'Мешок 50 кг',
      weight: 50,
      price: 2200,
      coverage: 2,
      description: 'Оптимальное решение для средних площадей',
      popular: true
    },
    {
      id: 'large',
      name: 'Биг-бэг 500 кг',
      weight: 500,
      price: 20000,
      coverage: 20,
      description: 'Промышленные объемы со скидкой'
    }
  ];

  const calculateNeeded = () => {
    if (!area || !selectedPackage) return null;
    const pkg = packages.find(p => p.id === selectedPackage);
    if (!pkg) return null;
    
    const numericArea = parseFloat(area);
    const bagsNeeded = Math.ceil(numericArea / pkg.coverage);
    const totalCost = bagsNeeded * pkg.price;
    
    return { bagsNeeded, totalCost, pkg };
  };

  const result = calculateNeeded();

  return (
    <div className="min-h-screen">
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Знакомо ли вам это?
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Проблемы, с которыми сталкивается каждый картофелевод
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'TrendingDown',
                title: 'Урожай «гороха» вместо товарной картошки',
                description: 'Низкая цена сдачи, потеря прибыли'
              },
              {
                icon: 'AlertTriangle',
                title: 'Слабые растения, больше болезней',
                description: 'Дополнительные траты на обработки и риски'
              },
              {
                icon: 'XCircle',
                title: 'Универсальные удобрения не дают максимума',
                description: 'Деньги уходят, а потенциал поля не раскрыт'
              }
            ].map((item, i) => (
              <Card 
                key={i} 
                className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Пора дать картофелю то, что ему нужно
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                «Картофельная мощь» — точная формула для белорусских почв. 
                Органическая основа + сбалансированный комплекс для крупных, 
                здоровых клубней и сильной ботвы.
              </p>
            </div>

            <Card className="shadow-2xl border-2 border-primary/20 animate-scale-in">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Leaf" className="text-primary" size={28} />
                  Как работает удобрение
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: 'Sparkles',
                      title: 'Мощный старт',
                      text: 'Активное клубнеобразование с первых недель'
                    },
                    {
                      icon: 'Shield',
                      title: 'Крепкий иммунитет',
                      text: 'Укрепление защитных функций растений'
                    },
                    {
                      icon: 'Award',
                      title: 'Товарный урожай',
                      text: 'Накопление крахмала и формирование крупных клубней'
                    }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Преимущества для вашего бизнеса
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'Package',
                title: 'Больше товарной фракции',
                description: 'Повышение выручки за счет увеличения доли крупных клубней'
              },
              {
                icon: 'ShieldCheck',
                title: 'Устойчивость к болезням',
                description: 'Крепкие растения экономят ваши средства на обработках'
              },
              {
                icon: 'TrendingUp',
                title: 'Стабильный результат',
                description: 'Неизменная формула и контроль качества — предсказуемая эффективность каждый сезон'
              },
              {
                icon: 'Zap',
                title: 'Быстрый видимый эффект',
                description: 'Мощная ботва и ровное развитие клубней'
              }
            ].map((item, i) => (
              <Card 
                key={i} 
                className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Доказательства эффективности
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-2 border-primary/20 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="BarChart3" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">+18-22%</CardTitle>
                <CardDescription className="text-base mt-2">к урожайности</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Прибавка в пилотных хозяйствах Гродненской и Брестской областей
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MessageSquareQuote" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Отзыв агронома</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-3">
                  «Копали ровную, чистую картошку, фракция — отличная. Уже считаем заказ на следующий сезон»
                </p>
                <p className="text-sm font-semibold">— Алексей, главный агроном</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="BadgeCheck" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Соответствие требованиям ТР ЕАЭС. Гарантия безопасности и состава
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-white px-4 py-2">Каталог продукции</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Выберите упаковку для вашего хозяйства
              </h2>
              <p className="text-muted-foreground text-lg">
                Рассчитайте необходимое количество и стоимость
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl relative ${
                    selectedPackage === pkg.id 
                      ? 'border-2 border-primary shadow-xl scale-105' 
                      : 'border-2 border-transparent hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white">Популярное</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Вес:</span>
                        <span className="font-semibold">{pkg.weight} кг</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">На площадь:</span>
                        <span className="font-semibold">{pkg.coverage} га</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {pkg.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-xl border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Калькулятор для вашей площади</CardTitle>
                <CardDescription>Укажите площадь посадки в гектарах</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="area" className="text-base mb-2 block">Площадь (га)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Введите площадь в гектарах"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>

                {result && (
                  <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20 animate-scale-in">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Icon name="Calculator" className="text-primary" />
                      Результат расчета:
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Выбранная упаковка:</span>
                        <span className="font-semibold">{result.pkg.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Потребуется упаковок:</span>
                        <span className="font-semibold text-lg">{result.bagsNeeded} шт</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t-2 border-primary/20">
                        <span className="text-lg font-semibold">Итоговая стоимость:</span>
                        <span className="font-bold text-2xl text-primary">
                          {result.totalCost.toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg"
                  disabled={!selectedPackage || !area}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Получить персональный план внесения
                  <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Частые вопросы
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: 'Чем лучше универсальных удобрений?',
                  a: 'Это не «еда для всех», а «премиум-рацион для картофеля». Целевой результат для вашей ключевой культуры. Специально подобранный состав учитывает все потребности картофеля на разных стадиях развития.'
                },
                {
                  q: 'Почему дороже обычных удобрений?',
                  a: 'Вы инвестируете в дополнительный урожай. Прибавка в 20% окупает разницу и приносит прибыль. Считайте не стоимость удобрения, а стоимость каждого дополнительного килограмма урожая.'
                },
                {
                  q: 'Как попробовать без больших закупок?',
                  a: 'Предлагаем пробную партию для теста на ваших полях. Увидите эффект — расширим сотрудничество. Начните с минимального заказа и убедитесь в результате.'
                },
                {
                  q: 'Как применять удобрение?',
                  a: 'Внесение производится согласно агротехнической карте: основное внесение при посадке и подкормка в период вегетации. Подробный план применения входит в комплект поставки.'
                },
                {
                  q: 'Есть ли сертификаты качества?',
                  a: 'Да, вся продукция сертифицирована по стандартам ТР ЕАЭС. Предоставляем полный пакет документов с каждой партией, включая результаты лабораторных исследований.'
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-6 bg-white text-primary px-4 py-2">Ограниченное предложение</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Количество стартовых партий на сезон ограничено
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Оставьте заявку сегодня — и получите персональный план внесения для ваших площадей в подарок
            </p>

            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="text-left">
                    <Label htmlFor="name" className="text-base mb-2 block">Имя</Label>
                    <Input id="name" placeholder="Как к вам обращаться?" className="h-12" />
                  </div>
                  
                  <div className="text-left">
                    <Label htmlFor="contact" className="text-base mb-2 block">Телефон или Email</Label>
                    <Input id="contact" placeholder="+375 (29) 123-45-67" className="h-12" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-left">
                      <Label htmlFor="hectares" className="text-base mb-2 block">Площадь (га)</Label>
                      <Input id="hectares" type="number" placeholder="100" className="h-12" />
                    </div>
                    <div className="text-left">
                      <Label htmlFor="business" className="text-base mb-2 block">Тип бизнеса</Label>
                      <Input id="business" placeholder="Фермерское хозяйство" className="h-12" />
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg shadow-xl"
                    type="submit"
                  >
                    Получить план и расчёт
                    <Icon name="Send" className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2024 Картофельная мощь. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
