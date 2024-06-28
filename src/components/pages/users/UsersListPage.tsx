import UserTable from "@/components/tables/users/UserTable";
import { Button } from "@/components/ui/button";
import { usersQueryOptions } from "@/query/users";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

const UsersListPage = () => {
  const { data } = useQuery(usersQueryOptions);

  return (
    <div>
      <h3>Users</h3>
      <Button className="my-2">
        <Link to="/users/create">Create User</Link>
      </Button>
      {Array.isArray(data) && <UserTable users={data} />}
    </div>
  );
};

export default UsersListPage;
