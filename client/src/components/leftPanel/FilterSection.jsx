import React from "react";
const categories = [
  "Laptops",
  "Gaming",
  "Accessories",
  "Peripherals",
  "Storage",
  "Components",
  "Monitors",
  "Printers",
];

export default function FilterSection() {
  return (
    <div>
      <div>
        {categories.map((categorie) => (
          <button key={categorie}>{categorie}</button>
        ))}
      </div>
      <div></div>
    </div>
  );
}
