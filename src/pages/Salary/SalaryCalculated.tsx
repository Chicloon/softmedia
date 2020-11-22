import React from "react";
import { connect, useSelector } from "react-redux";
import { addExponents, perValue } from "../../utils";

const SalaryCalculated = (props: any) => {
  const salaryCalculated = useSelector((state: any) => state.salary);
  const { emploeeSalary, VAT, companyExpenses, type } = salaryCalculated;
  if (!emploeeSalary) {
    return null;
  }

  return (
    <div className="salary-calculated">
      <div className="salary-calculated-field">
        <span className="value">{addExponents(emploeeSalary)} &#x20bd;</span>
        <span className="text">{"  "} cотрудник будет получать на руки</span>
      </div>
      <div className="salary-calculated-field">
        <span className="value">{addExponents(VAT)} &#x20bd;</span>
        <span className="text">{"  "} НДФЛ, 13% от оклада</span>
      </div>
      <div className="salary-calculated-field">
        <span className="value">{addExponents(companyExpenses)} &#x20bd;</span>
        <span className="text">
          {"  "} за сотрудника в {perValue(type)}
        </span>
      </div>
    </div>
  );
};

export default connect(null)(SalaryCalculated);
