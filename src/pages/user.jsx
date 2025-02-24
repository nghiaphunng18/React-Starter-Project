import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

console.log("render out component UserPage");
const UserPage = () => {
  console.log("render in component UserPage");
  const [dataUsers, setDataUsers] = useState([]);

  //empty array => run once
  useEffect(() => {
    console.log("check userEffect");
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};

export default UserPage;
