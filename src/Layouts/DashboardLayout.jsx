import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const navOptions = (
    <>
      {isAdmin ? (
        <>
          <li>
            <Link to="/dashboard/my-cart">Admin Home</Link>
          </li>
          <li>
            <Link to="/dashboard/add-item">Add Item</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-items">Manage Items</Link>
          </li>
          <li>
            <Link to="/dashboard/bookings">Manage Bookings</Link>
          </li>
          <li>
            <Link to="/dashboard/all-users">All Users</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/dashboard/my-cart">User Home</Link>
          </li>
          <li>
            <Link to="/dashboard/reservation">Reservations</Link>
          </li>
          <li>
            <Link to="/dashboard/payment-history">Payment History</Link>
          </li>
          <li>
            <Link to="/dashboard/my-cart">My Cart</Link>
          </li>
        </>
      )}

      <div className="divider"></div>
      <li className="uppercase font-[inter] font-medium text-orange-400">
        <Link to="/">Home</Link>
      </li>
      <li className="uppercase font-[inter] font-medium text-orange-400">
        <Link to="/menus">Our Menu</Link>
      </li>
      <li className="uppercase font-[inter] font-medium text-orange-400">
        <Link to="/orders/salad">Orders</Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto px-4">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
