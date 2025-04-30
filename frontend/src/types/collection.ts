export interface CollectionItem {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  isFavorite?: boolean;
}

export interface CollectionSectionProps {
  title: string;
  items: CollectionItem[];
} 