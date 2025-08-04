import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Zap, Sparkles, Crown } from "lucide-react";
import haircutImage from "@/assets/haircut-service.jpg";
import beardImage from "@/assets/beard-service.jpg";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Cortes de pelo",
      description:
        "Cortes hechos a mano, adaptados a tu estilo y forma de rostro",
      price: "$300",
      image: haircutImage,
      features: [
        "Consulta personalizada",
        "Lavado y peinado",
        "Toques finales",
      ],
    },
    {
      icon: Zap,
      title: "Corte de barba",
      description:
        "Perfilado experto, modelado y servicio tradicional con toalla caliente",
      price: "$300",
      image: beardImage,
      features: [
        "Tratamiento con toalla caliente",
        "Perfilado preciso",
        "Acabado con aceite para barba",
      ],
    },
    {
      icon: Sparkles,
      title: "Estilizado Premium",
      description:
        "Servicio completo con productos y técnicas de primera calidad",
      price: "$300",
      image: haircutImage,
      features: [
        "Productos profesionales",
        "Técnicas avanzadas",
        "Consulta de estilo",
      ],
    },
    {
      icon: Crown,
      title: "Corte + barba",
      description:
        "La experiencia definitiva que combina todos nuestros servicios",
      price: "$300",
      image: beardImage,
      features: [
        "Corte y peinado",
        "Cuidado de barba",
        "Acabado con toalla caliente",
      ],
    },
  ];

  return (
    <section id="services" className="bg-gradient-hero py-24">
      <div className="container mx-auto to-red-950 px-6">
        <div className="animate-fade-in mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Servicios</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Cada servicio se hace con precisión y cuidado, para que te vayas con
            el mejor look y sintiéndote bien.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-elegant border-border/50 bg-card/50 animate-slide-up overflow-hidden backdrop-blur-sm transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  fill={true}
                  src={service.image.src}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent" />
                <div className="bg-primary/90 absolute top-4 left-4 rounded-lg p-3 backdrop-blur-sm">
                  <service.icon className="text-primary-foreground h-6 w-6" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <span className="text-primary text-lg font-semibold">
                    {service.price}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-foreground/80 flex items-center text-sm"
                    >
                      <div className="bg-primary mr-3 h-1.5 w-1.5 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
