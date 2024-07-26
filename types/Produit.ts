export interface Produits {
  id: number;
  nom_produit: string;
  description: string;
  image_produits: string;
  prix: string;
  categorie: Categorie;
};

export interface Categorie {
  id: number;
  nom_categorie: string;
  description_categorie: string;
}

