import { Button } from "@/components/ui/button";
import heroImage from "@/public/fondoK.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage.src})`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl lg:text-8xl">
            KOMODO
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button size="lg" variant="default" className="px-12 py-6 text-lg">
              Reservar ahora
            </Button>
            <Button variant="outline" size="lg" className="px-12 py-6 text-lg">
              Ver galería
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <div className="border-primary/50 flex h-10 w-6 justify-center rounded-full border-2">
          <div className="bg-primary mt-2 h-3 w-1 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
