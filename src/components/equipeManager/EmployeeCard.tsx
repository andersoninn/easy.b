import { ChevronDown, Square, SquarePen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TruncatedText } from "@/helpers/TruncateText";
import { Employee } from "@/db/types";
import UserAvatar from "../UserAvatar";

interface EmployeeCardProps {
  employee: Employee;
}
export default function EmployeeCard({
  employee: { firstName, lastName, position, email, shift, locker },
}: EmployeeCardProps) {
  return (
    <>
      {/* ACRESCENTAR DADOS RELEVANTES, SE FOR UM MANAGER OU UM OWNER ABRIR MODAL DE COM TODOS OS DADOS PARA EDIÇÃO */}
      <Card className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] h-full max-h-40 rounded-lg p-4">
        <CardHeader className="flex justify-between items-center px-0">
          <CardTitle className="font-bold flex flex-col">
            <TruncatedText text={`${firstName} ${lastName}`} maxLength={50} />
            <article className="flex gap-4 ">
              <TruncatedText
                text={position}
                maxLength={50}
                className="text-sm text-gray-500 font-light"
              />
              <div className="text-sm text-gray-500 font-light">
                - Turno: <span>{shift}</span>
              </div>
            </article>
          </CardTitle>
          <article className=" rounded-sm overflow-hidden bg-gray-300">
            <UserAvatar
              firstName={firstName}
              lastName={lastName}
              classNames="w-12 h-12"
            />
          </article>
        </CardHeader>
        <CardContent className="flex gap-0 px-0 flex-col">
          <p>
            Cacico: <span>{locker}</span>
          </p>
        </CardContent>

        <article className="flex flex-col items-start mr-2">
          Acrescentar dados relevantes
        </article>
        <ChevronDown />
      </Card>
    </>
  );
}
