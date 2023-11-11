import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Img from '../Assets/background/orderbg.jpg'
const Menu = ({ addToOrder }) => {
  const menuItems = [
    {
      id: 1,
      name: "Veg Burger",
      category: "Vegetarian",
      price: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9qEbabyO1Dp12cH93so6Mm10Di0dMAijFulqpV75WZ4f70z3E0bKbOEskFR_2h9vHWk&usqp=CAU",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Vegetarian",
      price: 12,
      image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
    },
    {
      id: 3,
      name: "Pasta Primavera",
      category: "Vegetarian",
      price: 8,
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/1/20/0/ei1c05_pasta_primavera.jpg.rend.hgtvcom.616.462.suffix/1390961819392.jpeg",
    },
    {
      id: 4,
      name: "Chicken Salad",
      category: "Non-Vegetarian",
      price: 6,
      image: "https://img.taste.com.au/XPfahwow/taste/2018/08/lemon-chicken-noodle-salad-p64-140239-2.jpg",
    },
    {
      id: 5,
      name: "Chicken shawarma",
      category: "Non-Vegetarian",
      price: 9,
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/chicken-shawarma.jpg.webp",
    },
    {
      id: 6,
      name: "Mutton Kurma",
      category: "Non-Vegetarian",
      price: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeYfTb4LBBH36BbUZ7XxNz8l-OvHuw5oDQg&usqp=CAU",
    },
    {
      id: 7,
      name: "Fish Tacos",
      category: "Non-Vegetarian",
      price: 9,
      image: "https://www.acouplecooks.com/wp-content/uploads/2020/07/Fish-Tacos-Recipe-002-1.jpg",
    },
    {
      id: 8,
      name: "Shrimp Scampi",
      category: "Non-Vegetarian",
      price: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS-exBR_ivmJ9gkcvt_TBPxVuJ8sM3a5YDA&usqp=CAU",
    },
    {
      id: 9,
      name: "Lamb Kebabs",
      category: "Non-Vegetarian",
      price: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKbw1ZGrpHvBtblri_txjJtBjf9DyAtjjbw&usqp=CAU",
    },
    {
      id: 10,
      name: "Pork Ribs",
      category: "Non-Vegetarian",
      price: 4,
      image: "https://heygrillhey.com/static/c349fd48a5cc4699cf29e1ff199ad540/321-Ribs-Feature.png",
    },
    {
      id: 11,
      name: "Crab Cakes",
      category: "Non-Vegetarian",
      price: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAHFDZr4ibE6Ujfl65xJIzB3tQxkQAt95bw&usqp=CAU",
    },
    {
      id: 12,
      name: "Lobster Thermidor",
      category: "Non-Vegetarian",
      price: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWtpxXgMzUtd6ZPi5AYYoKMZEYOD8sWRyiw&usqp=CAU",
    },
    {
      id: 13,
      name: "Veg Biryani",
      category: "Vegetarian",
      price: 12,
      image: "https://static.toiimg.com/thumb/53098310.cms?imgsize=579584&width=800&height=800",
    },
    {
      id: 14,
      name: "Mushroom Risotto",
      category: "Vegetarian",
      price: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxYeomHA2r2fjvLHm_fwffndajI3wTp8FYw&usqp=CAU",
    },
    {
      id: 15,
      name: "vegetarian pad thai",
      category: "Vegetarian",
      price: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WQnyJsXAny3gepgi_275uhe3V8VkQTMRtw&usqp=CAU",
    },
    {
      id: 16,
      name: "Paneer Tikka",
      category: "Vegetarian",
      price: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXPbXLNAVmN2KcTso5kiEgRNl5l7FDw6rTA&usqp=CAU",
    },
    {
      id: 17,
      name: "Dal Makhani",
      category: "Vegetarian",
      price: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuc-YX0G7D9PDzhP-DlrJH3-LLAsXg5cj2-g&usqp=CAU",
    },
    {
      id: 18,
      name: "Aloo Gobi",
      category: "Vegetarian",
      price: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDWUUWK9SncmXgJJDun8CqD-dV7mnlGv2Cg&usqp=CAU",
    },
    
  ];
  const categories = Array.from(new Set(menuItems.map((item) => item.category)));

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems
    .filter((item) => item.category === selectedCategory)
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1 className="text-center mb-4">Menu</h1>
      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label">Select Category:</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Search Food:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter food name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100">
              <img src={item.image} alt={item.name} className="card-img-top img-fluid"  style={{maxHeight:'280px'}}/>
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
    const existingItemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If item already exists in the order, update its count
      const updatedOrder = [...order];
      updatedOrder[existingItemIndex].count += 1;
      setOrder(updatedOrder);
    } else {
      // If item doesn't exist in the order, add it with count 1
      setOrder([...order, { ...item, count: 1 }]);
    }

    setTotal(total + item.price);
  };

  const removeFromOrder = (index) => {
    const itemToRemove = order[index];
    const updatedOrder = [...order];

    if (itemToRemove.count > 1) {
      // If count is more than 1, decrement count
      updatedOrder[index].count -= 1;
    } else {
      // If count is 1, remove the item from the order
      updatedOrder.splice(index, 1);
    }

    setOrder(updatedOrder);
    setTotal(total - itemToRemove.price);
  };
  const placeOrder = () => {
    // Handle the logic for placing the order, e.g., sending the order to a server
    if (order.length === 0) {
      alert("No items selected. Please add items to your order.");
      return; // Stop further execution if no items are selected
    }
    // Reset the order and total after placing the order
    setOrder([]);
    setTotal(0);
    alert("Order placed!");
  };

  return (
    <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
      <Navbar />
      <div className="container my-5 bg-white">
        <Menu addToOrder={addToOrder} />
        <div className="mt-5">
          <h2 className="text-center text-white">Order Summary</h2>
          <ul className="list-group">
            {order.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.image} alt={item.name} width="50" className="img-thumbnail me-3" />
                  <span>{item.name} - ${item.price} x {item.count}</span>
                </div>
                <div>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => removeFromOrder(index)}
                  >
                    Cancel
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-end mt-3">Total: ${total}</h3>
          <div className="d-grid gap-2">
            <button className="btn btn-success btn-lg m-3" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;