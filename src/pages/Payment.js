import { Button, Space, Steps, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PlaceOrder from "../components/payment/steps/place on order/PlaceOrder";
import ShippingPayment from "../components/payment/steps/shipping & payment/ShippingPayment";
import { addOrder } from "../redux";

const Payment = () => {
  const dispatch = useDispatch();
  const steps = [
    {
      title: "Shipping and Payment",
      content: <ShippingPayment />,
    },
    {
      title: "Place an Order",
      content: <PlaceOrder />,
    },
  ];
  const { Title } = Typography;
  const [current, setCurrent] = useState(0);
  const next = () => {
    localStorage.getItem("ShippingAddress") && setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <Space direction="vertical" className="Payment">
      <Title level={3}>Review Order</Title>
      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
            // <ButtonItem type="primary" onClick={() => next()} name=' Review Order' />
            <Button type="primary" onClick={() => next()}>
              Review Order
            </Button>
          )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => 
              dispatch(addOrder())}>Place Order</Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </Space>
  );
};

export default Payment;
