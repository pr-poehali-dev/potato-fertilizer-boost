import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProblemsAndSolution = () => {
  return (
    <>
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
    </>
  );
};

export default ProblemsAndSolution;
