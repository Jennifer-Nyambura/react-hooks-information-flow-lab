import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items"; // adjust path if needed

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header
        onDarkModeClick={handleDarkModeClick}
        isDarkMode={isDarkMode}
      />
      <ShoppingList
        items={items}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
