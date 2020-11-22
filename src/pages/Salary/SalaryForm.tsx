import React, { useState } from "react";
import { Field, InjectedFormProps, reduxForm, change, getFormValues } from "redux-form";
import { Col, CustomInput, Form, FormGroup, FormText, Tooltip } from "reactstrap";
import { connect, useSelector } from "react-redux";
import { calculateSalary } from "../../redux/actions/salary/calculate";
import { InfoCircle, XCircle } from "react-bootstrap-icons";
import { addExponents, perValue } from "../../utils";

interface Props {}

const SalaryForm: React.FC<Props & InjectedFormProps> = (props: any) => {
  const [showInfo, setShowInfo] = useState<boolean>();
  const [tooltip, setTooltip] = useState<boolean>();
  const { dispatch } = props;
  const formValues = useSelector(
    (state: any) => state.form && state.form.SalaryForm && state.form.SalaryForm.values
  );

  const onChange = () => {
    if (!formValues) {
      return;
    }
    // dispatch(calculateSalary(formValues));
  };

  dispatch(calculateSalary(formValues));
  const formExponents = (payment: string) => {
    let final = "";
    for (let symbol of payment) {
      if (!isNaN(+symbol)) {
        final += symbol;
      }
    }

    return addExponents(final.replace(/\s/g, ""));
  };

  const info = (
    <>
      <span id="Info" className="info-icon">
        {showInfo ? (
          <XCircle onClick={() => setShowInfo(false)} />
        ) : (
          <InfoCircle onClick={() => setShowInfo(true)} />
        )}
      </span>
      <Tooltip
        className="info-tooltip"
        placement="bottom-start"
        isOpen={tooltip || showInfo}
        target="Info"
        toggle={() => !showInfo && setTooltip(!tooltip)}
      >
        МРОТ - минимальный размер оплаты труда. Разный для разных регионов
      </Tooltip>
    </>
  );
  return (
    <Form className="salary-form">
      <FormText color="muted">Сумма</FormText>
      <FormGroup tag="fieldset" row className="salary">
        <Col sm="10">
          <FormGroup check className="field">
            <Field
              name="type"
              type="radio"
              value="mounth"
              component={(field: any) => (
                <CustomInput
                  {...field.input}
                  type="radio"
                  id={field.input.value}
                  label="Оклад за месяц"
                />
              )}
            />
          </FormGroup>
          <FormGroup check className="field">
            <Field
              name="type"
              type="radio"
              value="mrot"
              component={(field: any) => (
                <>
                  <CustomInput {...field.input} type="radio" id={field.input.value} label="МРОТ">
                    {info}
                  </CustomInput>
                </>
              )}
            />
          </FormGroup>
          <FormGroup check className="field">
            <Field
              name="type"
              value="day"
              type="radio"
              component={(field: any) => (
                <CustomInput
                  {...field.input}
                  type="radio"
                  id={field.input.value}
                  label="Оплата за день"
                />
              )}
            />
          </FormGroup>
          <FormGroup check className="field">
            <Field
              name="type"
              value="hour"
              type="radio"
              component={(field: any) => (
                <CustomInput
                  {...field.input}
                  type="radio"
                  id={field.input.value}
                  label="Оплата за час"
                />
              )}
            />
          </FormGroup>
          <div className="vat-payment">
            <FormGroup check>
              <div className={`vat-field ${formValues.vat ? "vat-field__on" : ""}`}>
                <span>Указать с НДФЛ</span>
                <Field
                  name="vat"
                  value={true}
                  type="radio"
                  component={(field: any) => (
                    <CustomInput {...field.input} type="switch" id="vat" label="Без НДФЛ" />
                  )}
                />
              </div>
            </FormGroup>
            {formValues.type !== "mrot" && (
              <FormGroup check className="field-input">
                <Field normalize={formExponents} name="payment" component="input" />
                <span className="ruble-sign">&#x20bd; {perValue(formValues.type)}</span>
              </FormGroup>
            )}
          </div>
        </Col>
      </FormGroup>
    </Form>
  );
};

const form = reduxForm<{}, Props>({
  form: "SalaryForm",
})(SalaryForm);

export default connect((state) => ({
  initialValues: { type: "mounth", vat: false },
  formValues: getFormValues("SalaryForm")(state),
}))(form);
