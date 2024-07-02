import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FC } from "react";

interface SimpleTableHederProps {
  heads: string[];
}

const SimpleTableHeder: FC<SimpleTableHederProps> = ({ heads }) => {
  return (
    <TableHeader>
      <TableRow>
        {heads.map((h) => (
          <TableHead key={h}>{h}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default SimpleTableHeder;
