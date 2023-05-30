import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import MenuItem from '../../../../components/SectionHeading/MenuItem/MenuItem';
import useMenu from '../../../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();

  const popularItems = menu.filter((item) => item.category === 'popular');

  return (
    <section className="container px-4 py-20 mx-auto">
      <SectionHeading
        subHeading={'Check it out'}
        heading={'from our menu'}
      ></SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
