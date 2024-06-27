import { getAllStores } from "@/api/stores";
import { queryOptions } from "@tanstack/react-query";

export const storeQO = queryOptions({
    queryKey: ["stores"],
    queryFn: getAllStores
})