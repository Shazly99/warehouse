import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import VenderContext, { VendersContext } from '../Api/context/VenderStore.js';
import Component from '../constants/Component';
import { motion } from 'framer-motion';
import useFetch from '../Api/hook/useFetch.js';
import { useEffect, useContext } from 'react';

function Vendor({ LogOut }) {
  let { isOpen } = useContext(VendersContext);
  
  useEffect(() => {

  }, [isOpen])
  return (
    <>
      {/* <VenderContext> */}
      <div className="vender overflow-hidden">
        <div className='d-flex'>
          <Component.Sildebar LogOut={LogOut} />
          <motion.div
            animate={{
              width: isOpen ? `calc(100% - 300px)` : `calc( 100% - 60px )`,
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
          >
            <main className='  m-0 p-0'  >
              <Component.Navber />
              <div> 
                <Outlet></Outlet>
              </div>
            </main>
          </motion.div>
        </div>
      </div>
      {/* </VenderContext> */}
    </>
  )
}

export default Vendor
