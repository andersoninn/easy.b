import IncomeExpenseCard from "./IncomeExpenseCard";
import TotalBalanceCard from "./TotalBalanceCard";
import { ChartAreaDefault } from "./TotalBalanceChart";

export default function Dashboard() {
  return (
    <>
      <section className="flex flex-wrap gap-4">
        <TotalBalanceCard />
        <IncomeExpenseCard />
      </section>
    </>
  );
}
