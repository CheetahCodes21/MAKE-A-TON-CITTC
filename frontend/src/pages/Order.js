import React, { useState } from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Burger",
      price: 10,
      image: "https://example.com/burger.jpg",
    },
    {
      id: 2,
      name: "Pizza",
      price: 12,
      image: "https://example.com/pizza.jpg",
    },
    {
      id: 3,
      name: "Pasta",
      price: 8,
      image: "https://example.com/pasta.jpg",
    },
    {
      id: 4,
      name: "Salad",
      price: 6,
      image: "https://example.com/salad.jpg",
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
