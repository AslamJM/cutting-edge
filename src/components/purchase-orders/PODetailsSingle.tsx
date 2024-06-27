import { PurchaseOrder } from "@/api/types/purchase-order";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { format } from "date-fns";
import { Label } from "@radix-ui/react-label";
import { Badge } from "../ui/badge";

const PODetailsSingle = ({ po }: { po: PurchaseOrder }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{`Purchase Order #${po.id}`}</CardTitle>
        <CardDescription>{format(po.order_date, "PPP")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between my-2">
          <div>
            <Label>Supplier</Label>
            <p>{po.supplier.name}</p>
          </div>
          <div>
            <Label className="block">Order Status</Label>
            <Badge>{po.order_status}</Badge>
          </div>
        </div>
        <div>
          <Label>Product Details</Label>
          <div className="flex items-center gap-2">
            {po.purchase_order_details.map((pr) => (
              <div key={pr.id}>
                <h3>{pr.product.product_name}</h3>
                <p>Quantity: {pr.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PODetailsSingle;
