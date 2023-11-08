import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{imageUrl: string, title: string, price: number}>();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64803a94f061e6ec4d48d979.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка получения данных с сервера");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка.....";
  }
  console.log(pizza);
  return (
    <div className="container">
      <h2>{pizza.title}</h2>
      <img src={pizza.imageUrl} alt="img" />
      <h3>{pizza.price} руб.</h3>
    </div>
  );
};

export default FullPizza;
