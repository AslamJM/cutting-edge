import { getSingleTr } from "@/api/tr";
import { queryOptions } from "@tanstack/react-query";

export const singleTRQO = (id: string | number) => queryOptions({
    queryKey: ['single_tr', id],
    queryFn: () => getSingleTr(id)
})