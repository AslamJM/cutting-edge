import { GRNdetail } from "@/api/types/purchase-order";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

const GRNDetailsCard = ({ gd }: { gd: GRNdetail }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{gd.product.product_name}</CardTitle>
        <CardDescription>{gd.store.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Quantity</Label>
            <p>{gd.quantity}</p>
          </div>
          <div>
            <Label>Sample</Label>
            <p>{gd.sample_quantity}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Buying Price</Label>
            <p>{gd.buying_price}</p>
          </div>
          <div>
            <Label>Selling Price</Label>
            <p>{gd.selling_price}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Expiry Date</Label>
            <p>{format(gd.expiry_date, "PPP")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GRNDetailsCard;
