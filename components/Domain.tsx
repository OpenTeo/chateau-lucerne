export default function Domain() {
  return (
    <section id="domain" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-center text-stone-900">
            Le Domaine
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="h-64 md:h-96 rounded-lg bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">🏰</p>
                <p className="text-stone-600 italic">Photo du château à venir</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl mb-4 text-stone-900">
                Un Patrimoine Préservé
              </h3>
              <p className="text-stone-600 mb-4">
                Deux châteaux du 19ème siècle, construits par le Comte de
                Carbonnel de Canisy, premier écuyer de Napoléon, nichés dans un
                écrin de verdure de 10 hectares.
              </p>
              <p className="text-stone-600">
                Depuis 2007, Sylvie et Frédéric se consacrent avec passion à la
                restauration et à la mise en valeur de ce patrimoine exceptionnel,
                créant un lieu unique où l'histoire rencontre le confort moderne.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center order-2 md:order-1 bg-white p-6 rounded-lg">
              <h3 className="font-serif text-3xl mb-4 text-stone-900">
                Le Parc & Les Jardins
              </h3>
              <p className="text-stone-600 mb-4">
                Un parc romantique aux arbres centenaires offre un cadre
                enchanteur pour vos promenades et vos événements. Les jardins à la
                française, méticuleusement entretenus, apportent une touche
                d'élégance intemporelle.
              </p>
              <p className="text-stone-600">
                À l'orée de la forêt et à proximité de l'Abbaye de La Lucerne
                d'Outremer, le domaine bénéficie d'un environnement paisible et
                préservé, idéal pour se ressourcer.
              </p>
            </div>
            <div className="h-64 md:h-96 rounded-lg order-1 md:order-2 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">🌳</p>
                <p className="text-green-800 italic">Photo du parc à venir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
