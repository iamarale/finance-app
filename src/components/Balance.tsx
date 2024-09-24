import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Balance() {
  return (
    <section>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Account Balance</CardTitle>
          <CardDescription>Available funds</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">BALANCE HERE</p>
        </CardContent>
      </Card>
    </section>
  );
}
