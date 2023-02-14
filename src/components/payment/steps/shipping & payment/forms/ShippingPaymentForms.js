import { Space } from "antd";
import React from "react";
// import PaymentDetails from "./PaymentDetails";
import ShippingAddress from "./ShippingAddress";

const ShippingPaymentForms = () => {
  return (
    <Space direction="vertical" className="ShippingPaymentForms">
      <ShippingAddress />
      {/* <PaymentDetails /> */}
    </Space>
  );
};

export default ShippingPaymentForms;
