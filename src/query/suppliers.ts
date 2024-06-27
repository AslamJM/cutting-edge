import { getAllSuppliers } from "@/api/suppliers";
import { queryOptions } from "@tanstack/react-query";

export const suppliersQO = queryOptions({
    queryKey: ["suppliers"],
    queryFn: getAllSuppliers
})