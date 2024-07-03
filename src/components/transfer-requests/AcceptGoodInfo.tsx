import { usegrnSelectStore } from "@/store/trCreateStore";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import SimpleTableHeder from "../tables/common/SimpleTableHeder";
import { Button } from "../ui/button";
import { useCallback } from "react";
import { ShipTRinput, TransferRequest } from "@/api/types/tr";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptTr } from "@/api/tr";
import { Loader2 } from "lucide-react";
import { useParams } from "@tanstack/react-router";

const AcceptGoodInfo = ({ tr }: { tr: TransferRequest }) => {
  const { grnDetails, updatedKeys, clearAll } = usegrnSelectStore();

  const { id: storeId } = useParams({
    from: "/_auth/store/$id/transfer-requests/$trid",
  });

  const qc = useQueryClient();

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

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const input: ShipTRinput[] = [];
      grnDetails.forEach((v, k) => {
        v.forEach((dt) => {
          input.push({
            accepted_quantity: dt.accepted_quantity,
            returned_quantity: dt.returned_quantity,
            grn_detail_id: dt.grn_detail_id!,
            transfer_request_details_id: k,
          });
        });
      });

      await acceptTr(tr.id, input);
    },
    onSuccess: () => {
      clearAll();
      qc.invalidateQueries({
        queryKey: ["single_tr", tr.id],
      });
      qc.invalidateQueries({
        queryKey: ["store_trs", +storeId],
      });
    },
  });

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
      <Button className="mt-2" onClick={() => mutate()}>
        {isPending ? (
          <>
            <Loader2 className="animate-spin" /> Accepting...
          </>
        ) : (
          "Accept Goods"
        )}
      </Button>
    </div>
  );
};

export default AcceptGoodInfo;
