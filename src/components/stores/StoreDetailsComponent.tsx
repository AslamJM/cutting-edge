import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface StoreDetailsComponentProps {
  data: {
    grns: number;
    fromTRs: number;
    toTRs: number;
  };
}

const StoreDetailsComponent: FC<StoreDetailsComponentProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total GRNs</CardTitle>
        </CardHeader>
        <CardContent>{data.grns}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Transfers From</CardTitle>
        </CardHeader>
        <CardContent>{data.fromTRs}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Transfers To</CardTitle>
        </CardHeader>
        <CardContent>{data.toTRs}</CardContent>
      </Card>
    </div>
  );
};

export default StoreDetailsComponent;
