import UserTable from "@/components/tables/users/UserTable";
import { usersQueryOptions } from "@/query/users";
import { useQuery } from "@tanstack/react-query";

const UsersListPage = () => {
  const { data } = useQuery(usersQueryOptions);

  return (
    <div>
      <h3>Users</h3>
      {Array.isArray(data) && <UserTable users={data} />}
    </div>
  );
};

export default UsersListPage;
