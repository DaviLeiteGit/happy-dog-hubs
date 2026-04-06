import { motion } from "framer-motion";
import { Dog, Baby, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Filhotes",
    description: "Socialização e comandos básicos para filhotes a partir de 3 meses. A base para um cão equilibrado.",
    price: "A partir de R$ 150",
  },
  {
    icon: Dog,
    title: "Obediência Básica",
    description: "Senta, deita, fica, junto e recall. Comandos essenciais para o dia a dia com seu cão.",
    price: "A partir de R$ 200",
  },
  {
    icon: Shield,
    title: "Comportamental",
    description: "Tratamento de medos, agressividade, ansiedade de separação e outros problemas comportamentais.",
    price: "A partir de R$ 250",
  },
  {
    icon: Users,
    title: "Aulas em Grupo",
    description: "Socialização e treinamento em grupo com até 5 cães. Ótimo para socialização e economia.",
    price: "A partir de R$ 100",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
            Soluções para cada <span className="italic">necessidade</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group p-8 rounded-2xl bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <service.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground mb-5 transition-colors" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground group-hover:text-primary-foreground/80 mb-5 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
              <span className="font-body font-semibold text-accent group-hover:text-primary-foreground transition-colors">
                {service.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
