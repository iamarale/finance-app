import { getSupabaseData } from "@/api/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface TransactionProps {
  category: string;
  created_at: string;
  description: string;
  id: string;
  name: string;
  price: number;
  stock_quantity: number;
  update_at: string;
}

export default function RecentTransactions() {
  const [allTransactions, setAllTransactions] = useState<Array>([]);

  useEffect(() => {
    async function allTransactions() {
      const data = await getSupabaseData("all_transactions");
      setAllTransactions(data);
      console.log(data);
    }
    allTransactions();
  }, []);

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {allTransactions.map((transaction: TransactionProps) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">
                  {transaction.created_at}
                </p>
              </div>
              <p
                className={`font-medium ${transaction.price < 0 ? "text-green-600" : "text-red-600"}`}
              >
                {transaction.price > 0 ? "-" : ""}
                {transaction.price}
              </p>
            </li>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

/*
<ul className="space-y-4">
{[
  { name: "Grocery Store", amount: -85.32, date: "2023-09-22" },
  { name: "Salary Deposit", amount: 3500.0, date: "2023-09-20" },
  { name: "Electric Bill", amount: -120.5, date: "2023-09-18" },
  { name: "Online Shopping", amount: -65.99, date: "2023-09-15" },
].map(
))}
</ul>

*/
