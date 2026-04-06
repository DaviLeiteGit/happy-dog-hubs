import { motion } from "framer-motion";
import { Award, Heart, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "500+", label: "Cães Treinados" },
  { icon: Heart, value: "100%", label: "Reforço Positivo" },
  { icon: Clock, value: "10+", label: "Anos de Experiência" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Nosso método é baseado em{" "}
              <span className="italic">respeito e ciência</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Utilizamos exclusivamente técnicas de reforço positivo, comprovadas
              cientificamente como as mais eficazes e humanas para o adestramento
              canino. Cada cão é único, e nossos programas são personalizados
              para atender às necessidades específicas do seu pet e da sua
              família.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nosso compromisso é construir uma relação de confiança entre você e
              seu cão, promovendo bem-estar e harmonia no lar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 p-6 rounded-2xl bg-background"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-body text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
