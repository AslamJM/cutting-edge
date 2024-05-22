import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-[150px] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 mb-4" />
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default LoadingPage;
