import React from "react";
import ShippingPaymentForms from "./forms/ShippingPaymentForms";
import OrderDetails from "./order details/OrderDetails";
import "../../payment.css";
import { Col, Row } from "antd";
const ShippingPayment = () => {
  return (
    <Row className="ShippingPayment">
      <Col flex={10}>
        <ShippingPaymentForms />
      </Col>
      <Col flex={2}>
        <OrderDetails />
      </Col>
    </Row>
  );
};

export default ShippingPayment;
