// modelDB.ts

export type Permission = 'owner' | 'manager' | 'user'
export type AbsenceType = 'justified' | 'unjustified'

/**
 * Representa uma ausência justificada ou injustificada.
 */
export interface Absence {
  date: string // ISO format: "2025-10-05"
  type: AbsenceType
}

/**
 * Representa um atraso (tardiness).
 */
export interface Tardiness {
  date: string
  type: AbsenceType
  checkInTime: string // ex: "08:15"
  hourOfTardiness: number // ex: 0.25 = 15 minutos
}

/**
 * Representa o registro de fardas (uniformes).
 */
export interface UniformRecord {
  items: string[]
  receivedAt: string
}

/**
 * Representa o registro de EPIs (Equipamentos de Proteção Individual).
 */
export interface EpiRecord {
  items: string[]
  receivedAt: string
}

/**
 * Representa as informações contratuais do funcionário.
 */
export interface Contract {
  type: string // ex: "Tempo integral", "Temporário"
  startDate: string
  endDate: string
  monthsDuration?: number
  daysDuration?: number
  renewalInMonths?: number
  renewalInDays?: number
  contractorCompany: 'ecoiberia' | 'terceirizada'
  pdfFile?: string // caminho do arquivo
}

/**
 * Representa um funcionário da empresa.
 */
export interface Employee {
  firstName: string
  lastName: string
  gender: 'male' | 'female' | 'other'
  position: string
  permission: Permission
  email: string
  password: string
  age: {
    dateOfBirth: string // ex: "1993-03-24"
  }
  shift: number
  locker: number
  absences: Absence[]
  tardiness: Tardiness[]
  uniform?: UniformRecord
  epi?: EpiRecord
  contract?: Contract
}

/**
 * Representa a empresa principal.
 */
export interface Company {
  name: string
  nif: string
  employees: Employee[]
}

/**
 * Representa o usuário principal do sistema.
 */
export interface Owner {
  firstName: string
  lastName: string
  permission: Permission
  email: string
  password: string
  age: number
  company: Company
}
