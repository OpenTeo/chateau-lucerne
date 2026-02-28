# 📸 Guide Photos - Château de La Lucerne

## Photos à remplacer

Le site utilise actuellement des images Unsplash temporaires de châteaux français. **Remplacez-les par les vraies photos du château!**

### Fichiers images nécessaires

Créez un dossier `/public/images/chateau/` et ajoutez:

#### 1. **hero.jpg** (Hero section)
- Photo principale du château avec le parc
- Résolution: 2800x1600px minimum
- Format: JPG optimisé
- Utilisation: Bannière d'accueil plein écran

#### 2. **facade.jpg**
- Façade du château
- Résolution: 1920x1080px
- Vue d'ensemble architecturale

#### 3. **parc-1.jpg & parc-2.jpg**
- Jardins et arbres centenaires
- Résolution: 1920x1080px chacune
- Différents angles du parc

#### 4. **chambres/** (5 photos)
- `chambre-napoleon.jpg`
- `chambre-carbonnel.jpg`
- `chambre-foret.jpg`
- `chambre-abbaye.jpg`
- `chambre-jardins.jpg`
- Résolution: 1200x800px chacune

#### 5. **salle-reception.jpg**
- La salle de 156m² (anciennes écuries)
- Résolution: 1920x1080px
- Montrer l'espace et l'élégance

#### 6. **evenements/** (3-5 photos)
- Photos de mariages/événements passés
- Résolution: 1200x800px
- Montrer l'ambiance et la capacité

---

## Comment remplacer les images

### Méthode 1: Remplacer les URLs dans le code

Uploadez vos photos dans `/public/images/chateau/` puis modifiez les composants:

**Hero.tsx:**
```tsx
backgroundImage: "url('/images/chateau/hero.jpg')"
```

**Rooms.tsx:**
```tsx
backgroundImage: "url('/images/chateau/chambres/chambre-napoleon.jpg')"
```

**Domain.tsx:**
```tsx
backgroundImage: "url('/images/chateau/parc-1.jpg')"
```

### Méthode 2: Utiliser un CMS (futur)

Si vous voulez gérer les images sans toucher au code:
1. Intégrer un CMS headless (Contentful, Sanity)
2. Ou utiliser Next.js Image Loader

---

## Photos depuis leur site actuel

Leurs vraies photos sont sur:
- **Site web:** https://www.auchateau.fr/
- **Facebook:** https://www.facebook.com/auchateaulucerne
- **Booking.com:** Photos haute résolution disponibles
- **Google Maps:** Photos clients (vérifier les droits)

### Contact pour photos HD

- Demander à **Sylvie et Frédéric** leurs photos professionnelles
- Photographe mariage qui a shooté le lieu
- Archives du domaine

---

## Optimisation images

Avant d'uploader:
1. **Redimensionner** aux dimensions recommandées
2. **Compresser** avec TinyPNG ou Squoosh
3. **Format:** JPG pour photos, WebP pour web moderne
4. **Poids:** < 200KB par image idéalement

### Outils recommandés

- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- **ImageOptim** (Mac)

---

## Images actuelles (placeholders)

| Section | URL actuelle | À remplacer par |
|---------|--------------|-----------------|
| Hero | Unsplash château | `/images/chateau/hero.jpg` |
| Chambres | Unsplash chambre | `/images/chateau/chambres/*.jpg` |
| Parc 1 | Unsplash jardin | `/images/chateau/parc-1.jpg` |
| Parc 2 | Unsplash jardin | `/images/chateau/parc-2.jpg` |

---

## Prochaines étapes

1. ✅ Site créé avec placeholders
2. ⏳ **Client envoie ses photos HD**
3. ⏳ Optimiser et intégrer
4. ⏳ Redéployer sur Vercel
5. ✅ Site live avec vraies photos!

---

*Les placeholders actuels sont de haute qualité mais généri
ques. Le site gagnera énormément en authenticité avec les vraies photos du château!*
