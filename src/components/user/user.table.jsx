import { Table } from "antd";

const UserTable = (props) => {
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
  ];

  console.log("run render");

  return (
    <Table columns={columns} dataSource={props.dataUsers} rowKey={"_id"} />
  );
};

export default UserTable;
