import Header from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-row bg-slate-100 h-full">
        <Header />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
