import { Shield, Building, Car, Users, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Building className="h-10 w-10 text-security-accent" />,
    title: 'Охрана объектов',
    description: 'Комплексная защита объектов любой сложности с использованием современных технических средств и подготовленного персонала.'
  },
  {
    icon: <Car className="h-10 w-10 text-security-accent" />,
    title: 'Сопровождение кортежей',
    description: 'Безопасное сопровождение транспортных средств с ценными грузами по всей территории Алтайского края.'
  },
  {
    icon: <Shield className="h-10 w-10 text-security-accent" />,
    title: 'Группы быстрого реагирования',
    description: 'Оперативное реагирование наших ГБР на тревожные сигналы. Среднее время прибытия — 7 минут.'
  },
  {
    icon: <Users className="h-10 w-10 text-security-accent" />,
    title: 'Работа с СОБР',
    description: 'Тесное сотрудничество со специальными подразделениями для обеспечения безопасности в особо сложных ситуациях.'
  },
  {
    icon: <Clock className="h-10 w-10 text-security-accent" />,
    title: 'Круглосуточная охрана',
    description: 'Обеспечиваем постоянную защиту ваших объектов 24 часа в сутки, 7 дней в неделю без перерывов.'
  },
  {
    icon: <MapPin className="h-10 w-10 text-security-accent" />,
    title: 'Охрана по всему Алтайскому краю',
    description: 'Предоставляем услуги безопасности на всей территории Алтайского края, включая отдаленные районы.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-security">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Профессиональные решения для защиты вашего бизнеса и личной безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
