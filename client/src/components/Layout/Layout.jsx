import { Container } from "react-bootstrap";

import { Navbar, Footer } from "..";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
