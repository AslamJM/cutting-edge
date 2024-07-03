import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categoryQO, unitQO } from "@/query/products";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TableFiltersProps {
  onChange: (e: string) => void;
}

export const UnitFilter: FC<TableFiltersProps> = ({ onChange }) => {
  const { data } = useQuery(unitQO);

  return (
    <div className="flex items-center gap-1 mb-1">
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by unit" />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data.data.map((unit) => (
              <SelectItem key={unit.id} value={unit.name}>
                {unit.name}
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

export const CategoryFilter: FC<TableFiltersProps> = ({ onChange }) => {
  const { data } = useQuery(categoryQO);

  return (
    <div className="flex items-center gap-1 mb-1">
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data.data.map((unit) => (
              <SelectItem key={unit.id} value={unit.category_name}>
                {unit.category_name}
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
