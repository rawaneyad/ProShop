import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
const SearchInput = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <Search
      className="Search"
      placeholder="input search text"
      allowClear
      enterButton={
        <>
          <SearchOutlined />
          Search
        </>
      }
      size="middle"
      onSearch={onSearch}
    />
  );
};

export default SearchInput;
