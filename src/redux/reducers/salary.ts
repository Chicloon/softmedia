import { CALCULATE } from "../actionTypes/salaryTypes";
import { SalaryCalculated, SalaryData, SalaryTypes } from "../actions/salary/types.d";

const MROT = 20195;

const INITIAL_STATE: SalaryData = {
  emploeeSalary: 0,
  VAT: 0,
  companyExpenses: 0,
  type: "mounth",
};

function salaryReducer(state = INITIAL_STATE, action: SalaryTypes): SalaryCalculated {
  switch (action.type) {
    case CALCULATE: {
      const {
        payload: { payment, type, vat },
      } = action;

      const currentPayment =
        type === "mrot" ? MROT : payment && parseInt(payment.replace(/\s/g, ""));
      const emploeeSalary = currentPayment;
      const VAT = emploeeSalary * 0.13;
      const companyExpenses = vat ? currentPayment + VAT : currentPayment;
      return {
        ...state,
        emploeeSalary,
        VAT,
        companyExpenses,
        type,
      };
    }
    default:
      return state;
  }
}

export default salaryReducer;
