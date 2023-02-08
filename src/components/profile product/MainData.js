import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { Button, Rate, Space, Tag, Typography } from "antd";
import { addToCart } from "../../redux";
// import Counter from "../cart/List/Counter";
const { Text, Title } = Typography;

const MainData = () => {
  const { ProfileProduct } = useSelector((state) => state.ProfileProduct);
  const dispatch = useDispatch();
  return (
    <Space direction="vertical">
      <Space className="Title">
        <Title className="title">{ProfileProduct.profileProduct.name}</Title>
        <Title className="title">${ProfileProduct.profileProduct.price}</Title>
      </Space>

      <Text>
        Colors:{" "}
        {ProfileProduct.profileProduct.colors?.map((color) => (
          <Text key={color}>{color}, </Text>
        ))}
      </Text>
      <Space>
        {ProfileProduct.profileProduct.colors?.map((color) => (
          <Button
            key={color}
            shape="circle"
            style={{ backgroundColor: color }}
          />
        ))}
      </Space>
      <Text>Categories:</Text>
      <Space>
      {ProfileProduct.profileProduct.categories?.map((category) => (
            <Tag
              key={category}
              color="#fee853"
              // shape="circle"
              // style={{ backgroundColor: color }}
            >{category}</Tag>
      ))}
      </Space>
      <Rate disabled allowHalf value={ProfileProduct.profileProduct.rating} />
      {/* <Counter/> */}
      <Space>
        <Button icon={<Icon icon="ant-design:heart-outlined" />} />
        <Button
          type="primary"
          onClick={() => {
            dispatch(addToCart(ProfileProduct.profileProduct));
          }}
        >
          Add to cart
        </Button>
      </Space>
      <Text>{ProfileProduct.profileProduct.description}</Text>
    </Space>
  );
};

export default MainData;
