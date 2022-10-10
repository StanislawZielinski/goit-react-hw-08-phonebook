import { useDispatch} from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';
import { useLoginMutation } from "redux/apiSlice";
import Notiflix from 'notiflix';
import { addUser } from '../../redux/userSlice';
import { addToken } from '../../redux/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/isLoggedSlice';
export const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login] = useLoginMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailDOM = document.getElementById("email");
        const passwordDOM = document.getElementById("password");
        const email = emailDOM.value;
        const password = passwordDOM.value
 
        const canLogin = [email, password].every(Boolean);
        console.log(canLogin);
        const credentials = {email, password};
        if (canLogin) {
            try {
                Notiflix.Loading.standard('wait...');
                Notiflix.Loading.remove(2000);
                await login(credentials).unwrap().then(
                    ({token}) => {if (token !== undefined) {
                        dispatch(addToken(token));
                        dispatch(logIn(true));
                        dispatch(addUser(email,password))}
                    else {
                        Notiflix.Notify.failure(`Something went wrong. Pleasw try again`);
                        return
                    }}
                    ) ;
                }
            catch (error) {
                alert("error");
                return
            }
        };

        const form = document.getElementById("form");  
        form.reset();

        await navigate("/contacts", { replace: true });
    };

    return ( 
    <>
    <form onSubmit={handleSubmit} id="form">
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

        <Button variant="outline-primary" type='submit'>Log in</Button>
      </form>
      </>
    )
}