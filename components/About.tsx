export default function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-stone-900">
            Le Cadre
          </h2>
          <div className="prose prose-lg mx-auto text-stone-700">
            <p className="mb-6">
              Situés dans la Manche, en Normandie, à 15 km de Granville et à 35 km
              du Mont-Saint-Michel, à l'orée de la forêt et de l'Abbaye de La
              Lucerne d'Outremer. Les Châteaux vous ouvrent ses portes sur un
              domaine imprégné d'histoire et rénové avec soins.
            </p>
            <p className="mb-8">
              Un lieu idéal et magique pour une escapade normande, pour
              l'organisation de mariages, de réceptions ou de séminaires. La salle
              et le parc aux arbres centenaires vous enchanteront ainsi que vos
              invités.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Histoire */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl mb-4 text-gold-700">Histoire</h3>
              <p className="text-stone-600">
                Dans un écrin de 10 hectares, au 19ème siècle furent construits
                deux châteaux par le Comte de Carbonnel de Canisy, premier écuyer
                de Napoléon.
              </p>
              <p className="text-stone-600 mt-4">
                Depuis 2007, Sylvie et Frédéric restaurent le domaine afin de lui
                redonner son éclat d'antan, un lieu unique avec une salle de
                réception et cinq chambres d'hôtes.
              </p>
            </div>

            {/* Localisation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl mb-4 text-gold-700">
                Localisation
              </h3>
              <ul className="text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gold-600">✓</span>
                  <span>15 km de Granville</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600">✓</span>
                  <span>35 km du Mont-Saint-Michel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600">✓</span>
                  <span>À l'orée de l'Abbaye de La Lucerne</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600">✓</span>
                  <span>Domaine de 10 hectares</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
