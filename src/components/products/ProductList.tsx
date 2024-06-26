import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { productsQO } from "@/query/products";
import { Link } from "@tanstack/react-router";
import { Separator } from "../ui/separator";

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
          <>
            {data &&
              data.data.map((pr) => (
                <div key={pr.id} className="flex items-center gap-4 my-2">
                  <Link to={`/products/${pr.id}`}>{pr.product_name}</Link>
                  <Separator orientation="vertical" />
                  <h4>{pr.product_number}</h4>
                </div>
              ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductList;
