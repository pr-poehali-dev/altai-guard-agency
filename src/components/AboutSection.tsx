import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Изображение */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551902600-71189ccba6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Охранное агентство Алтайские Медведи" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Декоративный элемент */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-security-accent rounded-lg opacity-90 -z-10"></div>
          </div>
          
          {/* Информация */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-security">О компании</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              «Алтайские Медведи» — это охранное агентство с более чем 6-летним опытом работы 
              в сфере обеспечения безопасности. Мы специализируемся на охране объектов различной 
              сложности и сопровождении кортежей по всему Алтайскому краю.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Наша команда состоит из профессионалов с опытом службы в силовых структурах. 
              Мы тесно сотрудничаем с группами быстрого реагирования (ГБР) и специальными 
              отрядами быстрого реагирования (СОБР) для обеспечения максимального уровня 
              защиты наших клиентов.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-security-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Лицензированная деятельность с соблюдением всех правовых норм</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-security-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Высококвалифицированные сотрудники с боевым опытом</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-security-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Современное техническое оснащение и вооружение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
