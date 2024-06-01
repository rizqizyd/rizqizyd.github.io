import React from "react";

export default function Card({ items }) {
  const divStyle = {
    backgroundColor: "#001936",
    border: "1px solid #ffbb00",
  };

  return (
    <div className="bg-[#282828] border border-[#4f4f4f] rounded-xl p-4 text-white !flex !flex-col justify-between gap-4 hover:border-green-500 hover:bg-cyan-500/10 duration-300 transition-all">
      <div className="!flex !flex-col justify-between gap-4">
        <h3 className="text-lg font-bold">{items.title}</h3>
        <div className="flex gap-3">
          {items.stacks.map((stack, index) => (
            <p
              className="bg-teal-600/50 py-1 px-2 border border-teal-400 rounded-lg text-[10px]"
              key={index}
            >
              {stack}
            </p>
          ))}
        </div>
        <p className="description text-sm">{items.description}</p>
      </div>
      {items.url || items.slug ? (
        <a
          href={items.url ? items.url : items.slug}
          target="_blank"
          className="hover:shadow-lg py-2 px-4 font-bold rounded-lg ease-in-out duration-300 flex items-center bg-cyan-500 hover:shadow-cyan-500/50 text-white text-sm w-full justify-center"
        >
          Visit
        </a>
      ) : (
        <div className="hover:shadow-lg py-2 px-4 font-bold rounded-lg ease-in-out duration-300 flex items-center bg-red-400 text-white text-sm w-full justify-center">
          Unavailable
        </div>
      )}
    </div>
  );
}
