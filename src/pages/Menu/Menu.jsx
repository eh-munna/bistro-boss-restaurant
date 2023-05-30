import useMenu from '../../hooks/useMenu';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg';
import saladImg from '../../../src/assets/menu/salad-bg.jpg';
import soupImg from '../../../src/assets/menu/soup-bg.jpg';

const Menu = () => {
  const [menu] = useMenu();
  const dessertItems = menu.filter((item) => item.category === 'dessert');
  const pizzaItems = menu.filter((item) => item.category === 'pizza');
  const saladItems = menu.filter((item) => item.category === 'salad');
  const soupItems = menu.filter((item) => item.category === 'soup');
  const offeredItems = menu.filter((item) => item.category === 'offered');

  return (
    <div className="container mx-auto">
      <div className="pt-24 pb-8">
        <SectionHeading
          subHeading={`don't miss`}
          heading={`today's offer`}
        ></SectionHeading>
      </div>
      <div>
        <MenuCategory items={offeredItems} />
      </div>

      <div>
        <MenuCategory
          title="desserts"
          items={dessertItems}
          coverImg={dessertImg}
          subTitle={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        />
      </div>
      <div>
        <MenuCategory
          title="pizza"
          items={pizzaItems}
          coverImg={pizzaImg}
          subTitle={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        />
      </div>
      <div>
        <MenuCategory
          title="salad"
          items={saladItems}
          coverImg={saladImg}
          subTitle={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        />
      </div>
      <div>
        <MenuCategory
          title="soups"
          items={soupItems}
          coverImg={soupImg}
          subTitle={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        />
      </div>
    </div>
  );
};

export default Menu;
