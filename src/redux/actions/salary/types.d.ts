export interface SalaryData {
  emploeeSalary: number;
  VAT: number;
  companyExpenses: number;
  type: string;
}

export interface SalaryAction {
  type: string;
  payload: any;
}

export interface SalaryCalculated {
  emploeeSalary: number;
  VAT: number;
  companyExpenses: number;
  type: string;
}

export type SalaryTypes = SalaryAction;
