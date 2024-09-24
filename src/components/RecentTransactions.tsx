import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecentTransactions() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {[
              { name: "Grocery Store", amount: -85.32, date: "2023-09-22" },
              { name: "Salary Deposit", amount: 3500.0, date: "2023-09-20" },
              { name: "Electric Bill", amount: -120.5, date: "2023-09-18" },
              { name: "Online Shopping", amount: -65.99, date: "2023-09-15" },
            ].map((transaction, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p
                  className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {transaction.amount > 0 ? "+" : ""}
                  {transaction.amount.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
