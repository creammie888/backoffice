import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUserEdit, FaCog, FaSignOutAlt, FaVideo, FaUsersCog } from "react-icons/fa";

const Navbar = () => {

  const location = useLocation();

  return (
    <div className="navbar-box">
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/img/Logo-SmartAudit.png" alt="smartAudit-logo" />
        </div>
        <div className="menu">
          <ul>
            <li className={`main-menu ${location.pathname === "/dashboard" ? "active" : ""}`}>
              <Link to="/dashboard"><FaHome /> Home</Link>
            </li>
            <li className={`main-menu ${location.pathname === "/profile" ? "active" : ""}`}>
              <Link to="/profile"><FaUserEdit /> Edit Profile</Link>
            </li>
            <li className={`main-menu ${location.pathname === "/permission" ? "active" : ""}`}>
              <Link to="/permission"><FaUsersCog /> User Permission</Link>
            </li>
            <li className={`main-menu ${location.pathname === "/video" ? "active" : ""}`}>
              <Link to="/video"><FaVideo /> Activity Video</Link>
            </li>
            <li className={`main-menu ${location.pathname === "/settings" ? "active" : ""}`}>
              <Link to="/settings"><FaCog /> Setting</Link>
            </li>
          </ul>
        </div>

      </div>
      <li className="logout"><Link to="/"><FaSignOutAlt /> Logout</Link></li>
    </div>
  );
};

export default Navbar;
