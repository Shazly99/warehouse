import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Component from '../../../constants/Component';
import { Col, FloatingLabel, Modal, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import './Profile.scss'
import axios from 'axios';
import Icons from '../../../constants/Icons';
import { useParams } from 'react-router-dom';

function Profile() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [data, setData] = useState({});


  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Country, setCountry] = useState({});
  const { id } = useParams()
  
  const onChangeHandler = (phone, country, e) => {
    setPhoneNumber(phone)
    setCountry(country.dialCode)
    
  }

  const submit = e => {
    e.preventDefault()
    setData({
      'IDUser': id,
      'UserEmail': email.current.value,
      'UserPassword': password.current.value,
      'UserPhone': '+' + phoneNumber,
      'UserPhoneFlag': '+' + Country,
      'UserName': firstname.current.value + ' ' + lastname.current.value,
    })
    // console.log(data);
    get().then((res) => {
      
    }).catch((err) => {
      
    })
  }

  async function get() {
    let resp = await axios.post(`https://zariexpress.com/api/vendor/profile/update`, data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    }); 
  }


  
  const [updatePass, setPassword] = useState({})
  
  const updateData = e => {
    setPassword({
      ...updatePass,
      [e.target.name]: e.target.value,
      IDUser:id
    })
  }


   const updatePassword = async (e) => {
    e.preventDefault()
    let {data}=await axios.post(`https://zariexpress.com/api/vendor/password/update`, updatePass, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    })
  }
  async function details() {
    let resp = await axios.post(`https://zariexpress.com/api/vendor/users/details/${id}`, {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    }); 
  }
  useEffect(() => {
    details().then((res)=>{
    }).catch((err)=>{
    })
  }, [data, phoneNumber])

  return (
    <>
      <div className="app__profile px-2">
        <Component.BaseHeader h1={'Personal Information'} />
        <div className="app__addOrder-form ">
          <form onSubmit={submit}>
            <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="app__addOrder-form-left">

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name='firstname'    ref={firstname} />
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
              <Component.ButtonBase title={"Add Sub User"} bg={"danger"} icon={<Icons.add />} />
            </div>
          </form>
        </div>

        <div className="pp__profile-model">
          <a className='app__profile-model-a' onClick={handleShow}>
            Change Password
          </a>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className=' d-flex justify-content-center align-items-center'>
              <Modal.Title className=' w-100 text-center' >Change Password</Modal.Title>
            </Modal.Header>
            <form onSubmit={updatePassword}>
              <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control type="password" name='OldPassword' onChange={updateData}  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" name='NewPassword' onChange={updateData} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" name='PasswordConfirmation' onChange={updateData} />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer className='d-flex justify-content-center align-items-center  p-0 m-0 '>
                <Component.ButtonBase onclick={handleClose} title={'Update Password'} bg={'danger'} />
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Profile