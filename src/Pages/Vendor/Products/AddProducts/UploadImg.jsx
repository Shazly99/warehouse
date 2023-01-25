import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import Icons from '../../../../constants/Icons';
import '../Products.scss'

const UploadImg = () => {
    const [images, setImages] = useState([]);
    const [images1, setImages1] = useState([]);
    const [images2, setImages2] = useState([]);
    const [images3, setImages3] = useState([]);

    const onDrop = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                setImages((prevImages) => [...prevImages, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    }
    const onDrop1 = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                setImages1((prevImages) => [...prevImages, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    }
    const onDrop2 = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                setImages2((prevImages) => [...prevImages, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    }
    const onDrop3 = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                setImages3((prevImages) => [...prevImages, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    }

    return (
        <>
            <div className="app__addprodects__header-images  ">
                <Row>
                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <Dropzone onDrop={onDrop} accept="image/*">
                                {({ getRootProps, getInputProps }) => (
                                    <section >
                                        <div {...getRootProps()} className='d-flex justify-content-center flex-column align-items-center ' >
                                            <Icons.upload size={30} />
                                            <a  >Upload Image or Video</a>
                                        </div>
                                        <aside className=' d-flex justify-content-center ' style={{ position: 'relative' }}>
                                            <img src={images[0]} className='mt-2 w-50' />
                                            {images.length == 0 ? '' :
                                                <Icons.bin size={27} onClick={() => setImages([])} className='app__addprodects__delete' color='#BF1E30' />
                                            }
                                        </aside>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <Dropzone onDrop={onDrop1} accept="image/*">
                                {({ getRootProps, getInputProps }) => (
                                    <section >
                                        <div {...getRootProps()} className='d-flex justify-content-center flex-column align-items-center ' >
                                            <Icons.upload size={30} />
                                            <a  >Upload Image or Video</a>
                                        </div>
                                        <aside className=' d-flex justify-content-center ' style={{ position: 'relative' }}>
                                            <img src={images1[0]} className='mt-2 w-50' />
                                            {images1.length == 0 ? '' :
                                                <Icons.bin size={27} onClick={() => setImages1([])} className='app__addprodects__delete' color='#BF1E30' />
                                            }
                                        </aside>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <Dropzone onDrop={onDrop2} accept="image/*">
                                {({ getRootProps, getInputProps }) => (
                                    <section >
                                        <div {...getRootProps()} className='d-flex justify-content-center flex-column align-items-center ' >
                                            <Icons.upload size={30} />
                                            <a  >Upload Image or Video</a>
                                        </div> 
                                        <aside className=' d-flex justify-content-center ' style={{ position: 'relative' }}>
                                            <img src={images2[0]} className='mt-2 w-50' />
                                            {images2.length == 0 ? '' :
                                                <Icons.bin size={27} onClick={() => setImages2([])} className='app__addprodects__delete' color='#BF1E30' />
                                            }
                                        </aside>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <Dropzone onDrop={onDrop3} accept="image/*">
                                {({ getRootProps, getInputProps }) => (
                                    <section >
                                        <div {...getRootProps()} className='d-flex justify-content-center flex-column align-items-center ' >
                                            <Icons.upload size={30} />
                                            <a  >Upload Image or Video</a>
                                        </div>
                                        <aside className=' d-flex justify-content-center ' style={{ position: 'relative' }}>
                                            <img src={images3[0]} className='mt-2 w-50' />
                                            {images3.length == 0 ? '' :
                                                <Icons.bin size={27} onClick={() => setImages3([])} className='app__addprodects__delete' color='#BF1E30' />
                                            }
                                        </aside>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                    </Col>


                </Row>
            </div>
        </>
    )
}

export default UploadImg
