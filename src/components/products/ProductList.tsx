import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { productsQO } from "@/query/products";
import ProductDataTable from "../tables/products/ProductDataTable";

const ProductList = () => {
  const { data, isLoading } = useQuery(productsQO);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          "Loading"
        ) : (
          <>{data && data.data && <ProductDataTable products={data.data} />}</>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductList;
