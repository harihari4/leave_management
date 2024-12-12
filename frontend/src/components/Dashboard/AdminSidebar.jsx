import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaTachometerAlt, FaBuilding, FaUsers, FaCalendarAlt, FaCogs} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='bg-blue-600 h-12 flex items-center justify-center'>
        <h3 className='text-2xl text-center font-pacific'>Management</h3>
      </div>
      <div >
        <NavLink to="/admin-dashboard"
        className={({isActive}) => `${isActive ? "bg-blue-500 ": " "} 'flex items-center space-x-4 block py-2.5 px-4 rounded'` }
        end
        >
            <FaTachometerAlt />
            <span >Dashboard</span>
        </NavLink>

        <NavLink to="/admin-dashboard/employees"
         className={({isActive}) => `${isActive ? "bg-teal-500 ": " "}'flex items-center space-x-4 block py-2.5 px-4 rounded'`}>
            <FaUsers />
            <span>Employee</span>
        </NavLink>

        <NavLink to="/admin-dashboard/departments"
        className={({isActive}) => `${isActive ? "bg-blue-500 ": " "}'flex items-center space-x-4 block py-2.5 px-4 rounded'`}
        >
            <FaBuilding />
            <span>Department</span>
        </NavLink>

        <NavLink to="/admin-dashboard/leaves"
         className={({isActive}) => `${isActive ? "bg-blue-500 ": " "}'flex items-center space-x-4 block py-2.5 px-4 rounded'`}
        >
            <FaCalendarAlt />
            <span>Leave</span>
        </NavLink>

        <NavLink to="/admin-dashboard"
        className='flex items-center space-x-4  py-2.5 px-4 rounded'
        >
            <FaCogs />
            <span>setting</span>
        </NavLink>

      </div>
    </div>
  )
}

export default AdminSidebar 