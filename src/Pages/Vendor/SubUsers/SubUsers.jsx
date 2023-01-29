import { Box, Pagination } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { VendersContext } from '../../../Api/context/VenderStore';
import Component from '../../../constants/Component'
import Icons from '../../../constants/Icons';
import './user.scss'

function SubUsers() {
  
  let { getUsers, PagesNumber } = useContext(VendersContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    getUsers(page)
  }, [page, PagesNumber])
  return (
    <>
      <div className="app__order">
        <Component.ButtonBase title={"Add Sub User"} bg={"danger"} icon={<Icons.add />} path="/venderSubuser/addUser" />
        <div className="app__order-table">
          <Component.UserTable page={page} />
        </div>
      </div>

      <div className="pagination ">
        <Box sx={{ margin: "auto", width: "fit-content", alignItems: "center", }}>
          <Pagination count={PagesNumber} page={page} onChange={handleChange} />
        </Box>
      </div>
    </>
  )
}

export default SubUsers
