import { Link } from 'react-router-dom';

const Navbar = () => {
  const navOptions = (
    <>
      <li className="uppercase font-[inter] font-medium text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="uppercase font-[inter] font-medium text-white">
        <Link to="/menus">Our Menu</Link>
      </li>
      <li className="uppercase font-[inter] font-medium text-white">
        <Link to="/orders/salad">Orders</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[rgb(21,21,21)]/50 fixed z-50 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost uppercase text-xl">bistro boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
