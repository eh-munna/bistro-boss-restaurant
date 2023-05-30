import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderItems from './OrderItems/OrderItems';
import { useParams } from 'react-router-dom';

const Orders = () => {
  const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessertItems = menu.filter((item) => item.category === 'dessert');
  const pizzaItems = menu.filter((item) => item.category === 'pizza');
  const saladItems = menu.filter((item) => item.category === 'salad');
  const soupItems = menu.filter((item) => item.category === 'soup');
  const drinksItems = menu.filter((item) => item.category === 'drinks');

  return (
    <div className="pt-28 pb-12">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList
          className={`flex justify-center items-center uppercase gap-6 font-[inter] text-[#151515] font-medium`}
        >
          <Tab
            className={`border-0 cursor-pointer hover:text-[#BB8506] ease-in-out duration-300`}
          >
            Salad
          </Tab>
          <Tab
            className={`border-0 cursor-pointer hover:text-[#BB8506] ease-in-out duration-300`}
          >
            Pizza
          </Tab>
          <Tab
            className={`border-0 cursor-pointer hover:text-[#BB8506] ease-in-out duration-300`}
          >
            Soups
          </Tab>
          <Tab
            className={`border-0 cursor-pointer hover:text-[#BB8506] ease-in-out duration-300`}
          >
            Desserts
          </Tab>
          <Tab
            className={`border-0 cursor-pointer hover:text-[#BB8506] ease-in-out duration-300`}
          >
            Drinks
          </Tab>
        </TabList>
        <TabPanel>
          <OrderItems items={saladItems} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={pizzaItems} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={soupItems} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={dessertItems} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={drinksItems} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Orders;
