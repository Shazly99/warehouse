import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Img from '../../../assets/Img';
import Component from '../../../constants/Component';
import "./login.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import validationSchema from './Schema';
import SignInForm from './validationForm';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [userData, setUserData] = useState(null)
    let navigate = useNavigate()


    const userDataApi = async () => {
        if (userData) {
            let { data } = await axios.post(`https://zariexpress.com/api/vendor/login`, userData);
            if (data.Success == true) {
                localStorage.setItem("token", data.Response.AccessToken);
                toast.success(data.ApiMsgEn);
                navigate('/');
            } else {
                toast.error(data.ApiMsgEn);
            }
        }
    }

    useEffect(() => {
        userDataApi()
    }, [userData])


    return (
        <>
            <div className="app__login">
                <Container fluid >
                    <Row>
                        <Col xl={6} lg={6} xd={6} sm={12} className='vh-100'>
                            <div className='app__login-left  vh-100  '>
                                <img src={Img.loginBg} />
                                <Component.BaseHeader h1={'Sign in'} colorW="text-light" />

                                <div className="w-75" >
                                    <Formik
                                        initialValues={{ UserName: '', Password: '' }}

                                        onSubmit={values => {
                                            setUserData(values)
                                            validationSchema = { validationSchema }
                                        }}
                                    >
                                        {SignInForm}
                                    </Formik>

              

                                    {/* <div className="email ">
                                        <label htmlFor="" >Password</label>
                                        <div className="password__input d-flex">
                                            <input
                                                type={password}
                                                onChange={onPasswordChange}
                                                value={passwordInput}
                                                placeholder="Enter password"
                                                name="password"
                                                className="form-control"
                                            />
                                            <button className="btn btn-primary  password__show" onClick={toggle}>
                                                {password === "password" ? (
                                                    <svg
                                                        width="20"
                                                        height="17"
                                                        fill="currentColor"
                                                        className="bi bi-eye-slash-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="20"
                                                        height="17"
                                                        fill="currentColor"
                                                        className="bi bi-eye-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>

                                    </div>   */} 
                                </div>
                            </div>
                        </Col>

                        <Col xl={6} lg={6} xd={6} sm={12} className='avatar'>
                            <div className="app__login-right  d-flex justify-content-center align-item-end">
                                <img src={Img.avatar} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login
