import { getSupabaseData } from "@/api/getSupabaseData";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

export default function TransactionButtons() {
  const add = () => {};
  const sub = () => {};
  return (
    <section className="mt-24 mb-6 w-full flex flex-col gap-2">
      <div className="grid w-full items-center gap-1.5">
        <Input
          className="w-full border-slate-500 text-md"
          type="number"
          id="number"
          placeholder="number"
        />
      </div>

      <div className="flex gap-2 mb-4 ">
        <Button onClick={add} className="flex-1">
          Add
        </Button>
        <Button onClick={sub} className="flex-1">
          Remove
        </Button>
      </div>
    </section>
  );
}
