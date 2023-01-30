import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Component from '../../../constants/Component';
import { Col, FloatingLabel, Modal, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import jwtDecode from 'jwt-decode';

import './Profile.scss'
import axios from 'axios';
import Icons from '../../../constants/Icons';
import { useParams } from 'react-router-dom';
import { apiheader, GetData } from '../../../Api/hook/fetchData';

function Profile() { 

  return (
    <>
    
    </>
  )
}

export default Profile