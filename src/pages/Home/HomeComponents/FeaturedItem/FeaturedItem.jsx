import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import featured from '../../../../assets/home/featured.jpg';

const FeaturedItem = () => {
  return (
    <section
      className="relative  bg-fixed bg-cover bg-no-repeat bg-center text-white"
      style={{
        backgroundImage: `url(${featured})`,
      }}
    >
      <div className="bg-black absolute w-full h-full opacity-40"></div>
      <div className="container mx-auto px-4 py-20 z-10 text-white">
        <SectionHeading subHeading={'check it out'} heading={'from our menu'} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="z-10">
            <img className="max-w-full" src={featured} alt="" />
          </div>
          <div className="z-30 space-y-3">
            <p className="font-[inter]">May 30, 2023</p>
            <h4 className="uppercase font-[inter]">Where can I get some?</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              quo maiores blanditiis expedita voluptatibus, dolore odit modi
              dicta omnis dolor, ut sit repudiandae sint cum ipsa eos quibusdam
              voluptatem deleniti esse ullam officia in! Aperiam fuga eius,
              magni, ipsum sit maxime similique amet voluptatibus error
              aspernatur, quibusdam dicta minima iure! Adipisci temporibus
              distinctio neque quasi hic ab repellendus quis nisi! Dolores
              aspernatur quisquam consectetur omnis eaque iure asperiores
              quaerat, a porro minima, esse expedita accusamus ratione modi
              nulla. Hic, voluptas blanditiis! Voluptate voluptatem quae eveniet
              impedit dicta reprehenderit maxime qui harum, ut incidunt esse
              explicabo, quos nemo minima, eligendi minus?
            </p>
            <button className="pt-6 rounded-md border-0 border-b-2 border-b-white p-4 uppercase">
              read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
