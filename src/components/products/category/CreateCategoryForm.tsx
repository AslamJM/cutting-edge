import { createCategory } from "@/api/products/category";
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

const CreateCategoryForm = () => {
  const [name, setName] = useState("");

  const qc = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: () => createCategory({ category_name: name }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["categories"] });
      setName("");
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Category</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>Category Name</Label>
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

export default CreateCategoryForm;
