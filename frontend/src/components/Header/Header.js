//Done by Merna
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { logout } from "../actions/userActions";
import {
  BrowserRouter,
  Routes,
  Route, 
  Link,
  useNavigate,
} from "react-router-dom";
// import { About } from "../About.js";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Navbar collap seOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Home Page</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">


            <Nav className="ml-auto">


              <Nav.Link onClick={logoutHandler}>
                {/* <Link to="/login"> Login</Link> */}
                Logout
              </Nav.Link>
              {/* </Nav> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
