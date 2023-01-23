import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Icons from '../../../../constants/Icons';
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 160,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    // overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const UploadImg = () => {
    const [file, setFile] = useState(null);

    const handleFileInput = (e) => {
        setFile(e.target.files[0]);
    }
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);
    return (
        <>
            <div className="app__addprodects__header-images  ">
                <Row>
                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <section className="container dropzone ">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <Icons.upload size={30} />
                                    <a  >Upload Image or Video</a>
                                </div>
                                <aside style={thumbsContainer}>
                                    {thumbs}
                                </aside>
                            </section>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <section className="container dropzone ">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <Icons.upload size={30} />
                                    <a>Upload Image or Video</a>
                                </div>
                                <aside style={thumbsContainer}>
                                    {thumbs}
                                </aside>
                            </section>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <Icons.upload size={30} />
                            <a href="">Upload Image or Video</a>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={12}  >
                        <div className="app__addprodects__img d-flex justify-content-center align-items-center">
                            <Icons.upload size={30} />
                            <a href="">Upload Image or Video</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default UploadImg
