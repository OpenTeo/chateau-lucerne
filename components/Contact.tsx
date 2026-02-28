"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">
              Nous Contacter
            </h2>
            <p className="text-xl text-stone-600">
              Une question ? Un projet ? Nous sommes à votre écoute
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-2xl mb-6 text-stone-900">
                Informations
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-gold-600 text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-stone-900">Adresse</p>
                    <p className="text-stone-600">
                      La Lucerne d'Outremer
                      <br />
                      50320, Manche
                      <br />
                      Normandie, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-gold-600 text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-stone-900">Téléphone</p>
                    <p className="text-stone-600">À venir</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-gold-600 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-stone-900">Email</p>
                    <p className="text-stone-600">contact@chateaudelucerne.fr</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-serif text-xl mb-3 text-stone-900">
                  Accès
                </h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• 15 km de Granville</li>
                  <li>• 35 km du Mont-Saint-Michel</li>
                  <li>• Proche de l'Abbaye de La Lucerne</li>
                  <li>• Parking privé sur place</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="font-serif text-2xl mb-6 text-stone-900">
                Envoyez-nous un message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Type d'événement
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="chambre">Chambre d'hôte</option>
                    <option value="mariage">Mariage</option>
                    <option value="seminaire">Séminaire</option>
                    <option value="reception">Réception</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
