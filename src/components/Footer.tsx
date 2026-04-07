const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground/60">
      <div className="container flex flex-col items-center gap-3 font-body text-sm">
        <div className="flex gap-6">
          <a href="https://wa.me/5561982226596" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">WhatsApp</a>
          <a href="https://instagram.com/equilibriodogbsb" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Instagram</a>
        </div>
        <p>© 2026 EquilibrioDogBsb. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
