import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddGoods from "./AddGoods";
import { PurchaseOrder } from "@/api/types/purchase-order";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const CreateGRNform = ({ po }: { po: PurchaseOrder }) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create GRN</CardTitle>
      </CardHeader>
      <CardContent>
        {po.purchase_order_details.map((pod) => (
          <AddGoods key={pod.id} product={pod.product} />
        ))}
      </CardContent>
      <CardFooter className="space-x-4">
        <div>
          <Label className="block">Recieved Date</Label>
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
        <Button>Create Good Recieved Note</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateGRNform;
