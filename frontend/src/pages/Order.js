import React, { useState } from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Burger",
      price: 10,
      image: "https://www.safefood.net/getmedia/d81f679f-a5bc-4a16-a592-248d3b1dc803/burger_1.jpg?width=1280&height=720&ext=.jpg",
    },
    {
      id: 2,
      name: "Pizza",
      price: 12,
      image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
    },
    {
      id: 3,
      name: "Pasta",
      price: 8,
      image: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg",
    },
    {
      id: 4,
      name: "Salad",
      price: 6,
      image: "https://img.taste.com.au/XPfahwow/taste/2018/08/lemon-chicken-noodle-salad-p64-140239-2.jpg",
    },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <div className="card-deck">
        {menuItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Price: ${item.price}</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => alert(`Added ${item.name} to your order!`)}
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const OrderPage = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addToOrder = (item) => {
    setOrder([...order, item]);
    setTotal(total + item.price);
  };

  return (
    <div>
      <h1>Order Food</h1>
      <Menu />
      <h2>Order Summary</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} width="100" />
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={() => alert("Order placed!")}>Place Order</button>
    </div>
  );
};

export default OrderPage;
