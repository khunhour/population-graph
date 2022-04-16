import React from "react";

export default function CheckBox({ name, index, handleCheck }) {
  return (
    <>
      <div key={index}>
        <input value={name} type="checkbox" onChange={handleCheck} />
        <span>{name}</span>
      </div>
    </>
  );
}
