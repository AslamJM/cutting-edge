import { storeQO } from "@/query/stores";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const StoreList = () => {
  const { data, isLoading } = useQuery(storeQO);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stores</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Contact Info</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                {data &&
                  data.data.map((st) => (
                    <TableRow key={st.id}>
                      <TableCell>{st.name}</TableCell>
                      <TableCell>{st.location}</TableCell>
                      <TableCell>{st.contact_info}</TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StoreList;
