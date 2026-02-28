export default function Events() {
  const eventTypes = [
    {
      title: "Mariages",
      description:
        "Célébrez votre union dans un cadre historique et romantique. Notre salle de réception et notre parc aux arbres centenaires créeront des souvenirs inoubliables.",
      icon: "💍",
      capacity: "Jusqu'à 150 personnes",
    },
    {
      title: "Séminaires",
      description:
        "Un environnement professionnel dans un cadre d'exception. Idéal pour vos réunions stratégiques, team-building et formations.",
      icon: "💼",
      capacity: "Jusqu'à 80 personnes",
    },
    {
      title: "Réceptions",
      description:
        "Anniversaires, célébrations familiales ou événements corporatifs, nous accueillons tous vos moments importants avec élégance.",
      icon: "🎉",
      capacity: "Jusqu'à 120 personnes",
    },
  ];

  return (
    <section id="events" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">
            Événements & Réceptions
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Un lieu magique et historique pour tous vos événements d'exception
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{event.icon}</div>
              <h3 className="font-serif text-2xl mb-3 text-stone-900">
                {event.title}
              </h3>
              <p className="text-stone-600 mb-4">{event.description}</p>
              <p className="text-sm text-gold-600 font-semibold">
                {event.capacity}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="font-serif text-3xl mb-6 text-center text-stone-900">
            Nos Atouts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏰", label: "Domaine historique" },
              { icon: "🌳", label: "Parc de 10 hectares" },
              { icon: "🍽️", label: "Salle de réception" },
              { icon: "🅿️", label: "Parking privatif" },
              { icon: "🛏️", label: "5 chambres d'hôtes" },
              { icon: "📸", label: "Décors exceptionnels" },
              { icon: "🎨", label: "Personnalisation" },
              { icon: "🤝", label: "Accompagnement sur-mesure" },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <p className="text-stone-700">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors"
          >
            Demander un Devis
          </a>
        </div>
      </div>
    </section>
  );
}
