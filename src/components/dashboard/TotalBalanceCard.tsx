import { Card, CardTitle, CardHeader, CardContent } from "../ui/card";
import { ChartAreaDefault } from "./TotalBalanceChart";

export default function TotalBalanceCard() {
  return (
    <>
      <Card className="w-full md:w-1/2 lg:w-1/3">
        <CardHeader className="flex justify-between items-center px-4">
          <CardTitle className="font-light">Balanço Total</CardTitle>
          <span>...</span>
        </CardHeader>
        <CardContent className="flex gap-0 px-4 mt-2">
          <article className="w-2/3 flex flex-col gap-1">
            <p className="text-4xl font-bold">R$ 2850,00</p>
            <p>
              <span className="text-green-500 font-semibold">+8%</span> que o
              mês anterior
            </p>
          </article>
          <article className="w-2/4 overflow-hidden -mt-4">
            <ChartAreaDefault />
          </article>
        </CardContent>
      </Card>
    </>
  );
}
