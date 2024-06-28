import { ProductGRN } from "@/api/types/store";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import ProductGrnTable from "./ProductGrnTable";

interface ProductGRNProps {
  data: ProductGRN;
}

const ProductGRNDetails: FC<ProductGRNProps> = ({ data }) => {
  const grns = data.grns;
  return (
    <div className="space-y-2">
      <Card>
        <CardHeader>
          <CardTitle>{data.product.product_name}</CardTitle>
          <CardDescription>{data.product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2">
            <div>
              <Label>brand</Label>
              <p>{data.product.brand.brand_name}</p>
            </div>
            <div>
              <Label>Category</Label>
              <p>{data.product.category.category_name}</p>
            </div>
          </div>
          <div>
            <ProductGrnTable grns={grns} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductGRNDetails;
