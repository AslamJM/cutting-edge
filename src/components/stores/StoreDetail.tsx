import { StoreWithProduct } from "@/api/types/store";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ProductItem from "./ProductItem";
import { useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { storeTRQO } from "@/query/stores";
import TRListItem from "./TRListItem";
import TRListItemTo from "./TrListItemTo";

interface StoreDetailProps {
  store: StoreWithProduct;
}

const StoreDetail: FC<StoreDetailProps> = ({ store }) => {
  const location = useLocation();

  const { data } = useQuery(storeTRQO(store.id));

  return (
    <div className="space-y-2">
      <Card>
        <CardHeader>
          <CardTitle>{store.name}</CardTitle>
          <CardDescription>{store.location}</CardDescription>
          <CardDescription>{store.contact_info}</CardDescription>
        </CardHeader>
      </Card>
      {location.pathname.includes("transfer-requests") ? (
        <>
          {data && data.data && (
            <div className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Transfer Requests</CardTitle>
                  <CardDescription>From</CardDescription>
                </CardHeader>
                <CardContent>
                  {data.data.from.map((d) => (
                    <TRListItem key={d.id} data={d} />
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Transfer Requests</CardTitle>
                  <CardDescription>To</CardDescription>
                </CardHeader>
                <CardContent>
                  {data.data.to.map((d) => (
                    <TRListItemTo key={d.id} data={d} storeId={store.id} />
                  ))}
                </CardContent>
              </Card>
            </div>
          )}
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Available Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Brand</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {store.products.map((pr) => (
                  <ProductItem key={pr.id} product={pr} storeId={store.id} />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StoreDetail;
