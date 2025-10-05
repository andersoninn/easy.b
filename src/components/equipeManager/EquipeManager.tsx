import { account } from "@/db/modelDB";
import TeamOverviewPanel from "./TeamOverviewPanel";
import EmployeeCard from "./EmployeeCard";

export default function EquipeManager() {
  return (
    <>
      <section>
        <h1>filtar por turno </h1>
      </section>
      <section className="flex flex-wrap gap-4">
        <TeamOverviewPanel />
        {account.company.employees.map((employee) => (
          <EmployeeCard
            key={`${employee.firstName}-${employee.lastName}`}
            employee={employee}
          />
        ))}
      </section>
    </>
  );
}
