import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Header() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Project':
        return <Project />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Project />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <main>{renderPage(currentPage)}</main>
    </div>
  );
}

export default Header;
