

import React, { useEffect, useState } from 'react'
import { Table, Container, FormCheck, Form, Modal, Button, Row, Col } from 'react-bootstrap';
import './ProductsList.scss'
import data from './data';
import Icons from '../../../constants/Icons';
import Component from '../../../constants/Component';
import Img from '../../../assets/Img';

const ProductsList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [detete, setdetete] = useState(false);
  const handleClosedetete = () => setdetete(false);
  const handleShowdetete = () => setdetete(true);

  const [selectedRows, setSelectedRows] = useState([]);
  const rows = data;

  const handleRowClick = (row) => {
    setSelectedRows(prevRows => {

      if (prevRows.includes(row)) {
        return prevRows.filter(item => item !== row);
      }
      else {
        return [...prevRows, row];
      }
    });
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      // select all rows
      setSelectedRows(rows);
    } else {
      setSelectedRows([]);
    }
  }


  return (
    <>
      <Container fluid className="app__products Container">
        <div className="table-btn w-100  d-flex justify-space-between align-item-center  " >
          <div className='table-btn-left'>
            <div className="pp__profile-model">
              <a className='app__profile-model-a' onClick={handleShow}>
                <Component.ButtonBase bg={"danger"} title={'Link Products'} />
              </a>
              <Modal className='app__profile-mode1' show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className=' d-flex justify-content-center align-items-center'>
                  <Modal.Title className=' w-100 text-center ' >
                    <h5>Integrates with your store</h5>
                    <p>Select your store platform and start setup integration.</p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row className="d-flex">
                    <Col>
                      <img src={Img.salla} className='w-100' />
                    </Col>
                    <Col>
                      <img src={Img.shopify} className='w-100' />
                    </Col>
                    <Col>
                      <img src={Img.zari} className='w-100' />
                    </Col>
                    <Col>
                      <img src={Img.zid} className='w-100' />
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </div>

            <div className="pp__profile-model">
              <a className='app__profile-model-a' onClick={handleShowdetete}>
                <Button variant="outline-danger">Delete Products</Button>
              </a>
              <Modal show={detete} className='app__profile-mode1' onHide={handleClosedetete} centered size="lg">
                <Modal.Header closeButton className=' d-flex justify-content-center align-items-center'>
                  <Modal.Title className=' w-100 text-center' >
                    <h3>Confirm</h3>
                    <p>Are you sure you want to delete this products ?</p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-center gap-3 app__profile_btn '>
                  <Button onClick={handleClosedetete} variant='danger'>Cancel</Button>
                  <Button variant='outline-danger'>Delete</Button>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="table-btn-right px-4">

            <Form.Check
              type={'checkbox'}  
              className="btn-danger mt-2"
              label={`Select All`}
              onClick={handleSelectAllClick}
            />  

          </div>

        </div>

        <div className="app__products-table">
          <Table striped responsive={true} className='rounded-3 '>
            <thead>
              <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                <th className=' d-flex justify-content-center align-item-center  border-none ' style={{ borderColor: "transparent" }}>  </th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Selling Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                data.map((item, index) => (
                  <tr key={index} onClick={() => handleRowClick(item)}>
                    <td >
                      <FormCheck
                        reverse
                        type={'checkbox'}
                        defaultChecked={true}
                        checked={selectedRows?.includes(item)}
                      />
                    </td>
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
                        {item.sellingPrice}
                      </div>
                    </td>

                    <td className='text-center'>
                      <div>
                        {item.Stock}
                      </div>
                    </td>

                    <td className='icon'>
                      <div className="icons">
                        <Icons.edit />
                        <Icons.bin />
                      </div>
                    </td>
                  </tr>
                ))
              }

            </tbody>

          </Table>
        </div>
      </Container>
    </>
  )
}

export default ProductsList