import { StoreTableTR } from "@/api/types/store";
import TrDataTables from "@/components/stores/TrDataTables";
import { FC } from "react";

interface StoreTRdataTableProps {
  data: StoreTableTR;
}

const StoreTRdataTable: FC<StoreTRdataTableProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      <TrDataTables data={data.from} />
      <TrDataTables data={data.to} />
    </div>
  );
};

export default StoreTRdataTable;
