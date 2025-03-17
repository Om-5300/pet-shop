import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Initialize navigation
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("1 kg");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:5000/product");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        const allProducts = data.flatMap((category) => category.items);
        const selectedProduct = allProducts.find(
          (prod) => prod.id === parseInt(id)
        );

        if (!selectedProduct) throw new Error("Product not found");

        setProduct(selectedProduct);
        setSelectedImage(selectedProduct.images[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ✅ Ensure the page scrolls to the top on navigation

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  const handleAddToBag = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price.discounted,
      image: selectedImage,
      quantity,
      size,
    };
  
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Check if the product already exists in the cart
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === cartItem.id && item.size === cartItem.size
    );
  
    if (existingProductIndex !== -1) {
      // Update quantity if the product already exists
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      // Add new item if it doesn't exist
      existingCart.push(cartItem);
    }
  
    // Store the updated cart back in localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  
    // Navigate to Cart Page
    navigate("/cart");
  };
  

  return (
    <div className="product-container">
      <div className="product-images">
        <img src={selectedImage} alt={product.title} className="main-image" />
        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="product-price">
          <strong>£{product.price.discounted}</strong>{" "}
          <del>£{product.price.base}</del> ({product.price.save} off)
        </p>

        <div className="size-options">
          <p>Size:</p>
          {["1 kg", "2 kg", "5 kg"].map((option) => (
            <button
              key={option}
              className={`size-btn ${size === option ? "selected" : ""}`}
              onClick={() => setSize(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="quantity-container">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* ✅ Add to Bag Button */}
        <button className="add-to-cart" onClick={handleAddToBag}>
          Add to Bag
        </button>

        <div className="product-description">
          <h3>Product Details</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
