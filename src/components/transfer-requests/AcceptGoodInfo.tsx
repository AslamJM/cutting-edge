import { usegrnSelectStore } from "@/store/trCreateStore";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import SimpleTableHeder from "../tables/common/SimpleTableHeder";
import { Button } from "../ui/button";
import { useCallback } from "react";
import { TransferRequest } from "@/api/types/tr";

const AcceptGoodInfo = ({ tr }: { tr: TransferRequest }) => {
  console.log(tr);

  const { grnDetails, updatedKeys } = usegrnSelectStore();

  const shapeData = useCallback(() => {
    return updatedKeys
      .map((k) => {
        const grns = grnDetails.get(k.key);

        if (grns) {
          const grnId = grns.find((g) => g.grn_detail_id === k.grn_detail_id);
          if (grnId) {
            return grnId;
          }
          return null;
        }
        return null;
      })
      .filter((d) => d !== null);
  }, [updatedKeys, grnDetails]);

  const findBatchName = (grn_details_id: number | null) => {
    if (!grn_details_id) return "";

    const trgd = tr.transfer_request_details
      .flatMap((trd) => trd.good_details)
      .find((gd) => gd.grn_detail_id === grn_details_id);
    if (trgd) {
      return trgd.grn_detail.batch_number;
    } else {
      return "";
    }
  };

  return (
    <div>
      <p>Retruns Info</p>
      <Table>
        <SimpleTableHeder heads={["batch-no", "return quantity"]} />
        <TableBody>
          {updatedKeys.length === 0 ? (
            <p>No returns were made.</p>
          ) : (
            <>
              {shapeData().map((key) => (
                <TableRow key={key.grn_detail_id}>
                  <TableCell>{findBatchName(key.grn_detail_id)}</TableCell>
                  <TableCell>{key.returned_quantity}</TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
      <Button className="mt-2">Accept Goods</Button>
    </div>
  );
};

export default AcceptGoodInfo;
