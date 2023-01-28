import React, { useContext } from 'react'
import data from './data.js';
import { Modal, Table, Form } from 'react-bootstrap'
import Icons from '../../../constants/Icons.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useFetch from './../../../Api/hook/useFetch';
import { Link } from 'react-router-dom';
import { VendersContext } from './../../../Api/context/VenderStore';
import Component from '../../../constants/Component.js';
import UpdateUser from './UpdateUser.jsx';

const UserTable = () => {
    let { user } = useContext(VendersContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedObject, setSelectedObject] = useState(null);

    const handleRowClick = (id) => {
        handleShow()
        console.log(id);
        const singelRow = user.find(object => object.IDUser === id);
        setSelectedObject(singelRow);
        console.log(selectedObject);
    }

  
    
    let { get } = useFetch()
    async function deleteitem(item) {
        let { data } = await axios.get(`https://zariexpress.com/api/vendor/users/delete/${item}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        get()
    }
    useEffect(() => {      
        console.log(data);
    }, [])
    return (
        <>
            <Table striped responsive={true} className='rounded-3 '>
                <thead>
                    <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                        <th>Name</th>
                        <th> Email</th>
                        {/* <th> User-Name</th> */}
                        <th>Mobile</th>
                        <th>Access Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        user.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div>
                                        {item.UserName}
                                    </div>
                                </td>
                                <td>
                                    <div  >
                                        {item.UserEmail}
                                    </div>
                                </td> 
                                <td className='text-center'>
                                    <div>
                                        {item.UserPhone}
                                    </div>
                                </td>
                                <td className={` ${item.UserStatus === 'ACTIVE' && 'text-info'} text-center`}>
                                    <div className={` ${item.UserStatus === 'ACTIVE' && 'txt_delivered'}
                                                       ${item.UserStatus === 'INACTIVE' && 'txt_rejected'} text-center `}>
                                        {item.UserStatus}
                                    </div>
                                </td>
                                <td className='icon'>
                                    <div className="icons">
                                        {/* <Link to={`/venderProfile/${item.IDUser}`} > */}
                                        {/* </Link> */}

                                        <div className="pp__profile-model">
                                            <a className='app__profile-model-a' onClick={() => handleRowClick(item.IDUser)}>
                                                <Icons.edit color='#40AB45' />
                                            </a>
                                            <Modal show={show} onHide={handleClose}  centered>
                                                <UpdateUser   show={show} Userdata={selectedObject} handleClose={handleClose} />
                                            </Modal>
                                        </div>
                                        <a onClick={() => deleteitem(item.IDUser)}>
                                            <Icons.bin />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </Table>

        </>
    )
}

export default UserTable