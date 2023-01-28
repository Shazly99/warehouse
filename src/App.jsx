import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Component from './constants/Component';
import './style/App.scss';
import { Toaster } from 'react-hot-toast';
// import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import VenderContext from './Api/context/VenderStore';
import axios from 'axios';

function App() {
  // const [userData, setUserData] = useState(null);
  // function userDecode() {
  //   let Incode = localStorage.getItem('token');
  //   let decode = jwtDecode(Incode)
  //   setUserData(decode)
  // }
  // useEffect(() => {
  //   userDecode()
  // }, [])
  async function get() {
    let resp = await axios.post(`${process.env.REACT_APP_BASE_URL}vendor/users`, {}, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    });
    // setUser(resp.data.Response)
    console.log(resp.data.Response);
}

useEffect(() => {
    get().then((res)=>{
      console.log(res);
    }).catch((er)=>{
      console.log(er);
    })
}, [])
  function ProtectedRoutes({ children }) {
    if (localStorage.getItem('token')) {
      return children
    } else {
      return <Navigate to="/auth/login" replace={true} />

    }
  }
  function LogOut() {
    localStorage.removeItem('token')
    // setUserData(null)
    return <Navigate to="/auth/login" replace={true} />
  }

  const root = createBrowserRouter([
    {
      path: '/', element: <ProtectedRoutes> <Component.Vendor LogOut={LogOut} /></ProtectedRoutes>, children: [
        { index: true, element: <ProtectedRoutes><Component.Dashboard /> </ProtectedRoutes> },
        {
          path: '/venderProducts', children: [
            { index: true, element: <ProtectedRoutes><Component.Products /></ProtectedRoutes> },
            { path: 'addProduct', element: <ProtectedRoutes><Component.AddProducts /></ProtectedRoutes> },
          ]
        },
        {
          path: '/venderOrder', element: <ProtectedRoutes><Component.Orders /></ProtectedRoutes>
        },
        {
          path: '/venderSubuser', children: [
            { index: true, element: <ProtectedRoutes><Component.SubUsers /> </ProtectedRoutes> },
            { path: 'addUser', element: <ProtectedRoutes><Component.AddUser /> </ProtectedRoutes> },
          ]
        },
        { path: '/venderProfile/:id', element: <ProtectedRoutes> <Component.Profile /></ProtectedRoutes> },
        { path: '*', element: <Component.Error /> },
      ],
    },
    {
      path: '/client/', element: <Component.Client />, children: [
        { index: true, element: <Component.DashboardClient /> },
        { path: 'productsCatalog', element: <Component.ProductsCatalog /> },
        { path: 'productList', element: <Component.ProductsList /> },
        { path: 'orders', element: <Component.OrdersClient /> },
        {
          path: 'reports', children: [
            { index: true, element: <Component.Reports /> },
            { path: 'orders', element: <Component.OrdersReport /> },
            { path: 'customers', element: <Component.Customer /> },
            { path: 'products', element: <Component.ProductReport /> },
          ]
        },
        { path: 'profile', element: <Component.ProfileClient /> },
        { path: '*', element: <Component.Error /> },

      ]
    },
    {
      path: '/auth/', element: <Component.Auth />, children: [
        { path: 'login', element: <Component.Login /> },
        { path: '*', element: <Component.Error /> },

      ]
    }
  ])
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
      <VenderContext>
        <RouterProvider router={root} />
      </VenderContext>
    </>
  );
}

export default App;
