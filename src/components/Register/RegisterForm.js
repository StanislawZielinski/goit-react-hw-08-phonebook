import { useDispatch } from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';
import { useAddNewUserMutation } from "redux/apiSlice";
import Notiflix from 'notiflix';

export const RegisterForm = () => {

    const dispatch = useDispatch();
    const [addNewUser] = useAddNewUserMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const usernameDOM = document.getElementById("username");
        const emailDOM = document.getElementById("email");
        const passwordDOM = document.getElementById("password");
        const name = usernameDOM.value;
        const email = emailDOM.value;
        const password = passwordDOM.value

        console.log(typeof(name), typeof(email), typeof(password));  
        const canSave = [name, email, password].every(Boolean);
        console.log(canSave);
        //   dispatch(
        //     register({
        //       username: username.value,
        //       email: email.value,
        //       password: password.value,
        //     })
        //   );
        if (canSave) {
            try {
                Notiflix.Loading.standard('wait...');
                Notiflix.Loading.remove(2000);
                await addNewUser({ name, email, password }).unwrap();
            }
            catch (error) {
                alert("error")
            }
        }
        const form = document.getElementById("form");  
        form.reset();
    };

    return ( 
    <>
    <form onSubmit={handleSubmit} id="form">
        <FormGroup className="mb-3" controlId="username">
            <FloatingLabel   label="Username">
                <Form.Control type="username" placeholder="Username" id='username'/>
            </FloatingLabel>
        </FormGroup>

        <FormGroup className="mb-3" controlId="email">
            <FloatingLabel  label="Email address">
                <Form.Control type="email" placeholder="name@example.com"  id='email'/>
            </FloatingLabel>
        </FormGroup>

        <FormGroup className="mb-3" controlId="password">
            <FloatingLabel  label="Password">
                <Form.Control type="password" placeholder="Password" id='password' />
            </FloatingLabel>
        </FormGroup>

        <Button variant="outline-primary" type='submit'>Register</Button>
      </form>
      </>
    )

}