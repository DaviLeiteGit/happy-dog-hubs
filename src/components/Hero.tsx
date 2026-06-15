import { motion } from "framer-motion";
import heroImg from "@/assets/hero-equilibrio.png";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Hero = () => {


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Adestrador profissional treinando um cão em um parque"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-[center_25%] scale-110"
        />

        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground font-body text-sm font-medium mb-6 backdrop-blur-sm">
            <img
              src="../favicon.png"
              alt="Logo"
              className="w-5 h-5 rounded-full object-cover"
            />
            <span>Adestramento Profissional</span>
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Transforme a vida
            <br />
            <span className="italic">do seu cão</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-10 max-w-lg leading-relaxed">
            Adestramento com técnicas modernas baseadas em reforço positivo.
            Resultados reais com respeito e carinho pelo seu melhor amigo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://instagram.com/equilibriodogbsb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
            >
              Siga no Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;