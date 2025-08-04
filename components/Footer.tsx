import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-border/50 border-t py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="bg-gradient-primary mb-4 bg-clip-text text-3xl font-bold text-transparent">
              KOMODO
            </h3>
            {/* <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Where traditional craftsmanship meets modern style. Experience the finest 
              in men's grooming with our master barbers who treat every cut as an art form.
            </p> */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-card hover:bg-primary/10 group rounded-lg p-2 transition-colors duration-300"
              >
                <Instagram className="text-muted-foreground group-hover:text-primary h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-card hover:bg-primary/10 group rounded-lg p-2 transition-colors duration-300"
              >
                <Facebook className="text-muted-foreground group-hover:text-primary h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-card hover:bg-primary/10 group rounded-lg p-2 transition-colors duration-300"
              >
                <Twitter className="text-muted-foreground group-hover:text-primary h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Inicio",
                "Servicios",
                "Sobre nosotros",
                "Galería",
                "Contactanos",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground mb-4 font-semibold">Contact</h4>
            <div className="text-muted-foreground space-y-2">
              <p>direccion</p>
              <p>Chuy</p>
              <p className="mt-4">(555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border/50 mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © 2025 Barbería Komodo. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
