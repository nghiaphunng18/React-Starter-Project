import { NavLink } from "react-router-dom";
// import "./header.css";

import {
  AppstoreOutlined,
  DesktopOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Menu } from "antd";

const Header = () => {
  const [current, setCurrent] = useState("");
  const onClickBtn = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <NavLink to={"/"}>Home</NavLink>,
      key: "home",
      icon: <DesktopOutlined />,
    },
    {
      label: <NavLink to={"/users"}>Users</NavLink>,
      key: "users",
      icon: <AppstoreOutlined />,
    },
    {
      label: <NavLink to={"/books"}>Books</NavLink>,
      key: "products",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <Menu
      onClick={onClickBtn}
      selectedKeys={{ current }}
      mode="horizontal"
      items={items}
    ></Menu>
  );
};

export default Header;
