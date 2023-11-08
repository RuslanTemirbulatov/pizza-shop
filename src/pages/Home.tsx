import React, { useEffect, useState } from "react";
import SkeletonPizza from "../components/PizzaBlock/SkeletonPizza";
import Sort from "../components/Sort.tsx";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, selectFilter } from "../redux/slices/filteredSlice";
import { setItems, fetchPizzas, selectPizzas } from "../redux/slices/pizzaSlice";
import { useAppDispatch } from "../redux/store.ts";

const Home: React.FC = () => {
  const { category, page, searchValue, sort } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzas);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const categoryId = category > 0 ? `category=${category}` : "";
    dispatch(fetchPizzas({ order, sortBy, categoryId, page: String(page), searchValue }));
    window.scrollTo(0, 0);
  }, [category, sort, page, searchValue]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={category}
            onClickCategory={(i: number) => dispatch(setCategoryId(i))}
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
              : items.map((item: any) => (
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
