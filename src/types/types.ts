export interface FileWithPreview extends File {
  id?: number;
  preview?: string;
}

export interface ProductsType {
  id?: string;
  name: string;
  image?: string;
  images?: string[];
  price: string;
  category: CategoryType | null;
  brands: BrandType | null;
  descriptionName: string;
  descriptionInfo: string;
  isDiscount?: boolean;
  oldPrice?: string;
  rating: number;
}

export interface CategoryType {
  id?: string;
  name: string;
  categoryType: string;
  subcategory?: { id: string; name: string }[];
}

export interface BrandType {
  id?: string;
  name: string;
}

export interface QuestionType {
  id: string;
  question: string;
  date: string;
  answers?: { id: string; text: string; date: string }[];
}
