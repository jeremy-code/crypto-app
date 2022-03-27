import { Container, Badge } from "react-bootstrap";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className="p-5">
      <Container>
        <Badge className="px-4 text-uppercase py-2 mb-4 text-tracking">
          {title}
        </Badge>
        <h2 className="mb-4">{subtitle}</h2>
        {children}
      </Container>
    </section>
  );
};

export default Section;
