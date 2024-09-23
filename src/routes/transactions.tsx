import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/transactions")({
  component: Transactions,
});

function Transactions() {
  return (
    <main className="p-2">
      <h1 className="text-xl font-bold">Transactions</h1>
    </main>
  );
}
