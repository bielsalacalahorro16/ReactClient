import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
import ICustomer from "../Library/interfaces/ICustomer";
import { customerData } from "../Library/helpers/data";

const CustomerDetails = ({ isVisible }: any) => {
  const [customer, setCustomer] = useState<ICustomer>(customerData);




  return (
    <>
      <Card title="General Information" bordered={false}>
        <div>
          <span style={{ marginLeft: "6px" }}>
            <strong>Name: </strong>
            {customer.name}
          </span>
        </div>
        <div>
          <span style={{ marginLeft: "6px" }}>
            <strong>Customer Id: </strong>
            {customer.customerId}
          </span>
        </div>
        <div>
          <span style={{ marginLeft: "6px" }}>
            <strong>Document number: </strong>
            {customer.docNum}
          </span>
        </div>
        <div>
          <span style={{ marginLeft: "6px" }}>
            <strong>Document type: </strong>
            {customer.docType}
          </span>
        </div>
        <div>
          <span style={{ marginLeft: "6px" }}>
            <strong>Family: </strong>
            {customer.familyName}
          </span>
        </div>
      </Card>
      <Card title="Contact Information" bordered={false}>
        <div>
          <span style={{ marginLeft: "6px" }}>
            <strong>Phone: </strong>
            {customer.phone}
          </span>
        </div>
        <div>
          <span style={{ marginLeft: "6px" }}>
            <strong>Email: </strong>
            {customer.email}
          </span>
        </div>
      </Card>
      <a href="#" onClick={showModal}>
        <EditOutlined
          height="100px"
          style={{
            position: "absolute",
            right: 50,
            bottom: 50,
            fontSize: "45px",
          }}
        />
      </a>
    </>
  );
};

export default CustomerDetails;
