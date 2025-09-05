import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Tabs,
  Tab,
  Card,
  InputGroup,
} from "react-bootstrap";
import { useEffect } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [key, setKey] = useState<string>("signin");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
  }, [location.pathname]);

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "100%", maxWidth: "400px" }} className="p-4 shadow">
        <Tabs
          activeKey={key}
          onSelect={(k: string | null) => setKey(k ?? "signin")}
          className="mb-3"
        >
          <Tab eventKey="signin" title="Sign In" />
          <Tab eventKey="create" title="Create Account" />
        </Tabs>

        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputGroup>
          </Form.Group>

          <Button variant="primary" className="w-100" onClick={handleLogin}>
            Sign in
          </Button>

          <div className="text-center mt-3">
            <Button variant="link" className="p-0">
              Forgot your password?
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;
