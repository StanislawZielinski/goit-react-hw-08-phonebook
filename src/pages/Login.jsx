import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Login.css";

const Login = () => {
  return (
    <div className='login-wrapper'>
    <>      
    <FloatingLabel className="mb-3" controlId="username" label="Username">
        <Form.Control type="username" placeholder="Username" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button variant="outline-primary">Log in</Button>
    </>
    </div>
  );
}

export default Login;