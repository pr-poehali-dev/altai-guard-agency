import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contacts" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-security">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для обсуждения ваших потребностей в безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная форма */}
          <div className="p-8 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-security">Оставить заявку</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-medium">Имя</label>
                  <Input id="name" placeholder="Введите ваше имя" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-medium">Телефон</label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-gray-700 font-medium">Интересующая услуга</label>
                <select 
                  id="service" 
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-security-accent"
                >
                  <option value="">Выберите услугу</option>
                  <option value="object">Охрана объектов</option>
                  <option value="escort">Сопровождение кортежей</option>
                  <option value="gbr">Группа быстрого реагирования</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 font-medium">Сообщение</label>
                <Textarea id="message" placeholder="Опишите ваш запрос" className="w-full min-h-[120px]" />
              </div>
              <Button className="w-full bg-security-accent hover:bg-security-secondary text-white">
                Отправить заявку
              </Button>
            </form>
          </div>
          
          {/* Контактная информация */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-security">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-security-accent mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Телефон</h4>
                    <p className="text-gray-700">+7 (385) 123-45-67</p>
                    <p className="text-gray-700">+7 (913) 987-65-43</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-security-accent mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-700">info@altay-bears.ru</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-security-accent mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Адрес</h4>
                    <p className="text-gray-700">г. Барнаул, ул. Сибирская, 35</p>
                    <p className="text-gray-600">Офис открыт: Пн-Пт, 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-security rounded-lg text-white">
              <h4 className="text-xl font-bold mb-4">Экстренная связь</h4>
              <p className="mb-4">Для срочных вопросов и экстренных ситуаций свяжитесь с нашей круглосуточной диспетчерской службой</p>
              <div className="text-2xl font-bold text-security-accent">+7 (385) 911-01-01</div>
              <p className="text-sm mt-2">Работаем 24/7, без выходных и праздников</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
