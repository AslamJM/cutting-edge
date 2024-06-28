import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { CreatePOinput, PurchaseOrderStatus } from "@/api/types/purchase-order";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { suppliersQO } from "@/query/suppliers";
import SelectProducts from "./SelectProducts";
import { createPurchaseOrder } from "@/api/purchase-orders";
import { useProductSelectStore } from "@/store/productSelectStore";

const CreatePOform = () => {
  const [date, setDate] = useState<Date>();
  const [status, setStatus] = useState<PurchaseOrderStatus>("PENDING");
  const [supplier, setSupplier] = useState("");

  const { products, empty } = useProductSelectStore();
  const qc = useQueryClient();

  const { data, isLoading } = useQuery(suppliersQO);

  const { mutate, isPending } = useMutation({
    mutationFn: createPurchaseOrder,
    onSuccess: () => {
      setDate(new Date());
      setStatus("PENDING");
      setSupplier("");
      empty();
      qc.invalidateQueries({
        queryKey: ["purchase_orders"],
      });
    },
  });

  const create = () => {
    const input: CreatePOinput = {
      order_date: date!.toISOString(),
      order_status: status,
      supplier_id: Number(supplier),
      purchase_order_details: {
        create: products.filter((pr) => pr.product_id !== 0),
      },
    };
    mutate(input);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Purchase Order</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Label className="block mb-2">Order Date</Label>
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
          <div>
            <Label className="block mb-2">Order Status</Label>
            <Select onValueChange={(e) => setStatus(e as PurchaseOrderStatus)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="RECIEVED">Recieved</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Supplier</Label>
            <Select onValueChange={(e) => setSupplier(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Supplier" />
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
        <SelectProducts />
      </CardContent>
      <CardFooter>
        <Button onClick={() => create()}>
          {isPending ? "Creating....." : "Create Purchase Order"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreatePOform;
