import { getUsers } from "@/api/users";
import { queryOptions } from "@tanstack/react-query";

export const usersQueryOptions = queryOptions({
    queryKey: ["users"],
    queryFn: () => getUsers()
})