import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({
  items,
  selectedCategory,
  onCategoryChange,
}) {
  const [internalCategory, setInternalCategory] = useState("All");

  const category = selectedCategory ?? internalCategory; // Use prop or internal
  const handleChange = onCategoryChange ?? setInternalCategory; // Use prop or internal

  const itemsToDisplay = items.filter((item) => {
    if (category === "All") return true;
    return item.category === category;
  });

  return (
    <div className="ShoppingList">
      <Filter
        selectedCategory={category}
        onCategoryChange={handleChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
