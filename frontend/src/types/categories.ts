export interface CategoryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite?: boolean;
}

export interface SubCategory {
  id: string;
  title: string;
  image: string;
  description: string;
  items: CategoryItem[];
}

export interface Category {
  id: string;
  title: string;
  image: string;
  description: string;
  subCategories: SubCategory[];
} 