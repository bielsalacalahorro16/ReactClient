import { Col, Tabs } from "antd";
import CustomerDetails from "./CustomerDetails";
import ProductList from "./ProductList";
const { TabPane } = Tabs;

const DetailsPage = () => {
  return (
    <Col span={18} style={{ padding: 30 }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1">
          <CustomerDetails></CustomerDetails>
        </TabPane>
        <TabPane tab="Products" key="2">
          <ProductList></ProductList>
        </TabPane>
      </Tabs>
    </Col>
  );
};

export default DetailsPage;
