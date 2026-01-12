import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const FaqAndContact = () => {
  return (
    <>
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
    </>
  );
};

export default FaqAndContact;
