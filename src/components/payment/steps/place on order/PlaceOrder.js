import { Col, Row } from "antd";
import React from "react";
import Address from "./Address";
import OrderDetails from "./OrderDetails";

const PlaceOrder = () => {
  return (
    <Row className="ShippingPayment">
      <Col flex={10}>
        <Address />
      </Col>
      <Col flex={2}>
        <OrderDetails />
      </Col>
    </Row>
  );
};

export default PlaceOrder;
