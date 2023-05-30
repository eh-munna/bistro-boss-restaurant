const SectionHeading = ({ subHeading, heading }) => {
  return (
    <div className="text-center w-2/6 mx-auto mb-12">
      <p className="text-[#D99904] text-lg font-[inter] pb-4 capitalize ">
        -- {subHeading} --
      </p>
      <h2 className="text-2xl border-y-2 uppercase py-4 text-[#151515]">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;
