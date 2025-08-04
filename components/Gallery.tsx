import haircutImage from "@/assets/haircut-service.jpg";
import beardImage from "@/assets/beard-service.jpg";
import toolsImage from "@/assets/barber-tools.jpg";
import interiorImage from "@/assets/barber-shop-interior.jpg";
import Image from "next/image";

const Gallery = () => {
  const galleryItems = [
    {
      image: haircutImage,
      title: "Cortes de Precisión",
      category: "Cortes de Pelo",
    },
    {
      image: beardImage,
      title: "Arte en Barbas",
      category: "Cuidado de Barba",
    },
    {
      image: toolsImage,
      title: "Herramientas Profesionales",
      category: "Equipamiento",
    },
    {
      image: interiorImage,
      title: "Nuestro Espacio",
      category: "Ambiente",
    },
    {
      image: haircutImage,
      title: "Transformación de Estilo",
      category: "Antes y Después",
    },
    {
      image: beardImage,
      title: "Cuidado Clásico",
      category: "Tradicional",
    },
  ];

  return (
    <section id="gallery" className="bg-gradient-hero py-24">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Galería</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Mira algunos de los cortes, estilos y trabajos que hacemos en
            Komodo. Aquí vas a ver el resultado real de nuestra dedicación y
            experiencia, para que te inspires y veas que acá siempre vas a salir
            bien.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card shadow-elegant hover:shadow-glow animate-slide-up relative overflow-hidden rounded-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  fill={true}
                  src={item.image.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="from-background/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-6 bottom-6 left-6">
                  <div className="text-primary mb-1 text-sm font-medium">
                    {item.category}
                  </div>
                  <h3 className="text-foreground text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Category Badge */}
              <div className="bg-primary/90 text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="text-muted-foreground inline-flex items-center gap-2">
            <div className="bg-primary h-px w-8"></div>
            <span className="text-sm font-medium">
              Siguenos para más transformaciones
            </span>
            <div className="bg-primary h-px w-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
