import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const VendersContext = createContext([])

function VenderContext({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

    const [user, setUser] = useState([])

    async function get() {
        let resp = await axios.post(`${process.env.REACT_APP_BASE_URL}vendor/users`, {}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        setUser(resp.data.Response)
    }

    useEffect(() => {
        get()
    }, [])

 
  return (
    <> <VendersContext.Provider value={{user,isOpen,toggle}}>
      {children}
    </VendersContext.Provider>
    </>
  )
}

export default VenderContext