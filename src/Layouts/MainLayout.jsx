import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/footer';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
