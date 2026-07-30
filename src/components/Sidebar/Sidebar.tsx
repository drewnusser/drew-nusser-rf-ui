import React from 'react';
import './Sidebar.scss';
import NavLogo from '../../assets/NavLogo.png';
import NavOrgLogo from '../../assets/NavOrg.png';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const hamburgerRef = React.useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    sidebarRef.current?.classList.toggle('open');
    hamburgerRef.current?.classList.toggle('is-active');
  }

  const closeMenu = () => {    
    sidebarRef.current?.classList.remove('open');
    hamburgerRef.current?.classList.remove('is-active');
  }

  return (
    <>
      <button ref={hamburgerRef} className="hamburger hamburger--spin" type="button" onClick={toggleMenu}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <nav className="sidebar" ref={sidebarRef}>
        <div className="sidebar-logos">
          <div>
            <img src={NavLogo} alt="Nav Logo" />
          </div>
          <div>
            <img src={NavOrgLogo} alt="Nav Org Logo" />
          </div>
          <button onClick={() => { }} className="sidebar-user-chip">DN</button>
        </div>
        <div className="sidebar-links">
          <div className="sidebar-links-header">RainFocus Summit</div>
          <div className="details">Lehi, UT &bull; December 15th</div>
          <input type="text" placeholder="Search..." className="sidebar-search" />
          <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Guide">Guide</NavLink>
          <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Attendees">Attendees</NavLink>
          <div className="sidebar-sublinks">
            <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Attendees/Attendees">Attendees</NavLink>
            <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Attendees/AttendeeTypes">Attendee Types</NavLink>
            <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Attendees/Packages">Packages</NavLink>
            <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Attendees/RegCodes">Reg Codes</NavLink>
            <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Attendees/Discounts">Discounts</NavLink>
          </div>
          <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Content">Content</NavLink>
          <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to="/Exhibitors">Exhibitors</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Sidebar