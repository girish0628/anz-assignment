import React from 'react';
import { Navbar } from 'react-bootstrap'

//Create header component for logo
const Header =()=> {
  return (
    <Navbar bg="dark" variant="dark" data-test="header">
      <Navbar.Brand>
        {'Company Logo'}
      </Navbar.Brand>  
  </Navbar>   
  )
}
export default Header;