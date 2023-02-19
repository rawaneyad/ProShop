import React from "react";
import { Result, Skeleton, Space, Table, Typography } from "antd";
import { useSelector } from "react-redux";
import "./myOrder.css";
import { Link } from "react-router-dom";

const { Column } = Table;
const { Title } = Typography;

const MyOrdersList = () => {
  const { MyOrders } = useSelector((state) => state.Order);
  return (
    <Space direction="vertical" className="ListProduct">
      <Title level={3}> My Orders</Title>
      {MyOrders.isLoading ? (
        <Skeleton active />
      ) : MyOrders.error !== "" ? (
        <Result
          status="error"
          title="My Orders Failed"
          subTitle={MyOrders.error}
        />
      ) : (
        <Table dataSource={MyOrders.myOrders.orders}>
          <Column
            title="OrderId"
            dataIndex="_id"
            key="id"
            render={(text) => <Link to={`/orders/${text}`}>{text}</Link>}
          />
          <Column title="CreatedAt" dataIndex="createdAt" key="createdAt" />
          <Column title="TaxPrice" dataIndex="taxPrice" key="taxPrice" />
          <Column title="TotalPrice" dataIndex="totalPrice" key="totalPrice" />
        </Table>
      )}
    </Space>
  );
};

export default MyOrdersList;
