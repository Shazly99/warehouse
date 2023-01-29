import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { PostData, apiheader, GetData } from './../hook/fetchData';


export const VendersContext = createContext([])

function VenderContext({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const [user, setUser] = useState([])
  const [PagesNumber, setPagesNumber] = useState('')

  // get users list
  async function getUsers(pageNumber) {
    let resp = await PostData(`${process.env.REACT_APP_BASE_URL}vendor/users`, {IDPage:pageNumber}, apiheader);
    setUser(resp.data.Response);
    setPagesNumber(resp.data.PagesNumber); 
  } 

  // get delete users from list
  async function deleteUser(item) { 
    return await GetData(`${process.env.REACT_APP_BASE_URL}vendor/users/delete/${item}`, apiheader).then((res) => { 
      toast.success(res.ApiMsgEn);
      getUsers()
    }).catch(err => {
      toast.success(err.ApiMsgEn);
    })
  }
 

  useEffect(() => {
    getUsers(1);
  }, [])


  return (
    <>
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

      <VendersContext.Provider value={{ user, isOpen, toggle, deleteUser ,getUsers,PagesNumber}}>
        {children}
      </VendersContext.Provider>
    </>
  )
}

export default VenderContext