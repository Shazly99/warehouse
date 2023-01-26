import React, { useRef, useState,useEffect } from 'react'
import { Modal, Table, Form } from 'react-bootstrap'
import Component from '../../../constants/Component'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useCallback } from 'react'
const UpdateUser = ({ show, handleClose, Userdata }) => {
    let { IDUser, UserEmail, UserName, UserPhone } = Userdata;
    // console.log(data);

    // const [email, setEmail] = useState(UserEmail);
    // const [uername, setuername] = useState(UserName);
    // const [Phone, setUserPhone] = useState(UserPhone);

    const [data, setData] = useState('');


    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const password = useRef();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Country, setCountry] = useState('');

    const onChangeHandler = (phone, country, e) => {
        setPhoneNumber(phone)
        setCountry(country.dialCode)
        console.log(phone);
        console.log(country);
    }
    const submit =useCallback (async(e) => {
        e.preventDefault()
        // handle form submission logic here
       setData({
            'IDUser': IDUser,
            'UserEmail': email.current.value,
            // 'UserPassword': password.current.value,
            'UserPhone': '+' + phoneNumber,
            'UserPhoneFlag': '+' + Country,
            'UserName': firstname.current.value + ' ' + lastname.current.value,
        })
        console.log(data);  
      },[data,phoneNumber,Country]);
    // const submit = e => {
        
              //   get().then((res) => {
        // console.log(res);
        //   }).catch((err) => {
        // console.log(err);
        //   })]
    // }

    // async function get() {
    //   let resp = await axios.post(`https://zariexpress.com/api/vendor/profile/update`, data, {
    //     headers: {
    //       'Authorization': 'Bearer ' + localStorage.getItem('token'),
    //     }
    //   }); 
    // }

    useEffect(() => {
        // submit()
    }, [])
    



    return (
        <>
            <Modal.Header closeButton className=' d-flex justify-content-center align-items-center'>
                <Modal.Title className=' w-100 text-center' >Update user</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <form onSubmit={submit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='firstname' ref={firstname} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className='mt-2' >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lastname' ref={lastname} />
                    </Form.Group>
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
                    {/* <button type="submit">submit</button> */}
            <Modal.Footer className='d-flex justify-content-center align-items-center  p-0 m-0 '>
                 <Component.ButtonBase title={"Add Sub User"} bg={"danger"} /> 
            </Modal.Footer>
                </form>
            </Modal.Body>

        </>
    )
}

export default UpdateUser
