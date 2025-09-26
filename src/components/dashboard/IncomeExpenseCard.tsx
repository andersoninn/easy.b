import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function IncomeExpenseCard() {
  return (
    <>
     <section className="w-full md:w-1/2 lg:w-1/3 gap-4 h-full">
          <article className="w-full flex gap-4">
            <Card className="w-full">
              <CardHeader className="flex justify-between items-center px-4">
                <CardTitle className="font-light">Receita</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 px-4 mt-2">
                <article className="w-2/3 flex flex-col gap-1">
                  <p className="text-2xl font-bold text-nowrap">R$ 150,00</p>
                  <p>
                    <span className="text-green-500 font-semibold">+8%</span> vs
                    mês anterior
                  </p>
                </article>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex justify-between items-center px-4">
                <CardTitle className="font-light">Despesa</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 px-4 mt-2">
                <article className="w-2/3 flex flex-col gap-1">
                  <p className="text-2xl font-bold text-nowrap">R$ 250,00</p>
                  <p>
                    <span className="text-green-500 font-semibold">+8%</span> vs
                    mês anterior
                  </p>
                </article>
              </CardContent>
            </Card>
          </article>
        </section>
    </>
  );
}