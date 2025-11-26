import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const programs = [
    { id: 1, title: 'Вводный противопожарный инструктаж', duration: '2 часа', price: '5 000 ₽', type: 'Обязательный' },
    { id: 2, title: 'Первичный противопожарный инструктаж', duration: '3 часа', price: '7 500 ₽', type: 'Обязательный' },
    { id: 3, title: 'Повторный противопожарный инструктаж', duration: '2 часа', price: '6 000 ₽', type: 'Ежегодный' },
    { id: 4, title: 'Внеплановый противопожарный инструктаж', duration: '1.5 часа', price: '4 500 ₽', type: 'По требованию' },
    { id: 5, title: 'Целевой противопожарный инструктаж', duration: '2 часа', price: '5 500 ₽', type: 'Специальный' },
    { id: 6, title: 'Программа минимум пожарно-технических знаний', duration: '16 часов', price: '15 000 ₽', type: 'Руководители' },
  ];

  const services = [
    { title: 'Индивидуальный инструктаж', description: 'Для 1-5 человек', price: 'от 5 000 ₽', icon: 'User' },
    { title: 'Групповой инструктаж', description: 'Для групп 6-20 человек', price: 'от 20 000 ₽', icon: 'Users' },
    { title: 'Корпоративный пакет', description: 'Для организаций 20+ человек', price: 'от 50 000 ₽', icon: 'Building2' },
    { title: 'Выездной формат', description: 'Проведение на территории клиента', price: '+ 3 000 ₽', icon: 'MapPin' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
              <Icon name="Flame" size={24} />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">ПожБезопасность</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium transition-colors hover:text-primary">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium transition-colors hover:text-primary">
              О нас
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-sm font-medium transition-colors hover:text-primary">
              Программы
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium transition-colors hover:text-primary">
              Услуги
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="User" size={16} className="mr-2" />
                    Кабинет
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Личный кабинет</DialogTitle>
                    <DialogDescription>Управление вашими инструктажами</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Ваши программы:</h4>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Вводный инструктаж</CardTitle>
                          <CardDescription>Пройден 15.11.2025</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                    <Button onClick={() => setIsLoggedIn(false)} variant="outline" className="w-full">
                      Выйти
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход в личный кабинет</DialogTitle>
                    <DialogDescription>Введите ваши данные для входа</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.ru" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button onClick={() => setIsLoggedIn(true)} className="w-full">
                      Войти
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Главная
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    О нас
                  </button>
                  <button onClick={() => scrollToSection('programs')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Программы
                  </button>
                  <button onClick={() => scrollToSection('services')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Услуги
                  </button>
                  <button onClick={() => scrollToSection('contacts')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Контакты
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://cdn.poehali.dev/projects/146eec8b-5817-4b75-b362-e87d0e9e1e0e/files/7aebd08d-d597-4913-9aa4-468d37708aa1.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge variant="outline" className="px-4 py-1">
                <Icon name="Award" size={14} className="mr-2" />
                Профессиональное обучение
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Противопожарные инструктажи для вашей безопасности
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное обучение пожарной безопасности с выдачей документов установленного образца
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('programs')} className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Выбрать программу
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50 relative overflow-hidden">
          <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10 hidden lg:block">
            <img 
              src="https://cdn.poehali.dev/projects/146eec8b-5817-4b75-b362-e87d0e9e1e0e/files/3f4e2426-bcbd-4a24-8e58-8bb7134692e6.jpg" 
              alt="" 
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Направление деятельности</h2>
              <p className="text-lg text-muted-foreground">
                Комплексные решения в области пожарной безопасности для бизнеса и организаций
              </p>
            </div>

            <Tabs defaultValue="who" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="who">Для кого</TabsTrigger>
                <TabsTrigger value="instructors">Кто проводит</TabsTrigger>
                <TabsTrigger value="requirements">Требования</TabsTrigger>
              </TabsList>

              <TabsContent value="who" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Целевая аудитория</CardTitle>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Icon name="Building" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Организации и предприятия</h4>
                        <p className="text-sm text-muted-foreground">Обязательное обучение сотрудников всех уровней</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Icon name="Users" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Руководители</h4>
                        <p className="text-sm text-muted-foreground">Ответственные за пожарную безопасность</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Icon name="GraduationCap" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Новые сотрудники</h4>
                        <p className="text-sm text-muted-foreground">Вводный инструктаж при приеме на работу</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Icon name="Briefcase" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Действующий персонал</h4>
                        <p className="text-sm text-muted-foreground">Периодическое обучение и аттестация</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructors" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Наши инструкторы</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Award" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Сертифицированные специалисты</h4>
                        <p className="text-muted-foreground">Лицензированные инструкторы с опытом работы более 5 лет в области пожарной безопасности</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon name="BookCheck" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Образование и квалификация</h4>
                        <p className="text-muted-foreground">Высшее профильное образование, регулярное повышение квалификации, знание актуального законодательства</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon name="Shield" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Практический опыт</h4>
                        <p className="text-muted-foreground">Реальный опыт работы в пожарных службах и аварийно-спасательных формированиях</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Что необходимо для обучения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Icon name="FileText" size={20} className="text-primary" />
                          Документы
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                          <li>• Паспорт или документ, удостоверяющий личность</li>
                          <li>• Заявка от организации (для юр. лиц)</li>
                          <li>• Копия предыдущего удостоверения (при наличии)</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Icon name="CheckCircle" size={20} className="text-secondary" />
                          Условия
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                          <li>• Возраст от 18 лет</li>
                          <li>• Базовое образование (не ниже среднего)</li>
                          <li>• Прохождение медосмотра (для некоторых программ)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="programs" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог программ</h2>
              <p className="text-lg text-muted-foreground">
                Выберите программу обучения, соответствующую вашим требованиям
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {programs.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{program.type}</Badge>
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription>{program.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">{program.price}</p>
                        <p className="text-xs text-muted-foreground">за человека</p>
                      </div>
                      <Button size="sm">
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Услуги и тарифы</h2>
              <p className="text-lg text-muted-foreground">
                Гибкие форматы обучения для разных потребностей
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:scale-105 transition-transform">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Дополнительные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Разработка инструкций и документации</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Консультации по пожарной безопасности</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Проверка систем противопожарной защиты</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Аудит пожарной безопасности объекта</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Контакты</h2>
                  <p className="text-muted-foreground">
                    Свяжитесь с нами удобным способом для консультации и записи на обучение
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@firesafety.ru</p>
                        <p className="text-muted-foreground">support@firesafety.ru</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">Москва, ул. Примерная, д. 123</p>
                        <p className="text-muted-foreground">Офис 456, 7 этаж</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Реквизиты организации</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Полное наименование</p>
                      <p className="font-semibold">ООО "Центр пожарной безопасности"</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">ИНН / КПП</p>
                      <p className="font-semibold">7701234567 / 770101001</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">ОГРН</p>
                      <p className="font-semibold">1234567890123</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Юридический адрес</p>
                      <p className="font-semibold">123456, г. Москва, ул. Примерная, д. 123</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Банковские реквизиты</p>
                      <p className="font-semibold">Р/с: 40702810123456789012</p>
                      <p className="font-semibold">К/с: 30101810123456789012</p>
                      <p className="font-semibold">БИК: 044525123</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Лицензия</p>
                      <p className="font-semibold">№ 12345 от 01.01.2020</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                <Icon name="Flame" size={20} />
              </div>
              <span className="font-bold">ПожБезопасность</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Центр пожарной безопасности. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;