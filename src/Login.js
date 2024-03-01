import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import {account} from './appWrite-config'

function Login() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showLoader, setShowLoader] = useState(false);



    const login = async () => {
        if (userEmail === "" || userPwd === "") {
            alert("Please fill all values");
        }
        else {

            if (!userEmail.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                setIsValidEmail(false);
                return;
            }
            setIsValidEmail(true);
            try {
                setShowLoader(true);
                var res = await account.createEmailSession(userEmail, userPwd);
                console.log(res);
                navigate('/');
                setShowLoader(false);

            } catch (error) {
                setShowLoader(false);
                alert(error);

            }
        }

    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Loader showLoader={showLoader} />
            <div className="card signup-card"> {/* Apply card-like design */}
                <Form className='p-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(event) => { setUserEmail(event.target.value); setIsValidEmail(true) }}
                            isInvalid={!isValidEmail} />

                        {!isValidEmail && (
                            <Form.Control.Feedback type="invalid">
                                Opps! Please enter a valid email address.
                            </Form.Control.Feedback>
                        )}                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={userPwd} onChange={(e) => setUserPwd(e.target.value)} />
                    </Form.Group>

                    <div className="text-end">
                        <Button variant="primary" onClick={() => login()}>
                            Login
                        </Button>
                    </div>
                </Form>
                <div className="text-center mt-3">
                    <p>
                        Don't have an account? <Link to="/signup">Register</Link>
                    </p>
                    <p className='disabled'>
                        <Link to="#">Forgot Password?</Link>
                    </p>
                </div>
            </div>
        </Container >
    );
}

export default Login;
