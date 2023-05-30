import Cover from '../../../shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg';

const OrderCover = () => {
  return (
    <div>
      <Cover
        coverImg={orderImg}
        title={'orders'}
        subTitle={'would you like to try a dish?'}
      />
    </div>
  );
};

export default OrderCover;
