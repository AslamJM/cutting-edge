import { getUsers } from "@/api/users";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../tables/items/ItemTable";
import { columns } from "../tables/items/columns";

const DashboardPage = () => {
  const { data } = useQuery({
    queryKey: ["get_users"],
    queryFn: getUsers,
  });

  return <div>{data && <DataTable data={data} columns={columns} />}</div>;
};

export default DashboardPage;
