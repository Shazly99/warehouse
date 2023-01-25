import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import VenderContext from '../Api/context/VenderStore.js';
import Component from '../constants/Component';

function Vendor({ LogOut }) {
  return (
    <>
      <div className="vender overflow-hidden">
        <div className='d-flex'>
          <Component.Sildebar LogOut={LogOut} />
          <main className='w-100  m-0 p-0'>
            <Component.Navber />
            <div  >
              <VenderContext>
                <Outlet></Outlet>
              </VenderContext>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Vendor
