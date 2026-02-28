export default function Rooms() {
  const rooms = [
    {
      name: "Prune",
      description: "Chambre élégante avec vue dégagée",
      features: ["Lit double", "Salle de bain privée", "Vue parc"],
      price: "170€",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974",
    },
    {
      name: "Iris",
      description: "Confort et raffinement",
      features: ["Lit queen-size", "Salle de bain privée", "Décoration soignée"],
      price: "180€",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    },
    {
      name: "Azure",
      description: "Atmosphère apaisante",
      features: ["Lit double", "Salle de bain privée", "Ambiance zen"],
      price: "180€",
      image: "https://images.unsplash.com/photo-1616594266889-f5210e9d30b6?q=80&w=2070",
    },
    {
      name: "Joséphine",
      description: "La suite prestige du domaine",
      features: ["Lit queen-size", "Grande salle de bain", "Espace salon"],
      price: "210€",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070",
    },
    {
      name: "Chambre Familiale",
      description: "Espace généreux pour familles",
      features: ["Lits multiples", "Salle de bain privée", "Grand espace"],
      price: "190€",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940",
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
                  backgroundImage: `url('${room.image}')`
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
