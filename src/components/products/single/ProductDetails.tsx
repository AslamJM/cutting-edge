import { Product } from "@/api/types/product";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full md:w-[450px]">
      <CardHeader>
        <CardTitle>{product.product_name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="">
          <img src={product.image} alt={product.product_name} className="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <h3>Category</h3>
            <p>{product.category.category_name}</p>
          </div>
          <div>
            <h3>Brand</h3>
            <p>{product.brand.brand_name}</p>
          </div>
          <div>
            <h3>Unit</h3>
            <p>{product.unit.name}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
