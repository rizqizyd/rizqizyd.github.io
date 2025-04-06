import React from "react";

export default function Card({ items }) {
  return (
    <div className="bg-[#ffffff00] lg:shadow-lg lg:p-6 mb-4 pt-0 text-black flex md:items-stretch gap-4 text-left">
      <img
        src={items.logo}
        alt="LindungiHutan"
        className="rounded-sm w-12 h-12 md:w-44 md:h-44 shadow-md"
      />
      <div className="flex flex-col justify-between gap-4">
        <div>
          <h3 className="leading-none text-md font-bold text-white pb-1 mb-2 text-start">
            {items.title}
          </h3>
          <p className="description text-sm text-white mb-2 text-justify">
            {items.description}
          </p>
          <p className="description text-sm text-white font-bold">
            Year: {items.years}
          </p>
        </div>
        <div className="flex gap-2 xs:flex-wrap">
          {items.stacks.map((stack, index) => (
            <p
              className="bg-beige text-navy py-1 px-2 rounded-sm text-[12px]"
              key={index}
            >
              {stack}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
