import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import { getSupabaseData } from "./api/supabase";

// data type
interface TransactionProps {
  category: string;
  create_at: string;
  description: string;
  id: string;
  name: string;
  price: number;
  stock_quantity: number;
  update_at: string;
}

export default function App() {
  const [totalBalance, setTotalBalance] = useState<number>(0);

  useEffect(() => {
    async function getBalance() {
      const data: TransactionProps[] =
        await getSupabaseData("all_transactions");
      // get data
      if (data.length > 0 && data) {
        let totalPrice = 0;
        for (const item of data) {
          // adds curr price of item to totalPrice
          totalPrice += item.price;
        }
        // sets balance to val of totalPrice
        setTotalBalance(totalPrice);
      }
    }
    getBalance();
  });
  return (
    <main>
      <h1>Welcome to your bank account</h1>
      <Balance totalBalance={totalBalance} />
    </main>
  );
}
