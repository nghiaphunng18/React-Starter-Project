import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import "./header.css";

import {
  AliwangwangOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  LoginOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { Menu, message } from "antd";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const location = useLocation();

  const { user, setUser } = useContext(AuthContext);
  console.log("check data user login: ", user);

  useEffect(() => {
    if (location && location.pathname) {
      const allRoutes = ["users", "books"];
      const currentRoute = allRoutes.find(
        (item) => `/${item}` === location.pathname
      );
      if (currentRoute) {
        setCurrent(currentRoute);
      } else {
        setCurrent("home");
      }
    }
  }, [location]);

  const onClickBtn = (e) => {
    setCurrent(e.key);
  };

  const handleLogout = async () => {
    // const res = await logoutAPI();
    //test
    const res = {
      data: {
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      },
    };
    if (res.data) {
      //clear data
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });

      message.success("Đăng xuất thành công");

      //redirect to home
      navigate("/");
    }
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
                label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
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
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    ></Menu>
  );
};

export default Header;
