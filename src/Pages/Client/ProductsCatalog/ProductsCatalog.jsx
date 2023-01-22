import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Col, Row } from 'react-bootstrap';
import './ProductsCatalog.scss'
import Component from "../../../constants/Component";
import Icons from '../../../constants/Icons';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Img from '../../../assets/Img';
import { Typography } from '@mui/material';

const ProductsCatalog = () => {
  const [value, setValue] = useState('Categories1');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  // const [checked, setChecked] = React.useState([true , false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
    console.log();
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
    console.log(event.target.checked);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const [checked, setChecked] = React.useState(false);

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  let data = [
    { id: 1, img: Img.img1, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
    { id: 2, img: Img.img2, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
    { id: 3, img: Img.img3, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
    { id: 4, img: Img.img4, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
    { id: 5, img: Img.img5, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
    { id: 6, img: Img.img6, title: 'Chanel Perfume 150m...', price: '150 SAR', sellPrice: '300 SAR', Inventory: 20, Nosales: 235 },
  ]
  return (
    <>
      <div className="app__catalog">
        <Row>
          <Col xl={2} lg={2} md={2} sm={1} className="app__catalog-left  ">
            <div className="app__catalog_categories">
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
              <Component.ButtonBase title={"Add Sub User"} bg={"danger"} icon={<Icons.add />} />
              <div>

                <FormControlLabel
                  label="Select All"
                  className='lable_selectapp'
                  control={
                    <Checkbox
                      indeterminate={true}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                />

              </div>
            </div>
            <div className="app__catalog-right-product  px-2">
              <Row>
                {
                  data.map((item, index) => (
                    <Col xl={4} lg={4} md={6} sm={12} className=" mt-2">
                      <img src={item.img} className='w-100' alt="" srcset="" />
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
                        <FormControlLabel
                          control={

                            <Checkbox
                              checked={checked}
                              onChange={() => setChecked(!checked)}
                              defaultIndeterminate={true}
                            />
                          }
                          label={<Typography style={{ color: '#BF1E30' }}>Add To My List</Typography>}
                        />
                        {/*
                        <FormControlLabel
                          label="Add To My List"
                          control={<Checkbox checked={checked[index]} onChange={handleChange2} />}

                        /> */}
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