import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Dashboard() {
  return (
    <>
      <section className="flex flex-wrap gap-4">
       <Card className="w-full md:w-1/2 lg:w-1/3 py-6">
        <CardHeader>
          <CardTitle>Balanço Total</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p  className="text-4xl font-bold">R$ 2850,00</p>
          <p><span className="text-green-500">+8%</span> que o mês anterior</p>
        </CardContent>
       </Card>
       <article className="w-full md:w-1/2 lg:w-1/3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Receitas</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Despesas</CardTitle>
          </CardHeader>
        </Card>
       </article>
      </section>
    </>
  );
}
