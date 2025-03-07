import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  return (
    <Drawer
      width={"40vw"}
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
          <div>
            const imageUrl = `${process.env.REACT_APP_FE_BASE_URL}/logo512.png`
            <img
              height={250}
              width={300}
              src={`${process.env.REACT_APP_FE_BASE_URL}/logo512.png`}
              alt="logo"
            />
          </div>
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
