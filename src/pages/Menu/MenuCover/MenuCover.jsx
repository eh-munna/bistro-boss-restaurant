import menuImg from '../../../assets/menu/banner3.jpg';
import Cover from '../../../shared/Cover/Cover';

const MenuCover = () => {
  return (
    <div>
      <Cover
        coverImg={menuImg}
        title={'our menu'}
        subTitle={'would you like to try a dish?'}
      />
    </div>
  );
};

export default MenuCover;
