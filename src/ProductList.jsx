import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/CartSlice";

const plants = [
{
id: 1,
name: "Snake Plant",
price: 299,
category: "Air Purifying Plants",
image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
},
{
id: 2,
name: "Peace Lily",
price: 399,
category: "Air Purifying Plants",
image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
},
{
id: 3,
name: "Spider Plant",
price: 249,
category: "Air Purifying Plants",
image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500",
},
{
id: 4,
name: "Areca Palm",
price: 499,
category: "Air Purifying Plants",
image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500",
},
{
id: 5,
name: "Rubber Plant",
price: 449,
category: "Air Purifying Plants",
image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
},
{
id: 6,
name: "Boston Fern",
price: 349,
category: "Air Purifying Plants",
image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
},
{
id: 7,
name: "Aloe Vera",
price: 199,
category: "Succulents",
image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
},
{
id: 8,
name: "Echeveria",
price: 179,
category: "Succulents",
image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500",
},
{
id: 9,
name: "Jade Plant",
price: 229,
category: "Succulents",
image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
},
{
id: 10,
name: "Haworthia",
price: 189,
category: "Succulents",
image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500",
},
{
id: 11,
name: "String of Pearls",
price: 279,
category: "Succulents",
image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
},
{
id: 12,
name: "Christmas Cactus",
price: 259,
category: "Succulents",
image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
},
{
id: 13,
name: "Monstera Deliciosa",
price: 599,
category: "Tropical Plants",
image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
},
{
id: 14,
name: "Bird of Paradise",
price: 699,
category: "Tropical Plants",
image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500",
},
{
id: 15,
name: "Philodendron",
price: 399,
category: "Tropical Plants",
image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
},
{
id: 16,
name: "Calathea",
price: 449,
category: "Tropical Plants",
image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
},
{
id: 17,
name: "ZZ Plant",
price: 349,
category: "Tropical Plants",
image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
},
{
id: 18,
name: "Pothos",
price: 299,
category: "Tropical Plants",
image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500",
},
];

function ProductList() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

const categories = [...new Set(plants.map((plant) => plant.category))];

return ( <div className="product-page"> <h1 className="page-title">Our Beautiful Houseplants</h1>

  <p className="page-description">
    Bring nature home with our carefully selected collection of plants.
  </p>

  {categories.map((category) => (
    <section className="plant-category" key={category}>
      <h2>{category}</h2>

      <div className="product-grid">
        {plants
          .filter((plant) => plant.category === category)
          .map((plant) => {
            const isAdded = cartItems.some(
              (item) => item.id === plant.id
            );

            return (
              <article className="product-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>

                <p className="plant-price">
                  ₹{plant.price}
                </p>

                <button
                  className="add-to-cart-btn"
                  disabled={isAdded}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {isAdded ? "Added to Cart" : "Add to Cart"}
                </button>
              </article>
            );
          })}
      </div>
    </section>
  ))}
</div>


);
}

export default ProductList;
