import React from "react";

export default function Card({ items }) {
  return (
    <div className="bg-[#ffffff00] border-b-2 border-white py-8 pt-0 text-black flex flex-col item-center md:grid md:grid-cols-[200px_1fr] md:items-stretch items-center gap-4 text-left">
      <img
        src={items.logo}
        alt="LindungiHutan"
        className="rounded-md sm:w-[200px] w-[100%] shadow-md"
      />
      <div className="flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white pb-1 mb-2 text-center md:text-start">
            {items.title}
          </h3>
          <p className="description text-[15px] text-white mb-2 text-justify">
            {items.description}
          </p>
          <p className="description text-sm text-white font-bold">
            Year: {items.years}
          </p>
        </div>
        <div className="flex gap-2 xs:flex-wrap">
          {items.stacks.map((stack, index) => (
            <p
              className="bg-emerald-900 py-1 px-2 border rounded-lg text-[12px]"
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
