import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { productsQO } from "@/query/products";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  SelectProduct,
  useProductSelectStore,
} from "@/store/productSelectStore";
import { Input } from "../ui/input";
import { CheckIcon, XIcon } from "lucide-react";
import { useState } from "react";

const SelectProducts = () => {
  const { addNew, products } = useProductSelectStore();
  return (
    <div className="my-2">
      <Label>Select Products</Label>
      <div>
        <Button
          className="block mb-2"
          onClick={() => addNew({ product_id: 0, quantity: 0 })}
        >
          Add New
        </Button>
        {products.map((pr, i) => (
          <SelectComponent key={i} product={pr} index={i} />
        ))}
      </div>
    </div>
  );
};

const SelectComponent = ({
  product,
  index,
}: {
  product: SelectProduct;
  index: number;
}) => {
  const [quantity, setQuantity] = useState("");
  const [selected, setSelected] = useState("");

  const { data, isLoading } = useQuery(productsQO);

  const { remove, update } = useProductSelectStore();

  return (
    <div className="grid grid-cols-3 gap-4 my-2">
      <Select onValueChange={(e) => setSelected(e)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Product" />
        </SelectTrigger>

        <SelectContent>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {data &&
                data.data.map((s) => (
                  <SelectItem key={s.id} value={s.id.toString()}>
                    {s.product_name}
                  </SelectItem>
                ))}
            </>
          )}
        </SelectContent>
      </Select>
      <Input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <Button
          onClick={() =>
            update(
              {
                product_id: Number(selected),
                quantity: Number(quantity),
              },
              index
            )
          }
        >
          <CheckIcon />
        </Button>
        <Button onClick={() => remove(product.product_id)}>
          <XIcon />
        </Button>
      </div>
    </div>
  );
};

export default SelectProducts;
