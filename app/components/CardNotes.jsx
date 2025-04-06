import React from "react";

function CardNotes({ title }) {
  return (
    <div className="bg-navy cursor-pointer shadow-sm p-6 text-black md:items-stretch gap-4 text-left">
      <h5>{title}</h5>
      <p>Here are some notes about the card.</p>
    </div>
  );
}

export default CardNotes;
