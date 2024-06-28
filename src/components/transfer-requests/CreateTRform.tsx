import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { storeQO } from "@/query/stores";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { useProductSelectStore } from "@/store/productSelectStore";
import SelectProducts from "../purchase-orders/SelectProducts";
import { createTR } from "@/api/tr";
import { TransferRequstInput } from "@/api/types/tr";

const CreateTRform = ({ storeId }: { storeId: number }) => {
  const [toStore, setToStore] = useState("");
  const [date, setDate] = useState<Date>();

  const qc = useQueryClient();

  const { products, empty } = useProductSelectStore();

  const { data, isLoading } = useQuery(storeQO);

  const { mutate, isPending } = useMutation({
    mutationFn: createTR,
    onSuccess: () => {
      setToStore(""), setDate(new Date()), empty();
      qc.invalidateQueries({
        queryKey: ["store_trs", storeId],
      });
    },
  });

  const createTransferRequest = () => {
    const input: TransferRequstInput = {
      from_store_id: storeId,
      to_store_id: Number(toStore),
      request_date: date!.toISOString(),
      transfer_status: "PENDING",
      transfer_request_details: {
        create: products.map((p) => ({
          product_id: p.product_id,
          requested_quantity: p.quantity,
        })),
      },
    };
    mutate(input);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Transfer Request</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2">
          <div>
            <Label>From</Label>
            <p>
              {data &&
                data.data.find((s) => s.id === storeId) &&
                data.data.find((s) => s.id === storeId)?.name}
            </p>
          </div>
          <div>
            <Label>To</Label>
            <Select onValueChange={(e) => setToStore(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Store" />
              </SelectTrigger>

              <SelectContent>
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    {data &&
                      data.data.map((s) => (
                        <SelectItem key={s.id} value={s.id.toString()}>
                          {s.name}
                        </SelectItem>
                      ))}
                  </>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="block mb-2">Request Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <SelectProducts />
      </CardContent>
      <CardFooter>
        <Button onClick={() => createTransferRequest()}>
          {isPending ? "Creating..." : "Create"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateTRform;
