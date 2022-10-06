import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./Login.css";

const Login = ()=> {
  return (
    <div className='login-wrapper'>
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 car"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
    </div>
  );
}

export default Login;