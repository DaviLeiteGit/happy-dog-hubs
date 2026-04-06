import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/20 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary-foreground font-display">
          🐾 CãoEducado
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/90 backdrop-blur-lg border-t border-primary-foreground/10 py-4">
          <div className="container flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 font-body py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm text-center"
            >
              Agendar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
