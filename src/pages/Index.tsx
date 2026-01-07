import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const briefings = [
    { 
      id: 1, 
      title: 'Вводный противопожарный инструктаж', 
      duration: '2 часа', 
      price: '5 000 ₽', 
      type: 'Обязательный',
      audience: 'Все принимаемые на работу, командированные, практиканты',
      frequency: 'При приеме на работу'
    },
    { 
      id: 2, 
      title: 'Первичный противопожарный инструктаж', 
      duration: '3 часа', 
      price: '7 500 ₽', 
      type: 'Обязательный',
      audience: 'Все работники на рабочем месте',
      frequency: 'До начала работы'
    },
    { 
      id: 3, 
      title: 'Повторный противопожарный инструктаж', 
      duration: '2 часа', 
      price: '6 000 ₽', 
      type: 'Периодический',
      audience: 'Все работники',
      frequency: 'Не реже 1 раза в год (взрывопожароопасные объекты - 1 раз в 6 месяцев)'
    },
    { 
      id: 4, 
      title: 'Внеплановый противопожарный инструктаж', 
      duration: '1.5 часа', 
      price: '4 500 ₽', 
      type: 'По необходимости',
      audience: 'Работники при изменении условий',
      frequency: 'При изменении технологии, нарушениях, перерыве в работе более 60 дней'
    },
    { 
      id: 5, 
      title: 'Целевой противопожарный инструктаж', 
      duration: '2 часа', 
      price: '5 500 ₽', 
      type: 'Специальный',
      audience: 'Работники при выполнении разовых работ',
      frequency: 'Перед началом работ повышенной опасности'
    },
  ];

  const vrPackages = [
    { title: 'VR-шлем Meta Quest 3', price: '45 000 ₽', specs: '128GB, автономный режим' },
    { title: 'VR-шлем Pico 4', price: '35 000 ₽', specs: '256GB, автономный режим' },
    { title: 'VR-шлем + ПК комплект', price: '95 000 ₽', specs: 'Профессиональная конфигурация' },
  ];

  const requirements = [
    {
      icon: 'FileText',
      title: 'Приказ о назначении ответственного',
      description: 'Издать приказ «О назначении ответственного за пожарную безопасность и порядке проведения и содержания противопожарных инструктажей»',
      template: true
    },
    {
      icon: 'FileSignature',
      title: 'Дополнительное соглашение',
      description: 'Для дистанционного инструктажа внести изменения в трудовой договор через дополнительное соглашение (п.4 Приказа МЧС России №1120)',
      template: false
    },
    {
      icon: 'BookOpen',
      title: 'Программы инструктажей',
      description: 'Разработать программы проведения противопожарных инструктажей для каждого вида',
      template: true
    },
    {
      icon: 'Headphones',
      title: 'VR-оборудование',
      description: 'Для практической части в виртуальной среде. Два варианта: с подключением к ПК или автономный режим',
      template: false
    },
  ];

  const faqItems = [
    {
      question: 'Что будет за отсутствие проведения инструктажей?',
      answer: 'Согласно КоАП РФ статья 20.4, за нарушение требований пожарной безопасности предусмотрены штрафы: для должностных лиц — от 15 000 до 30 000 ₽, для организаций — от 200 000 до 400 000 ₽. При повторном нарушении штрафы увеличиваются, возможна приостановка деятельности.'
    },
    {
      question: 'Как происходит дистанционное обучение?',
      answer: 'Дистанционное обучение проводится через нашу платформу с использованием VR-симуляций. Работник получает доступ к личному кабинету, проходит теоретическую часть онлайн и практическую часть в VR-шлеме. После успешной сдачи экзамена данные автоматически заносятся в электронный журнал.'
    },
    {
      question: 'Признаются ли электронные журналы при проверках?',
      answer: 'Да, электронные журналы учета инструктажей полностью соответствуют требованиям законодательства при условии наличия электронных подписей. Наша система обеспечивает хранение всех записей с ЭЦП в соответствии с требованиями МЧС.'
    },
    {
      question: 'Нужно ли покупать VR-оборудование?',
      answer: 'Вы можете выбрать удобный вариант: приобрести оборудование в собственность, взять в аренду или проводить инструктажи в нашем учебном центре. Для организаций с большим штатом выгоднее приобрести собственное оборудование.'
    },
    {
      question: 'Какие документы получают прошедшие инструктаж?',
      answer: 'После прохождения инструктажа данные автоматически заносятся в электронный журнал с электронными подписями инструктируемого и инструктирующего. При необходимости можно выгрузить выписку из журнала или сертификат о прохождении.'
    },
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

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium transition-colors hover:text-primary">
              Главная
            </button>
            <button onClick={() => scrollToSection('project')} className="text-sm font-medium transition-colors hover:text-primary">
              О проекте
            </button>
            <button onClick={() => scrollToSection('briefings')} className="text-sm font-medium transition-colors hover:text-primary">
              Инструктажи
            </button>
            <button onClick={() => scrollToSection('requirements')} className="text-sm font-medium transition-colors hover:text-primary">
              Требования
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-medium transition-colors hover:text-primary">
              Цены
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium transition-colors hover:text-primary">
              Прочее
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <Button variant="outline" size="sm" onClick={() => scrollToSection('cabinet')}>
                <Icon name="User" size={16} className="mr-2" />
                <span className="hidden sm:inline">Кабинет</span>
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    <span className="hidden sm:inline">Войти</span>
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
                    <p className="text-sm text-center text-muted-foreground">
                      Нет аккаунта? <button className="text-primary hover:underline">Зарегистрироваться</button>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Главная
                  </button>
                  <button onClick={() => scrollToSection('project')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    О проекте
                  </button>
                  <button onClick={() => scrollToSection('briefings')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Инструктажи
                  </button>
                  <button onClick={() => scrollToSection('requirements')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Требования
                  </button>
                  <button onClick={() => scrollToSection('prices')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Цены
                  </button>
                  <button onClick={() => scrollToSection('faq')} className="text-lg font-medium transition-colors hover:text-primary text-left">
                    Прочее
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
                Современная платформа обучения
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Противопожарные инструктажи нового поколения
              </h1>
              <p className="text-xl text-muted-foreground">
                Платформа для проведения противопожарных инструктажей с VR-симуляциями и электронным журналом учета. Полное соответствие требованиям МЧС России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('project')} className="gap-2">
                  <Icon name="Rocket" size={20} />
                  Узнать о платформе
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="project" className="py-20 bg-muted/50 relative overflow-hidden">
          <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10 hidden lg:block">
            <img 
              src="https://cdn.poehali.dev/projects/146eec8b-5817-4b75-b362-e87d0e9e1e0e/files/3f4e2426-bcbd-4a24-8e58-8bb7134692e6.jpg" 
              alt="" 
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">О проекте</h2>
              <p className="text-lg text-muted-foreground">
                Инновационные решения для эффективного обучения пожарной безопасности
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name="Headphones" size={28} className="text-primary" />
                    </div>
                    <CardTitle>VR-симуляции</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Уникальная технология виртуальной реальности для практической отработки действий при пожаре
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>Реалистичные сценарии чрезвычайных ситуаций</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>Безопасная среда для отработки навыков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>Повышение усвояемости материала до 85%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>Автономный режим или подключение к ПК</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Icon name="FileText" size={28} className="text-secondary" />
                    </div>
                    <CardTitle>Электронный журнал</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Современная система учета с электронными подписями, полностью соответствующая требованиям МЧС
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-0.5 shrink-0" />
                      <span>Автоматическое внесение записей об инструктажах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-0.5 shrink-0" />
                      <span>Электронные подписи инструктируемого и инструктирующего</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-0.5 shrink-0" />
                      <span>Выгрузка журнала в любой момент времени</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-0.5 shrink-0" />
                      <span>Облачное хранение с защитой от потери данных</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="briefings" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Виды инструктажей</h2>
              <p className="text-lg text-muted-foreground">
                Полный перечень противопожарных инструктажей согласно требованиям МЧС России
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {briefings.map((briefing) => (
                <Card key={briefing.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant={briefing.type === 'Обязательный' ? 'default' : 'secondary'}>
                        {briefing.type}
                      </Badge>
                      <span className="text-2xl font-bold text-primary">{briefing.price}</span>
                    </div>
                    <CardTitle className="text-lg">{briefing.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>{briefing.duration}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Для кого:</span>
                        <p className="text-muted-foreground">{briefing.audience}</p>
                      </div>
                      <div>
                        <span className="font-medium">Периодичность:</span>
                        <p className="text-muted-foreground">{briefing.frequency}</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 border-destructive/50 bg-destructive/5">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" size={24} className="text-destructive mt-1" />
                  <div>
                    <CardTitle className="text-destructive">Ответственность за отсутствие инструктажей</CardTitle>
                    <CardDescription className="mt-2">
                      Согласно КоАП РФ статья 20.4 за нарушение требований пожарной безопасности:
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background">
                    <h4 className="font-semibold mb-2">Должностные лица</h4>
                    <p className="text-2xl font-bold text-destructive mb-1">15 000 - 30 000 ₽</p>
                    <p className="text-sm text-muted-foreground">При повторном нарушении: дисквалификация до 3 лет</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background">
                    <h4 className="font-semibold mb-2">Юридические лица</h4>
                    <p className="text-2xl font-bold text-destructive mb-1">200 000 - 400 000 ₽</p>
                    <p className="text-sm text-muted-foreground">При повторном нарушении: приостановка деятельности до 90 суток</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="requirements" className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Требования к проведению</h2>
              <p className="text-lg text-muted-foreground">
                Что необходимо для организации противопожарных инструктажей
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {requirements.map((req, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <Icon name={req.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{req.title}</CardTitle>
                        <CardDescription className="text-base">{req.description}</CardDescription>
                        {req.template && (
                          <Badge variant="outline" className="mt-3">
                            <Icon name="Download" size={12} className="mr-1" />
                            Шаблон в личном кабинете
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="mt-8 max-w-5xl mx-auto bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={20} />
                  Важная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  • Все шаблоны документов (приказы, программы инструктажей) доступны в личном кабинете после регистрации
                </p>
                <p>
                  • Для дистанционного проведения инструктажей необходимо дополнительное соглашение к трудовому договору (п.4 Приказа МЧС России №1120)
                </p>
                <p>
                  • VR-оборудование можно приобрести, взять в аренду или проводить обучение в нашем учебном центре
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="prices" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены</h2>
              <p className="text-lg text-muted-foreground">
                Прозрачные тарифы на услуги и оборудование
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <Icon name="Users" size={32} className="text-primary mb-3" />
                  <CardTitle>Базовый</CardTitle>
                  <CardDescription>Для малого бизнеса</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">2 500 ₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>До 20 сотрудников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Электронный журнал учета</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Шаблоны документов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Уведомления о сроках</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Выбрать план</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-primary">
                <Badge className="absolute top-4 right-4">Популярный</Badge>
                <CardHeader>
                  <Icon name="Building2" size={32} className="text-primary mb-3" />
                  <CardTitle>Профессиональный</CardTitle>
                  <CardDescription>Для средних организаций</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">5 900 ₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>До 100 сотрудников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Всё из тарифа "Базовый"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>VR-симуляции (5 сценариев)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Приоритетная поддержка</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Выбрать план</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <Icon name="Briefcase" size={32} className="text-primary mb-3" />
                  <CardTitle>Корпоративный</CardTitle>
                  <CardDescription>Для крупных компаний</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">По запросу</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Неограниченно сотрудников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Всё из тарифа "Профессиональный"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Индивидуальные VR-сценарии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                      <span>Персональный менеджер</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Связаться</Button>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">VR-оборудование</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {vrPackages.map((pkg, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Icon name="Headphones" size={24} className="text-primary mb-2" />
                        <CardTitle className="text-lg">{pkg.title}</CardTitle>
                        <CardDescription>{pkg.specs}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                        <Button className="w-full" variant="outline">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Купить
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CreditCard" size={20} />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Для юридических лиц</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Безналичный расчет по счету</li>
                        <li>• Работаем с НДС</li>
                        <li>• Отсрочка платежа до 14 дней</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Для физических лиц и ИП</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Банковские карты (Visa, MasterCard, МИР)</li>
                        <li>• Электронные кошельки</li>
                        <li>• СБП (Система быстрых платежей)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Прочее</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на часто задаваемые вопросы
              </p>
            </div>

            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="mt-12 max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Не нашли ответ на вопрос?</CardTitle>
                <CardDescription>Свяжитесь с нами, и мы с радостью вам поможем</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => scrollToSection('contacts')} className="gap-2">
                    <Icon name="MessageCircle" size={16} />
                    Написать нам
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Icon name="Phone" size={16} />
                    Позвонить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты и реквизиты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Building2" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">ООО "ПожБезопасность"</div>
                        <div className="text-sm text-muted-foreground">Центр обучения пожарной безопасности</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">+7 (495) 123-45-67</div>
                        <div className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">info@pozhbezopasnost.ru</div>
                        <div className="text-sm text-muted-foreground">Ответим в течение 1 часа</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">г. Москва, ул. Примерная, д. 1</div>
                        <div className="text-sm text-muted-foreground">Офис 101, БЦ "Огонь"</div>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Telegram
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Phone" size={16} className="mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Реквизиты</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Полное наименование:</span>
                      <span className="col-span-2 font-medium">Общество с ограниченной ответственностью "ПожБезопасность"</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Сокращенное:</span>
                      <span className="col-span-2 font-medium">ООО "ПожБезопасность"</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Юридический адрес:</span>
                      <span className="col-span-2 font-medium">123456, г. Москва, ул. Примерная, д. 1, офис 101</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">ОГРН:</span>
                      <span className="col-span-2 font-medium">1234567890123</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">ИНН:</span>
                      <span className="col-span-2 font-medium">1234567890</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">КПП:</span>
                      <span className="col-span-2 font-medium">123456789</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">ОКПО:</span>
                      <span className="col-span-2 font-medium">12345678</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">ОКВЭД:</span>
                      <span className="col-span-2 font-medium">85.41 (Образование дополнительное детей и взрослых)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t">
                      <span className="text-muted-foreground">Расчетный счет:</span>
                      <span className="col-span-2 font-medium">40702810400000001234</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Банк:</span>
                      <span className="col-span-2 font-medium">ПАО "Сбербанк"</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">БИК:</span>
                      <span className="col-span-2 font-medium">044525225</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Корр. счет:</span>
                      <span className="col-span-2 font-medium">30101810400000000225</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Оставьте заявку, и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" placeholder="example@mail.ru" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Организация</Label>
                      <Input id="company" placeholder="ООО 'Название'" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea id="message" placeholder="Расскажите, что вас интересует..." rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {isLoggedIn && (
          <section id="cabinet" className="py-20 bg-muted/50">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Личный кабинет</h2>
                    <p className="text-muted-foreground">Управление инструктажами и документами</p>
                  </div>
                  <Button onClick={() => setIsLoggedIn(false)} variant="outline">
                    <Icon name="LogOut" size={16} className="mr-2" />
                    Выйти
                  </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Всего сотрудников</CardTitle>
                      <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45</div>
                      <p className="text-xs text-muted-foreground">+3 за последний месяц</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Пройдено инструктажей</CardTitle>
                      <Icon name="CheckCircle" className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">127</div>
                      <p className="text-xs text-muted-foreground">В этом году</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Требуют внимания</CardTitle>
                      <Icon name="AlertCircle" className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">Истекает срок инструктажа</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Электронный журнал учета</CardTitle>
                        <CardDescription>Записи о проведенных противопожарных инструктажах</CardDescription>
                      </div>
                      <Button>
                        <Icon name="Download" size={16} className="mr-2" />
                        Выгрузить с ЭЦП
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <table className="w-full text-sm">
                          <thead className="bg-muted/50">
                            <tr>
                              <th className="p-3 text-left font-medium">Дата</th>
                              <th className="p-3 text-left font-medium">Сотрудник</th>
                              <th className="p-3 text-left font-medium">Вид инструктажа</th>
                              <th className="p-3 text-left font-medium">Инструктор</th>
                              <th className="p-3 text-left font-medium">Статус</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="p-3">15.12.2025</td>
                              <td className="p-3">Иванов И.И.</td>
                              <td className="p-3">Вводный</td>
                              <td className="p-3">Петров П.П.</td>
                              <td className="p-3">
                                <Badge variant="outline" className="gap-1">
                                  <Icon name="CheckCircle" size={12} />
                                  Подписан
                                </Badge>
                              </td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3">14.12.2025</td>
                              <td className="p-3">Сидорова А.В.</td>
                              <td className="p-3">Первичный</td>
                              <td className="p-3">Петров П.П.</td>
                              <td className="p-3">
                                <Badge variant="outline" className="gap-1">
                                  <Icon name="CheckCircle" size={12} />
                                  Подписан
                                </Badge>
                              </td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3">13.12.2025</td>
                              <td className="p-3">Козлов М.С.</td>
                              <td className="p-3">Повторный</td>
                              <td className="p-3">Петров П.П.</td>
                              <td className="p-3">
                                <Badge variant="secondary" className="gap-1">
                                  <Icon name="Clock" size={12} />
                                  Ожидает подписи
                                </Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>Показано 3 из 127 записей</span>
                        <Button variant="outline" size="sm">
                          Показать все
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="FileText" size={20} />
                        Шаблоны документов
                      </CardTitle>
                      <CardDescription>Готовые шаблоны для вашей организации</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-between">
                          <span>Приказ о назначении ответственного</span>
                          <Icon name="Download" size={16} />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                          <span>Программы инструктажей</span>
                          <Icon name="Download" size={16} />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                          <span>Дополнительное соглашение</span>
                          <Icon name="Download" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Settings" size={20} />
                        Настройки организации
                      </CardTitle>
                      <CardDescription>Данные вашей организации</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="text-sm font-medium mb-1">Наименование</div>
                        <div className="text-sm text-muted-foreground">ООО "Пример"</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">ИНН</div>
                        <div className="text-sm text-muted-foreground">1234567890</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">Ответственный за ПБ</div>
                        <div className="text-sm text-muted-foreground">Петров Петр Петрович</div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Icon name="Edit" size={16} className="mr-2" />
                        Редактировать
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                  <Icon name="Flame" size={24} />
                </div>
                <span className="font-bold text-lg">ПожБезопасность</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современная платформа для проведения противопожарных инструктажей с VR-технологиями
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-foreground text-left">
                  Главная
                </button>
                <button onClick={() => scrollToSection('project')} className="text-muted-foreground hover:text-foreground text-left">
                  О проекте
                </button>
                <button onClick={() => scrollToSection('briefings')} className="text-muted-foreground hover:text-foreground text-left">
                  Инструктажи
                </button>
                <button onClick={() => scrollToSection('prices')} className="text-muted-foreground hover:text-foreground text-left">
                  Цены
                </button>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground">VR-симуляции</a>
                <a href="#" className="hover:text-foreground">Электронный журнал</a>
                <a href="#" className="hover:text-foreground">Шаблоны документов</a>
                <a href="#" className="hover:text-foreground">VR-оборудование</a>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div>+7 (495) 123-45-67</div>
                <div>info@pozhbezopasnost.ru</div>
                <div className="flex gap-2 mt-2">
                  <Button size="icon" variant="ghost">
                    <Icon name="MessageCircle" size={18} />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Icon name="Phone" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 ООО "ПожБезопасность". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
