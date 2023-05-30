import { Parallax } from 'react-parallax';

const Cover = ({ coverImg, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col w-full bg-black bg-opacity-50 justify-center items-center px-32 py-16">
            <h1 className="mb-5 text-5xl font-bold uppercase font-[cinzel]">
              {title}
            </h1>
            <p className="mb-5 uppercase font-[cinzel]">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
