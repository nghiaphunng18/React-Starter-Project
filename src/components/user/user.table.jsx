import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";

console.log("render out component UserTable");
const UserTable = (props) => {
  const [IsModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const { dataUsers, loadUser } = props;
  const [dataUpdate, setDataUpdate] = useState(null);

  console.log("render in component UserTable");
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ cursor: "pointer", color: "orange" }}>
              <EditOutlined
                onClick={() => {
                  setIsModalUpdateOpen(true);
                  setDataUpdate(record);
                }}
              />
            </a>
            <a href="#" style={{ cursor: "pointer", color: "red" }}>
              <DeleteOutlined />
            </a>
          </div>
        );
      },
    },
  ];

  console.log("run render");

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        IsModalUpdateOpen={IsModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
