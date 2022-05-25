//Done by Merna
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoginScreen from "../LoginScreen/LoginScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./LandingStyles.css";

const LandingPage = () => {

  return (
    <>
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                {/* welcoming message */}
                <h1 className="title">Welcome to our Football Card Game</h1>
              </div>
              <div className="buttonContainer">
              {/* // option to go to login page */}
                <Link to="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </Link>
               {/* // option to go to register page */}
                <Link to="/register">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="landingbutton"
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
