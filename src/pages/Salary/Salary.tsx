import React from "react";
import { connect } from "react-redux";
import SalaryForm from "./SalaryForm";
import SalaryCalculated from "./SalaryCalculated";
import { Row, Col, Container } from "reactstrap";
import "./style.scss";

export const User = (props: any) => {
  return (
    <Container>
      <Col sm="6">
        <Row>
          <SalaryForm />
        </Row>
        <Row>
          <SalaryCalculated />
        </Row>
      </Col>
    </Container>
  );
};

export default connect(null)(User);
