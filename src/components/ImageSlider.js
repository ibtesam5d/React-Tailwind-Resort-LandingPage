import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1615761136599-86165bdf1a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9ic3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      title: "lobster",
    },
    {
      url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "salmon",
    },
    {
      url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      title: "sushi",
    },
    {
      url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      title: "pasta",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* left arrow */}
      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 lg:left-8 text-2xl rounded-full p-2 group-hover:bg-white/60 text-gray-900 cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* right arrow */}
      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 lg:right-8 text-2xl rounded-full p-2 group-hover:bg-white/60 text-gray-900 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, Index) => {
          return (
            <div
              key={Index}
              className="text-2xl cursor-pointer"
              onClick={() => {
                goToSlide(Index);
              }}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
