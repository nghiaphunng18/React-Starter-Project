import { Button, Input } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("user-name");
  const [email, setEmail] = useState("user-name");
  const [password, setPassword] = useState("user-name");
  const [phone, setPhone] = useState("user-name");

  const handleClick = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    console.log("check res: ", res);
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
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
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleClick} type="primary">
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
