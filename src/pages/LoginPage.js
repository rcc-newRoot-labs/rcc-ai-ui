import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Tabs, Tab, Card, InputGroup } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
        <Tabs activeKey={key} onSelect={(k) => setKey(k || 'signin')} className="mb-3">
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputGroup>
          </Form.Group>

          <Button variant="primary" className="w-100" onClick={handleLogin}>
            Sign in
          </Button>

          <div className="text-center mt-3">
            <Button variant="link" className="p-0">Forgot your password?</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;
