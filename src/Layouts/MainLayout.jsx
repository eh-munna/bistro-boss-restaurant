import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer/footer';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
  const location = useLocation();
  const signInPath = location.pathname.includes('sign-in');
  const signUpPath = location.pathname.includes('sign-up');
  return (
    <div>
      {!signInPath && !signUpPath && <Navbar />}
      <Outlet />
      {!signInPath && !signUpPath && <Footer />}
    </div>
  );
};

export default MainLayout;
