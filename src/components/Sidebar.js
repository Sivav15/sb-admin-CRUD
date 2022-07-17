import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
  return <>
  
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<div className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</div>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>



<li className="nav-item active">
    <div className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
    <Link to={"/dashboard"}><span style={{color:'white'}}>Dashboard</span></Link></div>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

<li className="nav-item active">
    <div className="nav-link" >
        <i className="fas fa-fw fa-folder"></i>
    <Link to={"/user-list"}><span style={{color:'white'}}>List Users</span></Link></div>
</li>


</ul>
  
  </>
}

export default Sidebar