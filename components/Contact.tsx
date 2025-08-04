"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["calle", "Chuy"],
    },
    {
      icon: Phone,
      title: "Celular",
      details: ["099 483 830", "Manda mensaje cuando quieras"],
    },
    {
      icon: Clock,
      title: "Horarios",
      details: [
        "Lunes - Viernes: 9AM-8PM",
        "Sábados: 8AM-6PM",
        "Domingos: 10AM-5PM",
      ],
    },
  ];

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Agenda un horario
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* WhatsApp CTA */}
          <div className="animate-slide-up">
            <Card className="bg-card/50 border-border/50 shadow-elegant backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.245" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-3xl font-bold">
                    Agenda por Whatsapp
                  </h3>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full bg-green-500 py-6 text-lg hover:bg-green-600"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5551234567?text=Hi! I would like to book an appointment at Komodo Barber.",
                      "_blank",
                    )
                  }
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.245" />
                  </svg>
                  Chat on WhatsApp
                </Button>

                <p className="text-muted-foreground mt-4 text-sm">
                  Disponible en horario de trabajo
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in space-y-8">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="group hover:shadow-elegant bg-card/30 border-border/50 animate-slide-up backdrop-blur-sm transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors duration-300">
                      <info.icon className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
