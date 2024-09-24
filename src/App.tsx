import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import RecentTransactions from "./components/RecentTransactions";
import TransactionButtons from "./components/TransactionButtons";
import { supabase } from "./api/Supabase";

export default function App() {
  const [totalBalance, setTotalBalance] = useState<number>();

  useEffect(() => {
    async function getBalance() {
      const { data, error } = await supabase.from("all_transactions").select();

      // if err
      if (error) throw new Error(error.message);

      // get data
      if (data.length > 0 && data) {
        console.log(data);
        let totalPrice = 0;
        for (const item of data) {
          // adds curr price of item to totalPrice
          totalPrice += item.price;
        }
        // sets balance to val of totalPrice
        setTotalBalance(totalPrice);
        console.log(totalBalance);
      }
    }
    getBalance();
  });
  return (
    <main>
      {/*  */}
      <Balance totalBalance={totalBalance} />

      <TransactionButtons />

      <RecentTransactions />
    </main>
  );
}
