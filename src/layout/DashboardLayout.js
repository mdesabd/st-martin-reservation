import React from 'react';
import Navbar from './../components/Navbar'
import { Link, Outlet } from 'react-router-dom';
import { FaUsers, FaTasks } from 'react-icons/fa';


const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className=' text-lg font-bold text-secondary-focus'><Link to='/dashboard'> <span className='text-indigo-600 '><FaTasks /></span> My Orders </Link></li>
                        <li className=' text-lg font-bold text-secondary-focus'><Link to='/dashboard/allusers'> <span className='text-indigo-600 '><FaUsers /></span> All Users </Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;