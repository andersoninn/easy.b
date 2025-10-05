import { ChartAreaDefault } from "../dashboard/TotalBalanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function TeamOverviewPanel() {
  return (
    <>
      {/* CRIAR UM OVERVIEW DA EQUIPE */}
      <Card className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(66.666%-1rem)]  rounded-lg p-4">
        <CardHeader className="flex justify-between items-center px-4">
          <CardTitle className="font-light">Overview da Equipe</CardTitle>
          <span>...</span>
        </CardHeader>
        <CardContent className="flex gap-0 px-4 mt-2">
          <article className="w-2/3 flex flex-col gap-1">
            <p className="text-4xl font-bold">100%</p>
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
