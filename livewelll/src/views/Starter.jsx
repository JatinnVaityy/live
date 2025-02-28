import { Col, Row } from "reactstrap";
import SalesChart from "../components/SalesChart";
import Feeds from "../components/Feeds";

const Starter = () => {
  return (
    <div>
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
     
     
    </div>
  );
};

export default Starter;
