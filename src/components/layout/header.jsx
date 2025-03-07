import { Link, NavLink } from "react-router-dom";
// import "./header.css";

import {
  AliwangwangOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  LoginOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { Menu } from "antd";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);
  console.log("check data user login: ", user);

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

    ...(!user.id
      ? [
          {
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: "Đăng xuất",
                key: "logout",
              },
            ],
          },
        ]
      : []),
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
