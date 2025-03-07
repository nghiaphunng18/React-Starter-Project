import "./components/todo/todo.css";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service.js";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context.jsx";
import { Spin } from "antd";

const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    // const res = await getAccountAPI();

    //test
    const res = {
      data: {
        user: {
          email: "john.doe@example.com",
          phone: "+1234567890",
          fullName: "John Doe",
          role: "Admin",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          id: "USR123456",
        },
      },
    };
    if (res.data) {
      //success
      setUser(res.data.user);
      console.log("check user info login: ", res);
    }
    setIsAppLoading(false);
  };

  return (
    <>
      {isAppLoading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Header />

          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
