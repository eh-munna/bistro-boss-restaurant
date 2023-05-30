import { Link } from 'react-router-dom';
import MenuItem from '../../../components/SectionHeading/MenuItem/MenuItem';
import Cover from '../../../shared/Cover/Cover';

const MenuCategory = ({ items, title, coverImg, subTitle }) => {
  return (
    <div>
      {title && (
        <div className="pb-24">
          <Cover coverImg={coverImg} title={title} subTitle={subTitle} />
        </div>
      )}
      {
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12">
            {items.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
          <div className="text-center pb-5">
            <Link to={`/orders/${title}`}>
              <button className="pt-6 rounded-md border-0 border-b-2 border-b-[#1F2937] text-[inter] font-medium p-4 uppercase text-[#1F2937]">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          </div>
        </>
      }
    </div>
  );
};

export default MenuCategory;
