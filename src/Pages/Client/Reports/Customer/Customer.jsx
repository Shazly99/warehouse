import React from 'react'
import { Button, Container, Form, Row, Col, Table } from 'react-bootstrap';
import { Box, Pagination, Typography, } from "@mui/material";
import data from './data';
import Component from '../../../../constants/Component';
import "../Reports.scss";

const Customer = () => {
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
 <Component.BaseHeader h1={'Report on Customer'} />
          <div className="app__orders">
            <Table striped responsive={true} className='rounded-3 '>
              <thead>
                <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                  <th>Client</th>
                  <th> Phone No.</th>
                  <th> No. of Purchases</th>
                  <th>Money</th> 
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
                          {item.Purchases}
                        </div>
                      </td>
                      <td className='text-center'>
                        <div>
                          {item.Money}
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

export default Customer