export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance">
          Bienvenue aux Châteaux de
          <br />
          <span className="text-gold-400">La Lucerne d'Outremer</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-stone-100">
          Un domaine historique en Normandie pour vos chambres d'hôtes, mariages
          et événements d'exception
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rooms"
            className="px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors"
          >
            Nos Chambres
          </a>
          <a
            href="#events"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg transition-colors"
          >
            Organiser un Événement
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="block animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
