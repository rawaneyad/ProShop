import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { search } from "../../redux";
import { Link } from "react-router-dom";
const { Search } = Input;
const SearchInput = () => {
  const dispatch = useDispatch();

  const onSearch = (value) => dispatch(search(value));

  return (
    <Search
      className="Search"
      placeholder="input search text"
      allowClear
      enterButton={
        <Link to="/search">
          <SearchOutlined />
          Search
        </Link>
      }
      size="middle"
      onSearch={onSearch}
    />
  );
};

export default SearchInput;
