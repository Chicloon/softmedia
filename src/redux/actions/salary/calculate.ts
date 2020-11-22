import { CALCULATE } from "../../actionTypes/salaryTypes";

export const calculateSalary = (data: any) => ({
  payload: data,
  type: CALCULATE,
});
