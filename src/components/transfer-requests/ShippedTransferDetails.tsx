import { Product } from "@/api/types/product";
import { TransferGoodDetails } from "@/api/types/tr";
import { FC } from "react";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import SingleShippedItem from "./SingleShippedItem";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface ShippedTransferDetailsProps {
  details: {
    id: number;
    product: Product;
    good_details: TransferGoodDetails[];
    requested_quantity: number;
  };
  type: "From" | "To";
}

const ShippedTransferDetails: FC<ShippedTransferDetailsProps> = ({
  details,
  type,
}) => {
  const { product, requested_quantity, good_details, id } = details;

  return (
    <Card className="py-4 my-1 space-y-4">
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Product</Label>
            <p className="text-sm text-muted-foreground">
              {product.product_name}
            </p>
          </div>
          <div>
            <Label>Requested Quantity</Label>
            <p className="text-sm text-muted-foreground">
              {requested_quantity}
            </p>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand</TableHead>
              <TableHead>Accepted</TableHead>
              <TableHead>Returned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {good_details.map((gd, i) => (
              <SingleShippedItem
                key={gd.id}
                gd={gd}
                type={type}
                index={i}
                trDetailsId={id}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ShippedTransferDetails;
