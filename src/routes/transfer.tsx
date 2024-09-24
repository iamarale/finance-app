import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/transfer")({
  component: () => <div>Hello /transfer!</div>,
});
