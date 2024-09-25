import Transfers from "@/components/Transfers";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/transfer")({
  component: Transfers,
});
