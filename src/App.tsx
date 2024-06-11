// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useAuthContext } from "./store/AuthContext";
import LoadingPage from "./components/pages/LoadingPage";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  defaultPreload: "intent",
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const state = useAuthContext();

  if (state.authLoading) {
    return <LoadingPage />;
  }

  return <RouterProvider router={router} context={{ auth: state }} />;
};

export default App;
