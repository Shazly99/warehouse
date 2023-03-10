import React from 'react'
import { Outlet } from 'react-router-dom'
import Component from '../constants/Component'

function Client() {
  return (
    <>
      <div className="vender overflow-hidden">
        <div className='d-flex'>
          <Component.SideClient />
          <main className='w-100  m-0 p-0'>
            <Component.Navber />
            <div>
              <Outlet></Outlet>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Client