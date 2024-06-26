import { createUnit } from "@/api/products/units";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const CreateUnitForm = () => {
  const [name, setName] = useState("");

  const qc = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: () => createUnit({ name }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["units"] });
      setName("");
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Unit</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>Unit Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </CardContent>
      <CardFooter>
        <Button disabled={!name} onClick={() => mutate()}>
          {isPending ? "Creating.." : "Create"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateUnitForm;
