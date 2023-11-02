import React, { useState } from "react";

const Categories = ({value, onClickCategory}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onClickCategories = (index) => {
    onClickCategory(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((list, i) => (
          <li key={i}
            className={value === i ? "active" : ""}
            onClick={() => onClickCategories(i)}
          >
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
