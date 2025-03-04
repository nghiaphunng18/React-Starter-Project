import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  return (
    <Drawer
      title="Chi tiet user"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Full Name: {dataDetail.name}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>City: {dataDetail.city}</p>
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
