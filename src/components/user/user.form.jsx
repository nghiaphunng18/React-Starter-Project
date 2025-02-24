import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

console.log("render out component UserForm");
const UserForm = (props) => {
  console.log("render in component UserForm");
  const { loadUser } = props;
  const [fullName, setFullName] = useState("user");
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("123456");
  const [city, setCity] = useState("ha noi");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, city);
    console.log("check res: ", res);
    if (res.data) {
      notification.success({
        message: res.message,
        description: res.message,
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.warning({
        message: res.message,
        description: res.message,
      });
    }
  };

  const resetAndCloseModal = () => {
    console.log("render when resetAndCloseModal");
    setIsModalOpen(false);
    setFullName("user");
    setEmail("user@gmail.com");
    setPassword("123456");
    setCity("ha noi");
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Users</h3>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Create User
        </Button>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleSubmitBtn}
        onCancel={resetAndCloseModal}
        maskClosable={false}
        okText={"CREATE"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>Full Name</span>
            <Input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div>
            <span>Email</span>
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <span>City</span>
            <Input
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
