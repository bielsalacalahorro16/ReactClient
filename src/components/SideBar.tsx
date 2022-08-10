import { Col } from "antd";

const SideBar = () => {
  return (
    <Col span={6}>
      <div style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
        <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
          Customer Dashboard
        </h2>
        <h3 style={{ textAlign: "center" }}>
          Modify data related to the customer
        </h3>
      </div>
    </Col>
  );
};

export default SideBar;
