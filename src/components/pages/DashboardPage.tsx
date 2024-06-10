import { getUsers } from "@/api/users";
import { useQuery } from "@tanstack/react-query";
// import { DataTable } from "../tables/items/ItemTable";
// import { columns } from "../tables/items/columns";
// import { Link } from "@tanstack/react-router";
import instance from "@/api/instance";
import { useAuthContext } from "@/store/AuthContext";

const DashboardPage = () => {
  const { data } = useQuery({
    queryKey: ["get_users"],
    queryFn: getUsers,
  });

  const { user } = useAuthContext();

  const fetchRoles = async () => {
    try {
      const res = await instance.get("/roles");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={fetchRoles}>Fech Roles</button>
      <h3>{JSON.stringify(user)}</h3>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default DashboardPage;
