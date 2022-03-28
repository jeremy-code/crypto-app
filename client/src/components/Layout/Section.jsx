import { Container, Badge } from "react-bootstrap";

const Section = ({ title, subtitle, children }) => {
  return (
    <section style={{paddingBlock: "min(10vh, 10rem)"}}>
      <Container>
        <Badge className="px-4 text-uppercase py-2 mb-4 text-tracking">
          {title}
        </Badge>
        <h2 className="mb-5">
          <strong>{subtitle}</strong>
        </h2>
        {children}
      </Container>
    </section>
  );
};

export default Section;
