import { GRN } from "@/api/types/purchase-order";
import { Separator } from "@/components/ui/separator";
import GRNDetailsCard from "./GRNDetailsCard";

const GRNDetails = ({ grn }: { grn: GRN }) => {
  return (
    <div>
      <div>
        <h3>GRN Details</h3>
        <Separator />
      </div>
      <div className="space-y-4">
        {grn.grn_details.map((gd) => (
          <GRNDetailsCard key={gd.batch_number} gd={gd} />
        ))}
      </div>
    </div>
  );
};

export default GRNDetails;
