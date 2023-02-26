const Hero = () => {
  return (
    <div className="w-full h-screen cursor-default">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
        alt="beach photo"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-screen flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-4 text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            incidunt fugiat, dolorem quas sed laborum exercitationem ex eligendi
            corporis eos?
          </p>
          <button className="bg-white text-black hover:bg-black hover:font-semibold hover:text-white hover:border-black mt-2 ">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
