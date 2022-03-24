import react from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { Container, Row, Col } from "react-bootstrap";

const ServiceCard = ({ title, color, icon, subtitle }) => {
  return (
    <Col>
      <div
        className="bg-white p-4 text-dark rounded d-flex justify-content-between"
        style={{ maxWidth: "30rem" }}
      >
        <div className="me-4">
          <div
            className="rounded-circle p-3 d-inline-block w-h-100"
            style={{ backgroundColor: color }}
          >
            {react.createElement(icon, { color: "white", size: "50" })}
          </div>
        </div>
        <div>
          <h3>{title}</h3>
          <p className="mb-0">{subtitle}</p>
        </div>
      </div>
    </Col>
  );
};

const Services = () => {
  return (
    <div className="bg-dark py-5 text-white">
      <Container>
        <Row xs={1} sm={1} md={2}>
          <Col className="d-flex align-items-center">
            <h1 className="mb-5">Services that we continue to improve</h1>
          </Col>
          <Col>
            <Row className="gy-3" xl={1}>
              <ServiceCard
                color="#2952E3"
                icon={BsShieldFillCheck}
                title="Security Guaranteed"
                subtitle="Security is our top priority. We use the latest security technologies to protect your data."
              />
              <ServiceCard
                color="#8945F8"
                title="Best exchange rates"
                icon={BiSearchAlt}
                subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
              />
              <ServiceCard
                color="#F84550"
                title="Fastest transactions"
                icon={RiHeart2Fill}
                subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
