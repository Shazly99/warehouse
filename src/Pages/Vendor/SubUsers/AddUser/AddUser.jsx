import axios from 'axios';
import { useEffect, useState } from 'react';
import Component from '../../../../constants/Component';
import { Col, FloatingLabel, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'; 
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css' 
import { Form } from 'react-bootstrap';
import { useRef } from 'react';
import Icons from '../../../../constants/Icons';

const AddUser = () => {
    const [data, setData] = useState({});


    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const password = useRef();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Country, setCountry] = useState({});

    const onChangeHandler = (phone, country, e) => {
        setPhoneNumber(phone)
        setCountry(country.dialCode)
    }

    const submit = e => {
        e.preventDefault()
        setData({
            'UserEmail': email.current.value,
            'UserPassword': password.current.value,
            'UserPhone': '+' + phoneNumber,
            'UserPhoneFlag': '+' + Country,
            'UserName': firstname.current.value + ' ' + lastname.current.value,
        })
        get().then((res)=>{
        }).catch((err)=>{
        })
    }
    async function get() {
        let resp = await axios.post(`https://zariexpress.com/api/vendor/users/add`, data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // setUser(resp.data.Response)
        console.log(resp);
    }

    useEffect(() => {

    }, [data, phoneNumber])

    return (
        <>
            <Container fluid>
                <div className="app_addOrder">
                    <Component.SubNav sub__nav={[{ name: "Sub Users", path: '/venderSubuser' }, { name: "Add Sub User", path: '/venderSubuser/addUser' }]} />
                    <Component.BaseHeader h1={'Add Sub user'} />
                    <div className="app__addOrder-form ">
                        <form onSubmit={submit}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} className="app__addOrder-form-left">

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name='firstname' ref={firstname} />
                                    </Form.Group>


                                    <Form.Group controlId="formBasicEmail" className='mt-2' >
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name='lastname' ref={lastname} />
                                    </Form.Group>

                                    <div className="mt-2">
                                        <Form.Label>   Access Type</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Access Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>

                                </Col>

                                <Col xl={6} lg={6} md={6} sm={12} className="app__addOrder-form-right">

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email' ref={email} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail" className="mt-2">
                                        <Form.Label>Mobile</Form.Label>

                                        <PhoneInput
                                            country='eg'
                                            // onlyCountries={['eg', 'sa']} 
                                            preferredCountries={['eg', 'sa']}
                                            value={phoneNumber}
                                            onChange={onChangeHandler}
                                            enableSearch
                                            searchPlaceholder="Country number..."
                                            containerClass="ease-linear duration-150 p-1 placeholder-gray-400 text-gray-700 w-100  rounded text-sm  focus:outline-none focus:shadow-outline w-full"
                                            inputStyle={{ border: 'none' }}
                                            buttonStyle={{ border: 'none' }}
                                            buttonClass="rounded "
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="mt-2">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' ref={password} />
                                    </Form.Group>

                                </Col>
                            </Row>
                            <div className='d-flex justify-content-center align-content-center my-5'>
                                <Component.ButtonBase title={"Add Sub User"} bg={"danger"} icon={<Icons.add />}   />
                            </div> 
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AddUser
