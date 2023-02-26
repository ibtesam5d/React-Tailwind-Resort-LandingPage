import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20  pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 sm:mb-[20%]">
      {/* left side */}
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          magnam officia, eum deserunt voluptatem vero?
        </p>
      </div>
      {/* right side */}
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full row-span-2"
          src="https://images.unsplash.com/photo-1545552663-0eb050bb04c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwcmVzb3J0JTIwcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1576801582643-c4e3d33efd2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwcmVzb3J0JTIwcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1662385930165-49ebaa03b152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYWNoJTIwcmVzb3J0JTIwcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
