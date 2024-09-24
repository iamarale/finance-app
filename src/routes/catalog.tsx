import Catalog from "@/components/Catalog";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/catalog")({
  component: Catalog,
});
