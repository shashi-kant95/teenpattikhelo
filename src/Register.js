import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from './firebase-config'
import './Styles/Register.css'
import {
    doc,
    setDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { account, databases, databaseId, userDocId } from './appWrite-config';
import { ID } from "appwrite";
import Loader from './Loader';

function Register() {
    let navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userCnfPwd, setUserCnfPwd] = useState("");
    const [isValidPwd, setIsValidPwd] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showLoader, setShowLoader] = useState(false);
    const [pwdErrorMess, setPwdErrorMess] = useState("");


    const register = async () => {
        setShowLoader(true);
        if (userName === "" || userEmail === "" || userPwd === "") {
            alert("Please fill all values");
        }
        else {
            if (!userEmail.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                setIsValidEmail(false);
                setShowLoader(false);

                return;
            }
            setIsValidEmail(true);
            if(userPwd.length < 8) {
                setIsValidPwd(false);
                setShowLoader(false);
                setPwdErrorMess("Passwords must exceed 8 characters in length.")
                return;
            }
            if (userPwd !== userCnfPwd) {
                setIsValidPwd(false);
                setShowLoader(false);
                setPwdErrorMess("Opps! password not matching")
                return;
            }
            setIsValidPwd(true);
            try {
                var res = await account.create(ID.unique(), userEmail, userPwd);
                await account.createEmailSession(userEmail, userPwd);
                await addUserDetails(res.userId);
                navigate("/");
                //alert('Signup successful! Please check your email to verify your account.');
            } catch (error) {
                setShowLoader(false);
                alert(error);
            }
        }
    };

    const addUserDetails = async (id) => {
        var user = {
            userName: userName,
            balance: 1000,
            isActive: true,
            isNewUser: true,
            isUserVerified: false,
            userEmail: userEmail,
            userid: id,
            userPhone: '8999847096'
        };
        try {
            await databases.createDocument(
                databaseId,
                '65df2f5b1ce2e2091d21',
                ID.unique(),
                user
            )
            alert(userName + " Registered Successfully, Please Login!");
            setShowLoader(false);
        }
        catch (error) {
            setShowLoader(false);
            alert(error.message);
        }
    }


    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Loader showLoader={showLoader} />
            <div className="card signup-card"> {/* Apply card-like design */}
                <Form className="p-4">
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
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(event) => setUserName(event.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event) => setUserPwd(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event) => { setUserCnfPwd(event.target.value); setIsValidPwd(true) }}
                            isInvalid={!isValidPwd} />
                        {!isValidPwd && (
                            <Form.Control.Feedback type="invalid">
                                {pwdErrorMess}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="primary" onClick={() => register()}>
                            siGN UP
                        </Button>
                    </div>


                </Form>
                <div className="text-center mt-3">
                    <p>
                        Already have an account? <Link to="/login">siGN IN</Link>
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Register