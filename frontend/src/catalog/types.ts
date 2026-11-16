export interface CatalogProduct {
  name: string;
  description?: string;
  dosage?: string;
  packaging?: string;
  taste?: string;
}

export interface TasteProfile {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface CatalogLink {
  label: string;
  url: string;
}
