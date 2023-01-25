import React from 'react'
import { Button, Container, Form, Row, Col, Table } from 'react-bootstrap';
import { Box, Pagination, Typography, } from "@mui/material";
import data from './data';
import Component from '../../../../constants/Component';
import "../Reports.scss";

const Orders = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const search = () => {
  };
  return (
    <>
      <Container fluid>
        <div className="app__orders">
 <Component.BaseHeader h1={'Report on Orders'} />

          <div className="app__orders__search d-flex   align-item-center " >
            <Row className='w-100 '>
              <Col xl={3} lg={3} md={4} sm={12}  className='mt-2'>
                <Form.Select aria-label="Default select example"  className='w-100'>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col xl={3} lg={3} md={4} sm={12} className='mt-2'>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col xl={3} lg={3} md={4} sm={12} className='mt-2'>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col xl={3} lg={3} md={4} sm={12} className='mt-2'>
                <Button variant='danger' className='btn-search'>Find report</Button>
              </Col>
            </Row>

          </div>
          <div className="app__orders">
            <Table striped responsive={true} className='rounded-3 '>
              <thead>
                <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                  <th>Client</th>
                  <th> Phone No.</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Status  </th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div>
                          {item.Client}
                        </div>
                      </td>
                      <td>
                        <div>
                          {item.Phone}
                        </div>
                      </td>
                      <td className='text-center'>
                        <div>
                          {item.Qty}
                        </div>
                      </td>
                      <td className='text-center'>
                        <div>
                          {item.Price}
                        </div>
                      </td>
                      <td className='text-center'>
                        <div className={`${item.Status == 'Pending' && 'txt_pending'} 
                                          ${item.Status == 'Shipped' && 'txt_shipped'}
                                          ${item.Status == 'Out For Delivery' && 'txt_delivery'}
                                          ${item.Status == 'Delivered' && 'txt_delivered'}
                                          ${item.Status == 'Rejected' && 'txt_rejected'} `}>
                          {item.Status}
                        </div>
                      </td>
                    </tr>
                  ))
                }

              </tbody>

            </Table>
          </div>
        </div>
        <div className="pagination py-4">
          <Box sx={{ margin: "auto", width: "fit-content", alignItems: "center", }}>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Box>
        </div>
      </Container>
    </>
  )
}

export default Orders
