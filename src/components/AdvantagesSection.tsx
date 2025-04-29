import { Award, ShieldCheck, Clock, UserCheck, Zap, Target } from 'lucide-react';

const advantages = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-security-accent" />,
    title: 'Надежная защита',
    description: 'Обеспечиваем высокий уровень безопасности вашего имущества и персонала'
  },
  {
    icon: <Clock className="h-12 w-12 text-security-accent" />,
    title: 'Оперативность',
    description: 'Быстрое реагирование на любые угрозы безопасности в кратчайшие сроки'
  },
  {
    icon: <Award className="h-12 w-12 text-security-accent" />,
    title: 'Профессионализм',
    description: 'Команда опытных сотрудников с профильным образованием и подготовкой'
  },
  {
    icon: <UserCheck className="h-12 w-12 text-security-accent" />,
    title: 'Индивидуальный подход',
    description: 'Разрабатываем персональные решения под потребности каждого клиента'
  },
  {
    icon: <Zap className="h-12 w-12 text-security-accent" />,
    title: 'Современное оборудование',
    description: 'Используем передовые технические средства для обеспечения безопасности'
  },
  {
    icon: <Target className="h-12 w-12 text-security-accent" />,
    title: 'Территориальный охват',
    description: 'Работаем на всей территории Алтайского края, включая отдаленные районы'
  }
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="section bg-security text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Почему клиенты выбирают охранное агентство «Алтайские Медведи»
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="bg-security-light p-6 rounded-lg flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
