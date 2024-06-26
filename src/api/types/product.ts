import { Brand, Category, Unit } from "./category";

export type CreateProductInput = {
    description: string;
    image: string;
    product_name: string;
    product_number: string;
    category_id: number;
    brand_id: number;
    unit_id: number;
    created_by_id: number
}

export type Product = {
    id: number;
    product_name: string;
    product_number: string;
    description: string;
    image: string;
    category_id: number;
    brand_id: number;
    unit_id: number;
    created_by_id: number;
    updated_by_id: number;
    status: boolean;
    created_at: Date;
    updated_at: Date;

    category: Category
    brand: Brand
    unit: Unit
}