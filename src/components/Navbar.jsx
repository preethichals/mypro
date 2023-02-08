import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser, FaRegHeart, FaShoppingBag, FaHeart } from "react-icons/fa";

function Topbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow mb-4" sticky="top"  >
      <Container>
        <Navbar.Brand href="#home">Silvia Mellon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-uppercase fw-semibold" href="#home">Home</Nav.Link>
            <Nav.Link className="text-uppercase fw-semibold" href="#">Men</Nav.Link>
            <Nav.Link className="text-uppercase fw-semibold" href="#">Women</Nav.Link>
            <Nav.Link className="text-uppercase fw-semibold" href="#link">Kids</Nav.Link>
            <Nav.Link className="text-uppercase fw-semibold" href="#link">Home & Living</Nav.Link>
            <Nav.Link className="text-uppercase fw-semibold" href="#link">Beauty</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
              Features
              <Badge className="m-1">
                <span>Hot</span>
              </Badge>
            </Nav.Link>{" "}
          </Nav>

          <form className="d-flex flex-row-reverse m-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products, brand and more"
              aria-label="Search"
            />
          </form>

          <div className="d-flex pl-1">
            <div className="d-flex align-items-center flex-column p-1 mx-1">
              <span>
                <FaUser />
              </span>
              <span>Profile</span>
            </div>
            <div className="d-flex align-items-center flex-column p-1 mx-1">
              <span>
                <FaHeart />
              </span>
              <span>Wishlist</span>
            </div>
            <div className="d-flex align-items-center flex-column p-1 mx-1">
              <span>
                <FaShoppingBag />
              </span>
              <span>Cart</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
