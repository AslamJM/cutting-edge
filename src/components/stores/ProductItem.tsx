import { Product } from "@/api/types/product";
import { FC } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

interface ProductItemProps {
  product: Product;
  storeId: number;
}

const ProductItem: FC<ProductItemProps> = ({ product, storeId }) => {
  return (
    <TableRow>
      <TableCell>
        <Button variant="link">
          <Link to={`/store/${storeId}/${product.id}`}>
            {product.product_name}
          </Link>
        </Button>
      </TableCell>
      <TableCell>{product.brand.brand_name}</TableCell>
    </TableRow>
  );
};

export default ProductItem;
