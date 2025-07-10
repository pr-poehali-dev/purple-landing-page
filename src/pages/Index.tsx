import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Compass" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">КБ Дизайн</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Связаться</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Конструкторское бюро
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Создаем современную мебель, торговое оборудование и рекламные
            вывески с индивидуальным подходом к каждому проекту
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-3"
            >
              <Icon name="Rocket" className="mr-2 h-5 w-5" />
              Начать проект
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши услуги
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Armchair" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Мебель</CardTitle>
                <CardDescription>
                  Разработка и производство современной мебели для дома и офиса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Офисная мебель
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Домашняя мебель
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Встроенные системы
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Store" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Торговое оборудование
                </CardTitle>
                <CardDescription>
                  Профессиональное оборудование для розничной торговли
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Торговые стеллажи
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Витрины и прилавки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Системы хранения
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Megaphone" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Рекламные вывески
                </CardTitle>
                <CardDescription>
                  Создание эффективных рекламных решений для вашего бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Световые вывески
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Объемные буквы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 mr-2 text-primary" />
                    Брендинг фасадов
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наше портфолио
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/img/aa07784f-674a-4e55-9daa-f8ed63c03e6d.jpg"
                alt="Современная мебель"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold mb-1">
                    Современная мебель
                  </h4>
                  <p className="text-sm text-white/80">
                    Офисная мебель премиум класса
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/img/2e55cbd4-6043-44c5-8466-198eaaefc873.jpg"
                alt="Торговое оборудование"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold mb-1">
                    Торговое оборудование
                  </h4>
                  <p className="text-sm text-white/80">
                    Системы для розничной торговли
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/img/2efec83c-f65f-4154-bf97-862cac35921d.jpg"
                alt="Рекламные вывески"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold mb-1">
                    Рекламные вывески
                  </h4>
                  <p className="text-sm text-white/80">
                    Эффективные рекламные решения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                О нашем бюро
              </h3>
              <p className="text-muted-foreground mb-6">
                Мы — команда опытных конструкторов и дизайнеров,
                специализирующихся на создании функциональных и эстетичных
                решений для бизнеса и дома.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="h-5 w-5 text-primary" />
                  <span>15+ лет опыта в проектировании</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="h-5 w-5 text-primary" />
                  <span>Команда из 12 специалистов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span>200+ успешных проектов</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                <Icon
                  name="Lightbulb"
                  className="h-8 w-8 text-primary mx-auto mb-3"
                />
                <h4 className="font-semibold mb-2">Инновации</h4>
                <p className="text-sm text-muted-foreground">
                  Используем современные технологии
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                <Icon
                  name="Zap"
                  className="h-8 w-8 text-primary mx-auto mb-3"
                />
                <h4 className="font-semibold mb-2">Скорость</h4>
                <p className="text-sm text-muted-foreground">
                  Быстрая реализация проектов
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                <Icon
                  name="Shield"
                  className="h-8 w-8 text-primary mx-auto mb-3"
                />
                <h4 className="font-semibold mb-2">Качество</h4>
                <p className="text-sm text-muted-foreground">
                  Гарантия на все работы
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                <Icon
                  name="Heart"
                  className="h-8 w-8 text-primary mx-auto mb-3"
                />
                <h4 className="font-semibold mb-2">Подход</h4>
                <p className="text-sm text-muted-foreground">
                  Индивидуальный для каждого
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Свяжитесь с нами
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">
                Готовы обсудить ваш проект?
              </h4>
              <p className="text-muted-foreground mb-8">
                Свяжитесь с нами любым удобным способом, и мы обсудим все детали
                вашего проекта.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <span>info@kb-design.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 rounded-lg p-8">
              <h4 className="text-lg font-semibold mb-4">Оставьте заявку</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Описание проекта
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary/20"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-accent/10 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Compass" className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">КБ Дизайн</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Конструкторское бюро «КБ Дизайн». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
