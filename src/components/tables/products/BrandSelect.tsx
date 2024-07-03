import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { brandQO } from "@/query/products";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { FC } from "react";

interface BrandSelectProps {
  onChange: (e: string) => void;
  value: string;
}

const BrandSelect: FC<BrandSelectProps> = ({ onChange, value }) => {
  const { data } = useQuery(brandQO);

  return (
    <div className="flex items-center gap-1 mb-1">
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue defaultValue={value} placeholder="Filter by brand" />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data.data.map((brand) => (
              <SelectItem key={brand.id} value={brand.brand_name}>
                {brand.brand_name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      <Button size="icon" variant="ghost" onClick={() => onChange("")}>
        <X className="w-4 h-4 text-red-600" />
      </Button>
    </div>
  );
};

export default BrandSelect;
