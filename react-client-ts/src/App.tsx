import "./App.css";
import { Row } from "antd";
import SideBar from "./components/SideBar";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  return (
    <>
      <Row>
        <SideBar></SideBar>
        <DetailsPage></DetailsPage>
      </Row>
    </>
  );
};

export default App;
