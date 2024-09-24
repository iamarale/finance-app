import Balance from "./components/Balance";
import RecentTransactions from "./components/RecentTransactions";
import TransactionButtons from "./components/TransactionButtons";

export default function App() {
  return (
    <main>
      <Balance />

      <TransactionButtons />

      <RecentTransactions />
    </main>
  );
}
