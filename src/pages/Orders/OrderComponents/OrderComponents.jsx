import { Helmet } from 'react-helmet';
import OrderCover from '../OrderCover/OrderCover';
import Orders from '../Orders';

const OrderComponents = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Orders</title>
      </Helmet>
      <OrderCover />
      <div className="container mx-auto px-4">
        <Orders />
      </div>
    </>
  );
};

export default OrderComponents;
