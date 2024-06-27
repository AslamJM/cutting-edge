import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { purchaseOrderQO } from "@/query/purchase-orders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

const PurchaseOrderList = () => {
  const { data, isLoading } = useQuery(purchaseOrderQO);

  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>Purchase Orders</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          "Loading...."
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order Number</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Supplier</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data &&
                data.data.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell>
                      <Button variant="link">
                        <Link to={`/purchase-orders/${d.id}`}>
                          {"#" + d.id}
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell>{format(d.order_date, "PPP")}</TableCell>
                    <TableCell>{d.supplier.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default PurchaseOrderList;
