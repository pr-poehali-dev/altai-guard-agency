import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Telegram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-security text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-security-accent" />
              <span className="text-xl font-bold text-white">Алтайские Медведи</span>
            </div>
            <p className="mb-4">
              Профессиональное охранное агентство с 6-летним опытом работы на территории Алтайского края.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-security-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-security-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-security-accent transition-colors">
                <Telegram size={20} />
              </a>
            </div>
          </div>
          
          {/* Услуги */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-security-accent transition-colors">
                  Охрана объектов
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-security-accent transition-colors">
                  Сопровождение кортежей
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-security-accent transition-colors">
                  Группы быстрого реагирования
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-security-accent transition-colors">
                  Работа с СОБР
                </a>
              </li>
            </ul>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-security-accent transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-security-accent transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-security-accent transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-security-accent transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-security-accent mr-3" />
                <span>+7 (385) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-security-accent mr-3" />
                <span>info@altay-bears.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-security-accent mr-3 mt-1" />
                <span>г. Барнаул, ул. Сибирская, 35</span>
              </li>
              <li className="flex items-center text-security-accent font-bold mt-4">
                <Phone className="h-5 w-5 mr-3" />
                <span>Экстренная связь: +7 (385) 911-01-01</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p>© {currentYear} Охранное агентство «Алтайские Медведи». Все права защищены.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-security-accent transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-security-accent transition-colors">
              Лицензии
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
