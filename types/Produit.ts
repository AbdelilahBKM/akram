export interface Produits {
  id: number;
  nom_produit: string;
  description: string;
  image_produits: string;
  image_data: string;
  prix: string;
  categorie: Categorie;
};

export interface Categorie {
  id: number;
  nom_categorie: string;
  description_categorie: string;
}



// export const produits: Produits[] = [
//   {
//     id: 1,
//     nom: "Salon 1",
//     description: "Description du Salon 1",
//     image: "/images/salon1.png",
//     prix: "MAD 2.500.000",
//     category: 'salon'
//   },
//   {
//     id: 2,
//     nom: "Salon 2",
//     description: "Description du Salon 2",
//     image: "/images/salon2.png",
//     prix: "MAD 2.500.000",
//     category: 'salon'
//   },
//   {
//     id: 3,
//     nom: "Salon 3",
//     description: "Description du Salon 3",
//     image: "/images/salon3.png",
//     prix: "MAD 7.000.000",
//     category: 'salon'
//   },
//   {
//     id: 4,
//     nom: "Salon 4",
//     description: "Description du Salon 4",
//     image: "/images/salon4.png",
//     prix: "MAD 500.000",
//     category: 'salon'
//   },
//   {
//     id: 5,
//     nom: "Salon 5",
//     description: "Description du Salon 5",
//     image: "/images/salon5.png",
//     prix: "MAD 1.500.000",
//     category: 'salon'
//   },
//   {
//     id: 6,
//     nom: "Salon 6",
//     description: "Description du Salon 6",
//     image: "/images/salon6.png",
//     prix: "MAD 150.000",
//     category: 'salon'
//   },
//   {
//     id: 7,
//     nom: "Salon 7",
//     description: "Description du Salon 7",
//     image: "/images/salon7.png",
//     prix: "MAD 7.000.000",
//     category: 'salon'
//   },
//   {
//     id: 8,
//     nom: "Salon 8",
//     description: "Description du Salon 8",
//     image: "/images/salon8.png",
//     prix: "MAD 500.000",
//     category: 'salon'
//   }
// ];
