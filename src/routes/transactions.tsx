import { createFileRoute } from "@tanstack/react-router";
import AllTransactions from "../components/AllTransactions";

export const Route = createFileRoute("/transactions")({
  component: AllTransactions,
});
