import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Pronto para transformar
              <br />
              <span className="italic">a vida do seu cão?</span>
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Entre em contato e agende uma avaliação gratuita. Vamos entender
              as necessidades do seu pet e criar um plano personalizado.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, text: "(61) 98222-6596", href: "tel:+5561982226596" },
                { icon: MessageCircle, text: "Fale pelo WhatsApp", href: "https://wa.me/5561982226596?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20adestramento." },
                { icon: Instagram, text: "@equilibriodogbsb", href: "https://instagram.com/equilibriodogbsb" },
                { icon: MapPin, text: "Brasília, DF - Atendimento domiciliar" },
                { icon: Clock, text: "Seg a Sáb: 8h às 19h" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 font-body">
                  <item.icon className="w-5 h-5 text-primary-foreground/60" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors underline-offset-2 hover:underline">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-primary-foreground/90">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Agende sua Avaliação</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-5 py-3.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full px-5 py-3.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Nome e raça do cão"
                className="w-full px-5 py-3.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
              <textarea
                placeholder="Conte-nos sobre o comportamento do seu cão"
                rows={3}
                className="w-full px-5 py-3.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
              />
              <a
                href="https://wa.me/5561982226596?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity text-center"
              >
                Enviar pelo WhatsApp
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
