import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { Icon } from "..";

const NavbarItem = ({ title, link }) => {
  return (
    <NavLink
      to={link}
      className="nav-link me-3"
      style={({ isActive }) => {
        return {
          color: isActive ? "fff" : "939398",
        };
      }}
    >
      {title}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <BsNavbar variant="dark" expand="lg">
      <Container className="py-3">
        <BsNavbar.Brand className="d-flex align-items-center">
          <Icon icon={<FaCode />} size="1.5em" color="#4338CA" />
          <Link to="/" className="ms-3 text-white text-decoration-none ">
            <strong>Crypto App</strong>
          </Link>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { title: "Transfer", link: "/" },
              { title: "Cryptocurrencies", link: "/cryptocurrencies" },
              { title: "Exchanges", link: "/exchanges" },
              { title: "News", link: "/news" },
            ].map((item, index) => (
              <NavbarItem key={index} {...item} />
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
