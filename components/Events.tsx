export default function Events() {
  const eventTypes = [
    {
      title: "Mariages",
      description:
        "Votre union dans un cadre historique d'exception. Salle de réception de 156m², parc de 10 hectares et hébergement sur place.",
      capacity: "150 invités",
      price: "À partir de 4 500€",
      includes: ["Salle 156m²", "Parc privatif", "Coordinateur dédié"],
    },
    {
      title: "Séminaires d'Entreprise",
      description:
        "Un environnement professionnel dans un cadre inspirant. Salles modulables, espaces de détente et restauration sur mesure.",
      capacity: "80 participants",
      price: "À partir de 2 800€",
      includes: ["Salles équipées", "Wifi haut débit", "Restauration"],
    },
    {
      title: "Événements Privés",
      description:
        "Anniversaires, célébrations familiales ou réceptions d'entreprise. Nous créons l'événement qui vous ressemble.",
      capacity: "120 personnes",
      price: "Sur devis",
      includes: ["Espace privatif", "Service traiteur", "Décoration"],
    },
  ];

  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl mb-4 text-stone-900">
            Vos Événements d'Exception
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Un lieu unique en Normandie pour créer des souvenirs inoubliables
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="h-2 bg-gradient-to-r from-gold-600 to-gold-400" />
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-3xl mb-3 text-stone-900">
                  {event.title}
                </h3>
                
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-stone-700">
                    <span className="w-1.5 h-1.5 bg-gold-600 rounded-full" />
                    <span className="font-medium">Capacité:</span> {event.capacity}
                  </div>
                  
                  {event.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-stone-200">
                  <p className="text-2xl font-serif text-gold-700 mb-4">
                    {event.price}
                  </p>
                  <a
                    href="#contact"
                    className="block text-center px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors"
                  >
                    Demander un Devis
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Atouts */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="font-serif text-3xl mb-10 text-center text-stone-900">
            Pourquoi Choisir Notre Domaine
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Domaine de 10 hectares" },
              { label: "Salle de 156m²" },
              { label: "5 chambres d'hôtes" },
              { label: "Parking privatif" },
              { label: "À 15km de Granville" },
              { label: "35km du Mont St-Michel" },
              { label: "Coordinateur dédié" },
              { label: "Traiteurs partenaires" },
            ].map((feature, idx) => (
              <div key={idx} className="text-center py-6 bg-stone-50 rounded-lg">
                <p className="text-stone-700 font-medium">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
