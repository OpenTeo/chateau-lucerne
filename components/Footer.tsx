export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">
              Château de La Lucerne
            </h3>
            <p className="text-sm text-stone-400">
              Domaine historique en Normandie proposant des chambres d'hôtes de
              charme et l'organisation d'événements d'exception dans un cadre
              unique.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  Le Domaine
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold-400 transition-colors">
                  Chambres d'Hôtes
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-gold-400 transition-colors">
                  Événements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>La Lucerne d'Outremer</li>
              <li>50320, Manche, Normandie</li>
              <li>
                <a
                  href="mailto:contact@chateaudelucerne.fr"
                  className="hover:text-gold-400 transition-colors"
                >
                  contact@chateaudelucerne.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          <p>
            © {new Date().getFullYear()} Château de La Lucerne d'Outremer. Tous
            droits réservés.
          </p>
          <p className="mt-2">
            Restauré avec passion par Sylvie et Frédéric depuis 2007
          </p>
        </div>
      </div>
    </footer>
  );
}
