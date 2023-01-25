import React, { useContext } from 'react'
import data from './data.js';
import { Table } from 'react-bootstrap'
import Icons from '../../../constants/Icons.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useFetch from './../../../Api/hook/useFetch';
import { Link } from 'react-router-dom'; 
import { VendersContext } from './../../../Api/context/VenderStore';

const UserTable = () => {
    let {get } = useFetch()
    let {user} =useContext(VendersContext);
 
   async function deleteitem(item) {
        let {data} =await axios.get(`https://zariexpress.com/api/vendor/users/delete/${item}`,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        get()
    }
    
    return (
        <>
            <Table striped responsive={true} className='rounded-3 '>
                <thead>
                    <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                        <th>Name</th>
                        <th> Email</th>
                        <th> User-Name</th>
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
                                        {item.UserAppLanguage}
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <div>
                                        {item.UserPhone}
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <div>
                                        {item.UserStatus}
                                    </div>
                                </td>
                                <td className='icon'>
                                    <div className="icons">
                                        <Link to={`/venderProfile/${item.IDUser}`} >
                                            <Icons.edit />
                                        </Link>
                                        <a onClick={()=>deleteitem(item.IDUser)}>
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