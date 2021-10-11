
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light sticky bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand 
        href='#'>Robert A Ellingson II</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {tabs.map(tab => (
              <MDBNavbarItem className="nav-item" key={tab}>
                <MDBNavbarLink aria-current='page'
                  href={'#' + tab.toLowerCase()}
                  // Whenever a tab is clicked on, the current page is set through the handlePageChange props.
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? 'nav-link navActive' : 'nav-link'
                  }
                >
                  {tab}
                </MDBNavbarLink>
              </MDBNavbarItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavTabs;
