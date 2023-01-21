import React from 'react'
import { Pagination, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Component from '../../../../constants/Component';
import Icons from '../../../../constants/Icons';
import data from './data';
import { Table, Container } from 'react-bootstrap';
import { icons } from 'react-icons';
const Product = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const test = () => {

  }
  return (
    <>
      <Container fluid className="app__products Container">
        <Component.BaseHeader h1={'Report on Products'} />
        <div className="app__products-table">
          <Table striped responsive={true} className='rounded-3 '>
            <thead>
              <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Sales Quantity</th>
                <th>Stock</th>
                <th>Selling Price</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                data.map((item, index) => (
                  <tr key={index}>
                    <td >
                      <img src={item.img} />
                    </td>
                    <td >
                      <div>
                        {item.name}
                      </div>
                    </td>
                    <td>
                      <div className='color-red'>
                        {item.category}
                      </div>
                    </td>
                    <td className='text-center'>
                      <div>
                        {item.SalesQuantity}
                      </div>
                    </td>

                    <td className='text-center'>
                      <div>
                        {item.Stock}
                      </div>
                    </td>

                    <td className='text-center'>
                      <div>
                        {item.sellingPrice}
                      </div>
                    </td>

                  </tr>
                ))
              }

            </tbody>

          </Table>
        </div>
      </Container>
      <div className="pagination ">
        <Box sx={{ margin: "auto", width: "fit-content", alignItems: "center", }}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Box>
      </div>
    </>
  )
}

export default Product