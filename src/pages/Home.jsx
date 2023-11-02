import React, { useEffect, useState } from "react";
import SkeletonPizza from "../components/PizzaBlock/SkeletonPizza";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filteredSlice";
import { setItems, fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {

  const { category, page, searchValue, sort } = useSelector(
    (state) => state.filtered
  );

  const { items, status } = useSelector((state) => state.pizza);

  const dispatch = useDispatch();

  useEffect(() => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const categoryId = category > 0 ? `category=${category}` : "";
    dispatch(fetchPizzas({ order, sortBy, categoryId, page, searchValue }));
    window.scrollTo(0, 0);
  }, [category, sort, page, searchValue]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={category}
            onClickCategory={(i) => dispatch(setCategoryId(i))}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === "error" ? (
          <div className="content__error-info">
            <h2>Ошибка</h2>
            <p>Не удалось загрузить пиццы</p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading"
              ? [...new Array(6)].map((_, i) => <SkeletonPizza key={i} />)
              : items.map((item) => (
                  <PizzaBlock key={item.imageUrl} {...item} />
                ))}
          </div>
        )}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
