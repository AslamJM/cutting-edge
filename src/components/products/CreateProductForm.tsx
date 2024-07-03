import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { brandQO, categoryQO, unitQO } from "@/query/products";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { createProduct } from "@/api/products/products";
import { useAuthContext } from "@/store/AuthContext";

const productFormShema = z.object({
  product_name: z.string(),
  product_number: z.string(),
  description: z.string(),
  image: z.string(),
  category_id: z.string(),
  brand_id: z.string(),
  unit_id: z.string(),
});

const CreateProductForm = () => {
  const form = useForm<z.infer<typeof productFormShema>>({
    resolver: zodResolver(productFormShema),
    defaultValues: {
      product_name: "",
      product_number: "",
      description: "",
      image:
        "https://images.theconversation.com/files/515276/original/file-20230314-2595-90gnm9.jpg",
      category_id: "",
      brand_id: "",
      unit_id: "",
    },
  });

  const { user } = useAuthContext();

  const { data: categories, isLoading: c_loading } = useQuery(categoryQO);
  const { data: brands, isLoading: b_loading } = useQuery(brandQO);
  const { data: units, isLoading: u_loading } = useQuery(unitQO);

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = (values: z.infer<typeof productFormShema>) => {
    const input = {
      ...values,
      category_id: Number(values.category_id),
      brand_id: Number(values.brand_id),
      unit_id: Number(values.unit_id),
      created_by_id: user!.id,
    };

    mutate(input);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Product</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="product_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {c_loading ? (
                          <div>loading....</div>
                        ) : (
                          <>
                            {categories?.data.map((c) => (
                              <SelectItem key={c.id} value={c.id.toString()}>
                                {c.category_name}
                              </SelectItem>
                            ))}
                          </>
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brand_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Brand" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {b_loading ? (
                          <div>loading....</div>
                        ) : (
                          <>
                            {brands?.data.map((c) => (
                              <SelectItem key={c.id} value={c.id.toString()}>
                                {c.brand_name}
                              </SelectItem>
                            ))}
                          </>
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unit_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Unit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {u_loading ? (
                          <div>loading....</div>
                        ) : (
                          <>
                            {units?.data.map((c) => (
                              <SelectItem key={c.id} value={c.id.toString()}>
                                {c.name}
                              </SelectItem>
                            ))}
                          </>
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 animate-spin" /> "Creating"
                </>
              ) : (
                "Create"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateProductForm;
