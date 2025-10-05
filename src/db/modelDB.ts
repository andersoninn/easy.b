import { employees } from "./Employees";
import { Owner } from "./types";

export const account: Owner = {
  firstName: "Bruno",
  lastName: "Carvalho",
  permission: "owner",
  email: "anderson@example.com",
  password: "123456",
  age: 31,
  company: {
    name: "Eco Iberia",
    nif: "516516516516",
    employees: employees,
  },
};

// Fardas :{ itens..., data do recebimento}
// Epi { itens... data do recebimento}
// Tipo de contrato - 
// Tempo de contrato - inicio/fim (calculo meses e dias)
// Tempo para renovação - calculo de meses e dias.
// Empresa contratente - ecoiberia | terceirizada
// Contrato (arquivo pdf)