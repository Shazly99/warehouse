import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Col, Row, FormCheck, Form, Modal } from 'react-bootstrap';
import './ProductsCatalog.scss'
import Component from "../../../constants/Component";
import Icons from '../../../constants/Icons';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Img from '../../../assets/Img';
import { Typography } from '@mui/material';

let data = [
  { id: 1, img: Img.img1, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
  { id: 2, img: Img.img2, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
  { id: 3, img: Img.img3, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
  { id: 4, img: Img.img4, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
  { id: 5, img: Img.img5, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
  { id: 6, img: Img.img6, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
]
const ProductsCatalog = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState('Categories1');


  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  const [selectedRows, setSelectedRows] = useState([]);
  const rows = data;

  const handleRowClick = (row) => {
    setSelectedRows(prevRows => {

      if (prevRows?.includes(row)) {
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
      <div className="app__catalog">
        <Row>
          <Col xl={2} lg={2} md={2} sm={1} className="app__catalog-left  ">
            <div className="app__catalog_categories app__catalog_categories_border ">
              <h4>Categories</h4>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Categories1" control={<Radio />} label="Categories1" />
                  <FormControlLabel value="Categories2" control={<Radio />} label="Categories2" />
                  <FormControlLabel value="Categories3" control={<Radio />} label="Categories3" />
                  <FormControlLabel value="Categories4" control={<Radio />} label="Categories4" />
                  <FormControlLabel value="Categories5" control={<Radio />} label="Categories5" />
                  <FormControlLabel value="Categories6" control={<Radio />} label="Categories6" />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="app__catalog_categories">
              <h4>Brands</h4>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Brand2"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Brand2" control={<Radio />} label="Brand 1" />
                  <FormControlLabel value="Brand3" control={<Radio />} label="Brand 2" />
                  <FormControlLabel value="Brand4" control={<Radio />} label="Brand 3" />
                  <FormControlLabel value="Brand5" control={<Radio />} label="Brand 4" />
                  <FormControlLabel value="Brand6" control={<Radio />} label="Brand 5" />
                  <FormControlLabel value="Brand7" control={<Radio />} label="Brand 6" />
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
          <Col xl={10} lg={10} md={10} sm={11} className="app__catalog-right">
            <div className="app__catalog-right-header">

              <div className="pp__profile-model">

                <a className='app__profile-model-a ' onClick={handleShow}>
                  <Component.ButtonBase title={"Add To My List"} bg={"danger"} icon={<Icons.add />} />
                </a>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton className=' d-flex justify-content-center align-items-center'>
                    <Modal.Title className=' w-100 text-center' >Choose the list</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        className='Categories__mode'
                      >
                        <FormControlLabel value="Categories1" control={<Radio />} label="List 1" />
                        <FormControlLabel value="Categories2" control={<Radio />} label="List 2" color='error' /> 
                      </RadioGroup>
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer className='d-flex justify-content-center align-items-center  p-0 m-0 '>
                    <Component.ButtonBase onclick={handleClose} title={'Save'} bg={'danger'} />
                  </Modal.Footer>
                </Modal>
              </div>
              <div className=' px-4' onClick={handleSelectAllClick}>
                <Form.Check
                  type={'checkbox'}
                  className="btn-danger mt-2"
                  label={`Select All`}
                />
              </div>

            </div>
            <div className="app__catalog-right-product  px-2">
              <Row>
                {
                  data.map((item, index) => (
                    <Col key={index} xl={4} lg={4} md={6} sm={12} className=" mt-4" onClick={() => handleRowClick(item)}>
                      <img src={item.img} className='w-100' alt="" />
                      <h2>{item.title}</h2>
                      <div className="item">
                        <div className="item1">
                          <label htmlFor="">Cost Price:</label>
                          <span>{item.price}</span>
                        </div>
                        <div className="item1">
                          <label htmlFor="">Selling Price: :</label>
                          <span>{item.sellPrice}</span>
                        </div>
                        <div className="item1">
                          <label htmlFor="">Inventory :</label>
                          <span>{item.Inventory}</span>
                        </div>
                        <div className="item1">
                          <label htmlFor="">No. of sales :</label>
                          <span>{item.Nosales}</span>
                        </div>

                        <FormCheck
                          className='checkbox-content'
                          reverse
                          label='Add To My List'
                          type={'checkbox'}
                          defaultChecked={true}
                          checked={selectedRows?.includes(item)}
                        />

                      </div>
                    </Col>
                  ))
                }

              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProductsCatalog