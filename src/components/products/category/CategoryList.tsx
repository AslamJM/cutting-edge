import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categoryQO } from "@/query/products";
import { useQuery } from "@tanstack/react-query";

const CategoryList = () => {
  const { data, isLoading } = useQuery(categoryQO);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Category List</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <div>
            {data &&
              (data.data.length === 0 ? (
                <p>No categories</p>
              ) : (
                data.data.map((c) => <h3 key={c.id}>{c.category_name}</h3>)
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryList;
