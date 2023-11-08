import React from "react";

type CategoriesProps = {value: number, onClickCategory: (i: number) => void}

const Categories: React.FC<CategoriesProps> = ({value, onClickCategory}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onClickCategories: (index: number) => void = (index) => {
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
