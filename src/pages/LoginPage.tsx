import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
  Alert,
  Spinner,
} from "react-bootstrap";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Clear form state on mount
  useEffect(() => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setError(null);
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/dashboard", { replace: true });
  }, [navigate]);

  // Clear again if route changes
  useEffect(() => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setError(null);
  }, [location.pathname]);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }
    try {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 250)); // simulate API call

      const payload = JSON.stringify({ email: email.trim() });
      if (remember) {
        localStorage.setItem("user", payload);
      } else {
        sessionStorage.setItem("user", payload);
        localStorage.setItem("user", payload);
      }

      navigate("/dashboard", { replace: true });
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLFormElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        style={{ width: "100%", maxWidth: "420px" }}
        className="p-4 shadow-sm"
      >
        <div className="d-flex align-items-center mb-3">
          <img
            src="new_root_logo.png"
            alt="newRoot Labs"
            width={64}
            height={38}
            style={{ marginRight: 8 }}
          />
          <h5 className="m-0" style={{ color: "#bf0000" }}>
            newRoot Labs
          </h5>
        </div>

        {error && (
          <Alert variant="danger" className="py-2">
            {error}
          </Alert>
        )}

        {/* Form START */}
        <Form noValidate onKeyDown={onKeyDown} autoComplete="off">
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="login-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                name="login-pass"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                autoComplete="new-password"
                required
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputGroup>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Check
              type="checkbox"
              id="remember"
              label="Remember me"
              checked={remember}
              onChange={(e) => setRemember(e.currentTarget.checked)}
            />
            <Button
              variant="link"
              className="p-0"
              onClick={(e) => e.preventDefault()}
            >
              Forgot your password?
            </Button>
          </div>

          <Button
            variant="primary"
            className="w-100"
            onClick={handleLogin}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </Form>
        {/* Form END */}
      </Card>
    </Container>
  );
};

export default LoginPage;
