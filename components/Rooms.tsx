export default function Rooms() {
  const rooms = [
    {
      name: "Suite Napoléon",
      description: "Suite prestigieuse avec vue sur le parc",
      features: ["Lit king-size", "Salle de bain privée", "Vue parc"],
    },
    {
      name: "Chambre Carbonnel",
      description: "Chambre élégante décorée avec authenticité",
      features: ["Lit queen-size", "Salle de bain privée", "Mobilier d'époque"],
    },
    {
      name: "Chambre de la Forêt",
      description: "Atmosphère paisible face à la forêt",
      features: ["Lit double", "Salle de bain privée", "Vue forêt"],
    },
    {
      name: "Chambre de l'Abbaye",
      description: "Charme historique et confort moderne",
      features: ["Lit double", "Salle de bain privée", "Décoration historique"],
    },
    {
      name: "Chambre des Jardins",
      description: "Vue sur les jardins centenaires",
      features: ["Lit double", "Salle de bain privée", "Vue jardins"],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">
            Nos Chambres d'Hôtes
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Cinq chambres d'exception restaurées avec soin, alliant charme
            historique et confort moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div
                className="h-48 bg-gradient-to-br from-stone-300 to-stone-400 group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2 text-stone-900">
                  {room.name}
                </h3>
                <p className="text-stone-600 mb-4">{room.description}</p>
                <ul className="space-y-1">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-stone-500 flex items-center gap-2">
                      <span className="text-gold-600">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors"
          >
            Réserver une Chambre
          </a>
        </div>
      </div>
    </section>
  );
}
