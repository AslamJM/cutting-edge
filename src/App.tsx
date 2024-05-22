// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useGlobalStore } from "./store/globalStore";

// Create a new router instance
const router = createRouter({ routeTree, context: { user: null } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const token = useGlobalStore((state) => state.authToken);
  console.log(token);

  return <RouterProvider router={router} context={{ user: token }} />;
};

export default App;
