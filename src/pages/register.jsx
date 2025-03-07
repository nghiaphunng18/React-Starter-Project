import { Button, Col, Form, Input, notification, Row } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Check values form: ", values);

    //call api
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );

    // const res = {
    //   data: {
    //     fullName: values.fullName,
    //     email: values.email,
    //     password: values.password,
    //     phone: values.phone,
    //   },
    // };

    if (res.data) {
      notification.success({
        message: "Register user",
        description: "register user successfully",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Register user error",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ margin: "10px" }}
    >
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "please input your name",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "please input your email",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "please input your password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                pattern: new RegExp(/\d+/g),
                message: "format phone error",
              },
              {
                required: true,
                message: "please input your phone",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <div>
            <Button
              onClick={() => {
                form.submit();
              }}
            >
              Register
            </Button>
            {/* <Button
            onClick={() => {
              form.setFieldsValue({
                email: "user1@gmail.com",
              });

              console.log("check form: ", form.getFieldsValue());
            }}
          >
            Test
          </Button> */}
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default RegisterPage;
