const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Татьяна Юрьевна</p>
          <p className="text-sm opacity-90">Репетитор по русскому языку</p>
          <p className="text-sm opacity-75 mt-4">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
