import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");

  const {
    loadUser,
    IsModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
  } = props;

  //next dataUpdate != prev dataUpdate
  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.name);
      setEmail(dataUpdate.email);
      setCity(dataUpdate.city);
    }
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, email, city);
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
    setIsModalUpdateOpen(false);
    setFullName("");
    setEmail("");
    setCity("");
    setId("");
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update a user"
      open={IsModalUpdateOpen}
      onOk={handleSubmitBtn}
      onCancel={resetAndCloseModal}
      maskClosable={false}
      okText={"SAVE"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input.Password value={id} disabled />
        </div>
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
          <span>City</span>
          <Input
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
