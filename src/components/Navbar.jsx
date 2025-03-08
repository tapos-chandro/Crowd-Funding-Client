import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider"; // Ensure the correct path
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const { user, logout} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu



  return (
    <nav className="bg-blue-600 p-4 shadow-md fixed top-0 z-50 w-full py-5">
      <div className="container mx-auto flex justify-between items-center  ">
        
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">Crowdfund</Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"} {/* Open/Close Icon */}
        </button>

        {/* Navbar Links - Desktop */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-white hover:underline">Home</NavLink>
          <NavLink to="/all-campaigns" className="text-white hover:underline">All Campaigns</NavLink>

          {user && (
            <>
              <NavLink to="/add-campaign" className="text-white hover:underline">Add New Campaign</NavLink>
              <NavLink to="/my-campaigns" className="text-white hover:underline">My Campaigns</NavLink>
              <NavLink to="/my-donations" className="text-white hover:underline">My Donations</NavLink>
            </>
          )}
        </div>

        {/* Authentication Section - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Login</Link>
              <Link to="/register" className="bg-blue-800 text-white px-4 py-2 rounded-lg">Register</Link>
            </>
          ) : (
            <div className="relative group flex ">
              {user.photoURL && <img
                src={user?.photoURL ? user.photoURL:<FaUser/> }
                className="w-10 h-10 rounded-full cursor-pointer"
              />}
              <div className="absolute hidden group-hover:block bg-white text-black px-4 py-2 rounded shadow-md top-12 left-0">
                <p>{user?.displayName || "User"}</p>
                <p>{user?.email}</p>
              </div>
              <button onClick={logout} className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer">Log out</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 mt-2 rounded text-center">
          <NavLink to="/" className="block text-white py-2">Home</NavLink>
          <NavLink to="/all-campaigns" className="block text-white py-2">All Campaigns</NavLink>

          {user && (
            <>
              <NavLink to="/add-campaign" className="block text-white py-2">Add New Campaign</NavLink>
              <NavLink to="/my-campaigns" className="block text-white py-2">My Campaigns</NavLink>
              <NavLink to="/my-donations" className="block text-white py-2">My Donations</NavLink>
            </>
          )}

          {!user ? (
            <>
              <Link to="/login" className="block bg-white text-blue-600 px-4 py-2 rounded-lg mt-2">Login</Link>
              <Link to="/register" className="block bg-blue-800 text-white px-4 py-2 rounded-lg mt-2">Register</Link>
            </>
          ) : (
            <div className="relative group  flex flex-col justify-center items-center   space-y-2">
             {user.photoURL &&  <img
                src={user?.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />}
              <div className="absolute hidden group-hover:block bg-white text-black px-4 py-2 rounded shadow-md top-12 left-0">
                {user?.displayName}
              </div>
              <button onClick={logout} className=" bg-red-500 text-white  w-full py-2 rounded-lg">Log out</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
