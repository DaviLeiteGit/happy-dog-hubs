import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import img1 from "@/assets/training-1.png.asset.json";
import img2 from "@/assets/training-2.png.asset.json";
import img3 from "@/assets/training-3.png.asset.json";

const gallery = [
  { src: img1.url, alt: "Sessão de adestramento em parque de Brasília" },
  { src: img2.url, alt: "Adestrador com border collie em passeio" },
  { src: img3.url, alt: "Adestrador com três cães durante treino" },
];

const whatsappUrl =
  "https://wa.me/5561982226596?text=Ol%C3%A1%21%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita.";

const Purpose = () => {
  return (
    <section id="propósito" className="py-24 bg-background">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">
            Equilíbrio Dog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Muito mais que adestrar:{" "}
            <span className="italic">seu cão e você em total sintonia.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {gallery.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="overflow-hidden rounded-2xl aspect-[4/5] bg-secondary"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 font-body text-foreground/85 leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Meu propósito
            </h3>
            <p>
              Com mais de 10 anos de experiência, transformo a convivência entre
              tutores e cães em Brasília. Meu trabalho une paixão e técnica para
              promover harmonia no seu lar.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Método baseado em ciência
            </h3>
            <p>
              Utilizo a Análise Comportamental e o Reforço Positivo. Sem métodos
              aversivos, foco em um aprendizado eficaz, humano e duradouro.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Eu não treino apenas o cão, treino você.
            </h3>
            <p>
              O segredo do equilíbrio é a comunicação. Ensino você a ler os
              sinais do seu melhor amigo. Quando vocês se entendem, os problemas
              desaparecem.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-2xl bg-secondary">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Minha formação
            </h3>
            <ul className="space-y-2">
              <li>✅ Adestramento e Comportamento Canino Avançado.</li>
              <li>✅ Especialista em expressão comportamental.</li>
              <li>✅ Ciência do comportamento animal.</li>
            </ul>
            <p className="mt-4 text-muted-foreground text-sm">
              (Veja meus resultados e certificados no destaque do meu Instagram{" "}
              <a
                href="https://instagram.com/equilibriodogbsb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                @equilibriodogbsb
              </a>
              ).
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Quero agendar uma avaliação gratuita!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
