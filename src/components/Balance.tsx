import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// prop
interface BalanceProp {
  totalBalance: number;
}

export default function Balance({ totalBalance }: BalanceProp) {
  return (
    <section>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Checking</CardTitle>
          <CardDescription>Available funds</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{totalBalance}</p>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Saving</CardTitle>
          <CardDescription>Available funds</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{totalBalance}</p>
        </CardContent>
      </Card>
    </section>
  );
}
