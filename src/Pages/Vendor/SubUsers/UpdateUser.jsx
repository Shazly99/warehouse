import React, {  useState, useEffect, useContext } from 'react'
import { Form } from 'react-bootstrap' 
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css' 
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { VendersContext } from './../../../Api/context/VenderStore';
import { PostData, apiheader } from './../../../Api/hook/fetchData';

const UpdateUser = ({ show, handleClose, update }) => {
    let { getUsers } = useContext(VendersContext)
    let { IDUser, UserEmail, UserName, UserPhone } = update;

    const [data, setData] = useState('');
    const [emails, setEmail] = useState('');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [Phone, setUserPhone] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [Country, setCountry] = useState('');

    const onChangeHandler = (phone, country, e) => {
        setPhoneNumber(phone)
        setCountry(country.dialCode)
    }


    const submit = ((e) => {
        e.preventDefault()
        setData({
            'IDUser': IDUser,
            'UserEmail': emails,
            'UserPhone': '+' + phoneNumber,
            'UserPhoneFlag': '+' + Country,
            'UserName': firstName + ' ' + lastName,
        })
        console.log(data);
        updateSubuser()
    });

    async function updateSubuser() {
        let resp = await PostData(`${process.env.REACT_APP_BASE_URL}vendor/profile/update`, data, apiheader).then((res) => {
            getUsers()
            console.log(res.data.ApiMsgEn);
            toast.success(res.data.ApiMsgEn);

        }).catch((err) => {
            console.log(err);
            toast.success(err.data.ApiMsgEn);
        });
        console.log(resp.data);
    }


    useEffect(() => { 
        setEmail(UserEmail);
        setFirst(UserName?.split(' ')[0]);
        setUserPhone(UserPhone);
        setLast(UserName?.split(' ')[1])
        setUserPhone(UserPhone)
        console.log(data);
        
    }, [update, data])


    return (
        <>


            <div className="modal-header ">
                <h1 className="modal-title fs-5  w-100 text-center" id="staticBackdropLabel">Update user</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="model-body   px-3">
                <form onSubmit={submit}>
                    <Form.Group controlId="formBasicEmail" className='d-flex flex-column justify-content-end align-items-start '>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='firstname' value={firstName} onChange={event => setFirst(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className='mt-2 d-flex flex-column justify-content-end align-items-start ' >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lastname' value={lastName} onChange={event => setLast(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mt-2 d-flex flex-column justify-content-end align-items-start ">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' value={emails} onChange={event => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mt-2 d-flex flex-column justify-content-end align-items-start ">
                        <Form.Label>Mobile</Form.Label>
                        <PhoneInput
                            country='eg'
                            // onlyCountries={['eg', 'sa']} 
                            dropdownClass='d-flex flex-column  align-items-start overflow-hidden     '
                            preferredCountries={['eg', 'sa']}
                            searchClass='w-100  '
                            value={Phone}
                            onChange={onChangeHandler}
                            enableSearch
                            searchPlaceholder="Country number..."
                            containerClass=" ease-linear duration-150 p-1 placeholder-gray-400 text-gray-700 w-100  rounded text-sm  focus:outline-none focus:shadow-outline w-full"
                            inputStyle={{ border: 'none' }}
                            buttonStyle={{ border: 'none' }}
                            buttonClass="rounded  bg-white "
                            inputClass='w-100 px-5'
                        />
                    </Form.Group>
                    <div className="modal-footer d-flex justify-content-center align-item-center  ">
                        <button data-bs-dismiss="modal" className='btn btn-danger '>Update Password</button>
                    </div>
                </form>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 3000,
                    style: {
                        fontFamily: ' Arial, Helvetica, sans-serif',
                        textTransform: 'capitalize',
                        zIndex: '9999',
                        background: '#fff',
                        color: '#000',
                    },
                }}
                containerStyle={{
                    top: 60
                }}
            />
        </>
    )
}

export default UpdateUser
