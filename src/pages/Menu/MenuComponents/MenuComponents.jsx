import { Helmet } from 'react-helmet-async';
import MenuCover from '../MenuCover/MenuCover';
import Menu from '../Menu';

const MenuComponents = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Our Menu</title>
      </Helmet>
      <MenuCover />
      <Menu />
    </>
  );
};

export default MenuComponents;
