import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Menu = ({ addToOrder }) => {
  const menuItems = [
    {
      id: 1,
      name: "Burger",
      price: 10,
      image: "https://via.placeholder.com/150?text=Burger",
    },
    // ... other menu items
  ];

  return (
    <div>
      
      <h1 className="text-center mb-4">Menu</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {menuItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100">
              <img src={item.image} alt={item.name} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => addToOrder(item)}
                >
                  Add to Order
                </button>
              </div>
            </div>
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
    <>
    <Navbar/>
    <div className="container my-5">
      <Menu addToOrder={addToOrder} />
      <div className="mt-5">
        <h2 className="text-center">Order Summary</h2>
        <ul className="list-group">
          {order.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <img src={item.image} alt={item.name} width="50" className="img-thumbnail" />
              <span>{item.name} - ${item.price}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-end mt-3">Total: ${total}</h3>
        <div className="d-grid gap-2">
          <button className="btn btn-success btn-lg" onClick={() => alert("Order placed!")}>
            Place Order
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrderPage;
