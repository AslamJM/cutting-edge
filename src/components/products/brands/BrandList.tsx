import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { brandQO } from "@/query/products";
import { useQuery } from "@tanstack/react-query";

const BrandList = () => {
  const { data, isLoading } = useQuery(brandQO);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Brand List</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <div>
            {data &&
              (data.data.length === 0 ? (
                <p>No Brands</p>
              ) : (
                data.data.map((c) => <h3 key={c.id}>{c.brand_name}</h3>)
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BrandList;
