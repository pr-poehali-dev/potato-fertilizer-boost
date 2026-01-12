import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ProductCatalog = () => {
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
  );
};

export default ProductCatalog;
