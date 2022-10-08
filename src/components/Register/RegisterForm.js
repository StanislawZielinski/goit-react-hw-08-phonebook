import { useDispatch} from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';
import { useAddNewUserMutation } from "redux/apiSlice";
import Notiflix from 'notiflix';
import { addToken } from '../../redux/tokenSlice';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

    const dispatch = useDispatch();
    console.log(addToken);
    // const tokenStore = useSelector(state=>state.token);
    // console.log(tokenStore);
    const navigate = useNavigate();
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
        const canRegister = [name, email, password].every(Boolean);
        console.log(canRegister);
        const credentials = {name, email, password};
        //   dispatch(
        //     register({
        //       username: username.value,
        //       email: email.value,
        //       password: password.value,
        //     })
        //   );
        if (canRegister) {
            try {
                Notiflix.Loading.standard('wait...');
                Notiflix.Loading.remove(2000);
                await addNewUser(credentials).unwrap().then(
                    ({token, user:{name, email}}) => {if (token !== undefined) {
                        console.log("one", token);
                        dispatch(addToken(token));
                        console.log("two")}
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