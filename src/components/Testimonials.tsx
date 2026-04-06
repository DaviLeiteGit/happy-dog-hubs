import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    pet: "Tutora do Thor (Labrador)",
    text: "Meu Thor era super agitado e puxava muito na guia. Depois de 8 aulas, a diferença é incrível! Passeios se tornaram um prazer.",
  },
  {
    name: "Carlos Mendes",
    pet: "Tutor da Luna (Border Collie)",
    text: "A Luna tinha ansiedade de separação severa. O trabalho comportamental foi transformador. Hoje ela fica tranquila em casa.",
  },
  {
    name: "Mariana Costa",
    pet: "Tutora do Bob (SRD)",
    text: "Adotamos o Bob e ele tinha muito medo de tudo. Com paciência e técnica, ele se tornou um cão confiante e feliz!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
            O que dizem nossos <span className="italic">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-8 rounded-2xl bg-card"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="font-body text-sm text-muted-foreground">
                  {t.pet}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
