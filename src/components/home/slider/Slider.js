import React from "react";
import { Carousel, Typography, Button, Space } from "antd";
import slider1 from "../../../Image/lkjnsadlkjna.png";
import slider2 from "../../../Image/kisspng-airpods.png";
import slider3 from "../../../Image/Smartphone iPho.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Slider.css";
const { Title, Text } = Typography;
const sliderArr = [
  {
    id: 1,
    text1: "Save up to $39.99",
    text2: "Lightning-fast download speed with super-fast SSD storage",
    title: "PlayStation 5",
    img: slider1,
  },
  {
    id: 2,
    text1: "Save up to $49.99",
    text2: "AirPods are the best-selling headphones in the world",
    title: "APPLE AIRPODS",
    img: slider2,
  },
  {
    id: 3,
    text1: "Save up to $99.99",
    text2: "Pro cameras.Pro display. Pro performance.",
    title: "iPhone 11 PRO",
    img: slider3,
  },
];
const Slider = () => {
  const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
    <span {...props}>{children}</span>
);
  return (
    <Carousel
      autoplay
      dots={true}
      arrows={true}
      prevArrow={<SlickButtonFix><LeftOutlined /></SlickButtonFix>}
      nextArrow={<SlickButtonFix><RightOutlined /></SlickButtonFix>}
    >
      {sliderArr.map((item) => (
        <Space key={item.id} align="center" className="sliderBox">
          <div className="sliderData">
            <Text className="text">{item.text1}</Text>
            <Title className="title">{item.title}</Title>
            <Text className="text">{item.text2}</Text>
            <br />
            <Button type="primary">Shop now</Button>
          </div>
          <span className="mock-block">
            <img src={item.img} alt="sliderImage" />
          </span>
        </Space>
      ))}
    </Carousel>
  );
};

export default Slider;
