import { Button, Form, Input } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Check values form: ", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div
        style={{
          margin: "50px",
          // display: "flex",
          // flexDirection: "column",
        }}
      >
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

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "please input your name",
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
              message: "please input your name",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "please input your name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <button type="submit">Register</button> */}
        <div>
          <Button
            onClick={() => {
              form.submit();
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default RegisterPage;
