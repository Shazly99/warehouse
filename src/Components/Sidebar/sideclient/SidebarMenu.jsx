import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom"

import { Modal,Form } from 'react-bootstrap';
import Component from "../../../constants/Component";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <NavLink to={route.path} className="link">
            <div className="icon">{route.icon}</div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  {route.name}
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
        </div>
        {isOpen && (
          <motion.div
            className="angleDown"
            animate={
              isMenuOpen
                ? {
                  rotate: -90,
                }
                : { rotate: 0 }
            }
          >
            <FaAngleDown size={18} />
          </motion.div>
        )}
      </div>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <>
                <motion.div variants={menuItemAnimation} key={i} custom={i}>
                  <NavLink to={subRoute.path} className="link">
                    <div className="icon">{subRoute.icon}</div>
                    <motion.div className="link_text">
                      {/* model popup create new list when model == true  */}
                      {subRoute.model === true ?
                        <div className="pp__profile-model">
                          <a className='app__profile-model-a' onClick={handleShow}>
                            {subRoute.name}
                          </a>
                          <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton className=' d-flex justify-content-center align-items-center'>
                              <Modal.Title className=' w-100 text-center' >Create new list</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>List Name</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer className='d-flex justify-content-center align-items-center  p-0 m-0 '>
                              <Component.ButtonBase onclick={handleClose} title={'Create the list'} bg={'danger'} />
                            </Modal.Footer>
                          </Modal>
                        </div> : subRoute.name
                      }
                    </motion.div>
                  </NavLink>
                </motion.div>
              </>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
