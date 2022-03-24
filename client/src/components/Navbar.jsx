import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";
import { SiLetsencrypt } from "react-icons/si";

const NavbarItem = ({ title }) => {
  return <Nav.Link className="me-3">{title}</Nav.Link>;
};

const Navbar = () => {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container className="py-2">
        <BsNavbar.Brand href="#home" className="d-flex flex-col align-items-center">
          <span className="d-flex" style={{height: "fit-content", paddingRight: "10px"}}>
            <SiLetsencrypt />
          </span>
          Crypto App
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["Transfer", "Cryptocurrencies", "Exchanges", "News"].map(
              (item, index) => (
                <NavbarItem title={item} key={item + index} />
              )
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
