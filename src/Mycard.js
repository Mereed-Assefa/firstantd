import React from "react";
import { Card, Col, Row } from "antd";

const Mycard: React.FC = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Software Engineering" bordered={false}>
          4 Years
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Electrical Engineeing" bordered={false}>
          5 Years
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Chemical Engineering" bordered={false}>
          5 years
        </Card>
      </Col>
    </Row>
  </div>
);

export default Mycard;
