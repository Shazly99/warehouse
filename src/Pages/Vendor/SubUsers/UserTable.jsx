import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import Icons from '../../../constants/Icons.js'; 
import { useEffect, useState } from 'react'; 
import { VendersContext } from './../../../Api/context/VenderStore';
import Component from '../../../constants/Component.js'; 

const UserTable = () => {
    let { user, deleteUser } = useContext(VendersContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [update, setUpdate] = useState('');

    const handleRowClick = (id) => { 
        handleShow()
        const singelRow = user.find(object => object?.IDUser === id);
        setUpdate(singelRow);
    }
    const [IdThisUser, setId] = useState(null)
    const idUser = id => setId(id)
    useEffect(() => { 
    }, [IdThisUser])

    return (
        <>
            <Table striped responsive={true} className='rounded-3 '>
                <thead>
                    <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                        <th>Name</th>
                        <th> Email</th> 
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
                                            <a className='app__profile-model-a' onClick={() => handleRowClick(item.IDUser)} data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                <Icons.edit color='#40AB45' />
                                            </a>
                                            <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog  modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <Component.UpdateUser update={update}/>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>

                                        <div className="pp__profile-model">

                                            <a className='app__profile-model-a' onClick={() => idUser(item.IDUser)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <Icons.bin color='#E20000' />
                                            </a>
                                            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog  modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header ">
                                                            <h1 className="modal-title fs-5  w-100 text-center" id="staticBackdropLabel">Delete User</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="model-body">
                                                            <p>Are you sure you want to delete this user ?  </p>
                                                        </div>
                                                        <div className="modal-footer d-flex justify-content-center align-item-center  ">
                                                            <button data-bs-dismiss="modal" onClick={() => deleteUser(IdThisUser)} className='btn btn-danger '>Delete</button>
                                                            <button data-bs-dismiss="modal" className='btn btn-outline-danger text-danger'>Cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 

                                        </div>
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