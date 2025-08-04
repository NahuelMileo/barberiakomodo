import { Button } from "@/components/ui/button";
import { Award, Clock, Users, Star } from "lucide-react";
import toolsImage from "@/assets/barber-tools.jpg";
import Image from "next/image";

const About = () => {
  const stats = [
    { icon: Award, value: "5+", label: "Años de experiencia" },
    { icon: Users, value: "500+", label: "Clientes felices" },
    { icon: Star, value: "4.9", label: "Puntuación" },
  ];

  return (
    <section id="about" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Cortes con experiencia
            </h2>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              En Komodo sé que un buen corte hace la diferencia. Con años de
              experiencia y técnicas clásicas, me aseguro de que te vayas
              contento y con un estilo que te quede bien
            </p>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Cada corte y afeitada la hacemos con dedicación y cuidado.
              Queremos que te sientas cómodo, como en casa, y que siempre
              quieras volver.
            </p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-fade-in text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-2 flex justify-center">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <stat.icon className="text-primary h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-primary text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="px-8">
              Meet Our Team
            </Button>
          </div>

          {/* Image */}
          <div className="animate-fade-in relative">
            <div className="relative h-[600px]">
              <Image
                fill={true}
                src={toolsImage.src}
                alt="Professional barber tools"
                className="shadow-elegant w-full rounded-2xl object-cover"
              />
              <div className="from-primary/20 absolute inset-0 rounded-2xl bg-gradient-to-tr to-transparent" />

              {/* Floating Elements */}
              <div className="bg-primary/20 absolute -top-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full backdrop-blur-sm">
                <Award className="text-primary h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
