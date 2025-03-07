import { ArrowRightOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [isLoadingFormLogin, setIsLoadingFormLogin] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const onFinish = async (values) => {
    setIsLoadingFormLogin(true);
    console.log("heck values: ", values);
    // const res = await loginAPI(values.email, values.password);
    const res = {
      data: {
        email: "john.doe@example.com",
        phone: "+1234567890",
        fullName: "John Doe",
        role: "Admin",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        id: "USR123456",
      },
    };

    if (res.data) {
      message.success("Đăng nhập thành công");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(res.data);
      navigate("/");
    } else {
      notification.error({
        message: "Đăng nhập thất bại",
        description: JSON.stringify(res.message),
      });
    }
    setIsLoadingFormLogin(false);
  };

  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Đăng nhập</legend>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Email không được để trống!",
                },
                {
                  type: "email",
                  message: "Email không đúng định dạng!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password không được để trống!",
                },
              ]}
            >
              <Input.Password
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    form.submit();
                  }
                }}
              />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  loading={isLoadingFormLogin}
                  type="primary"
                  onClick={() => form.submit()}
                >
                  Login
                </Button>
                <Link to="/">
                  Go to homepage <ArrowRightOutlined />
                </Link>
              </div>
            </Form.Item>
          </Form>
          <Divider />
          <div style={{ textAlign: "center" }}>
            Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
