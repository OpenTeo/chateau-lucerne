export default function Rooms() {
  const rooms = [
    {
      name: "Suite Napoléon",
      description: "Suite prestige avec vue sur le parc",
      features: ["Lit king-size", "Salle de bain privée", "35m²"],
      price: "180€",
    },
    {
      name: "Chambre Carbonnel",
      description: "Élégance et authenticité",
      features: ["Lit queen-size", "Salle de bain privée", "28m²"],
      price: "150€",
    },
    {
      name: "Chambre de la Forêt",
      description: "Atmosphère paisible",
      features: ["Lit double", "Salle de bain privée", "25m²"],
      price: "140€",
    },
    {
      name: "Chambre de l'Abbaye",
      description: "Charme historique",
      features: ["Lit double", "Salle de bain privée", "25m²"],
      price: "140€",
    },
    {
      name: "Chambre des Jardins",
      description: "Vue sur les jardins",
      features: ["Lit double", "Salle de bain privée", "25m²"],
      price: "140€",
    },
  ];

  return (
    <section id="rooms" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl mb-4 text-stone-900">
            Hébergement sur Place
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Cinq chambres d'hôtes de charme pour prolonger votre événement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/chambre.jpg')"
                }}
              />
              
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2 text-stone-900">
                  {room.name}
                </h3>
                <p className="text-stone-600 mb-4">{room.description}</p>
                
                <ul className="space-y-1.5 mb-6">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-stone-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-stone-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <span className="text-2xl font-serif text-gold-700">
                    {room.price}<span className="text-lg text-stone-500">/nuit</span>
                  </span>
                  <a
                    href="#contact"
                    className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white text-sm rounded-lg transition-colors"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">
            * Tarifs dégressifs pour réservation groupée lors d'événements
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors"
          >
            Demander un Forfait Groupe
          </a>
        </div>
      </div>
    </section>
  );
}
