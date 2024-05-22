import { getMe } from "@/api/auth";
import LoadingPage from "@/components/pages/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
import { useGlobalStore } from "./globalStore";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get_me"],
    queryFn: getMe,
  });

  const setToken = useGlobalStore((state) => state.setAuthToken);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!data) {
    setToken(null);
  }

  return <>{children}</>;
};

export default GlobalProvider;
