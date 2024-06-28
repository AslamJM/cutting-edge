import { GRNdetailInput } from "@/api/types/purchase-order";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { format } from "date-fns";

const tableheaders = [
  "Batch No",
  "Quantity",
  "Sample",
  "Buying",
  "Selling",
  "Expiry Date",
];

const ProductGrnTable = ({ grns }: { grns: GRNdetailInput[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableheaders.map((th) => (
            <TableHead key={th}>{th}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {grns.map((grn) => (
          <TableRow key={grn.batch_number}>
            <TableCell>{grn.batch_number}</TableCell>
            <TableCell>{grn.quantity}</TableCell>
            <TableCell>{grn.sample_quantity}</TableCell>
            <TableCell>{grn.buying_price}</TableCell>
            <TableCell>{grn.selling_price}</TableCell>
            <TableCell>{format(grn.expiry_date, "PPP")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductGrnTable;
