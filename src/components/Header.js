import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Header() {

  const [currentPage, handlePageChange] = useState('Project');

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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage(currentPage)}
      </main>
    </div>
  );
}

export default Header;
