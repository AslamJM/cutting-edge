import { Product } from "@/api/types/product";
import { Input } from "@/components/ui/input";
import { TableHead } from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import BrandSelect from "./BrandSelect";
import { Brand, Category, Unit } from "@/api/types/category";
import { CategoryFilter, UnitFilter } from "./TableFilters";

export const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "product_name",
    header: ({ column }) => {
      return (
        <div>
          <div className="max-w-sm">
            <TableHead>Name</TableHead>
            <Input
              className="mb-1"
              placeholder="Filter by name"
              value={column.getFilterValue() as string}
              onChange={(e) => column.setFilterValue(e.target.value)}
            />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "product_number",
    header: "Product Number",
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <div className="max-w-sm">
          <TableHead>Category</TableHead>
          <div>
            <CategoryFilter
              onChange={(e: string) => column.setFilterValue(e)}
            />
          </div>
        </div>
      );
    },

    filterFn: (r, c, value) => {
      const category = r.getValue(c) as Category;
      return category.category_name === value;
    },

    cell: ({ row }) => {
      return row.original.category.category_name;
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }) => {
      return (
        <div className="max-w-sm">
          <TableHead>Brand</TableHead>
          <div>
            <BrandSelect
              onChange={(e: string) => column.setFilterValue(e)}
              value={column.getFilterValue() as string}
            />
          </div>
        </div>
      );
    },

    filterFn: (r, c, value) => {
      const brand = r.getValue(c) as Brand;
      return brand.brand_name === value;
    },

    cell: ({ row }) => {
      return row.original.brand.brand_name;
    },
  },
  {
    accessorKey: "unit",
    header: ({ column }) => {
      return (
        <div className="max-w-sm">
          <TableHead>Unit</TableHead>
          <div>
            <UnitFilter onChange={(e: string) => column.setFilterValue(e)} />
          </div>
        </div>
      );
    },

    filterFn: (r, c, value) => {
      const unit = r.getValue(c) as Unit;
      return unit.name === value;
    },
    cell: ({ row }) => {
      return row.original.unit.name;
    },
  },
];
