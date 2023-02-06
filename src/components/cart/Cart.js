import { Col, Row } from "antd";
import React from "react";
import CartList from "./List/CartList";
import BoxTotal from "./total/BoxTotal";

const Cart = () => {
  return (
    <Row>
      <Col flex={10}><CartList/></Col>
      <Col flex={2}><BoxTotal/></Col>
    </Row>
  );
};

export default Cart;
