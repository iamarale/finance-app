import Header from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="container mx-auto mt-12">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
