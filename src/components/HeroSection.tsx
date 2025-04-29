import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-security py-20 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-security to-security-light opacity-90"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-security-accent rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-security-secondary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-security-accent" />
            <span className="text-xl font-bold text-security-accent">Охранное агентство</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            «Алтайские Медведи»
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Профессиональная охрана объектов и сопровождение кортежей. 
            Более 6 лет опыта работы с ГБР и СОБР по всему Алтайскому краю.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-security-accent hover:bg-security-secondary text-white text-lg px-8 py-6 rounded-md">
              Заказать охрану
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-md">
              <span>Узнать больше</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-security-light/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div>
              <div className="text-security-accent text-4xl font-bold">6+</div>
              <div className="text-gray-300">лет на рынке</div>
            </div>
            <div>
              <div className="text-security-accent text-4xl font-bold">24/7</div>
              <div className="text-gray-300">круглосуточная защита</div>
            </div>
            <div>
              <div className="text-security-accent text-4xl font-bold">100%</div>
              <div className="text-gray-300">гарантия безопасности</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
