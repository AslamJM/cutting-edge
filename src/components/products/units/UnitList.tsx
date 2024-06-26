import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { unitQO } from "@/query/products";
import { useQuery } from "@tanstack/react-query";

const UnitList = () => {
  const { data, isLoading } = useQuery(unitQO);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unit List</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <div>
            {data &&
              (data.data.length === 0 ? (
                <p>No Units</p>
              ) : (
                data.data.map((c) => <h3 key={c.id}>{c.name}</h3>)
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UnitList;
