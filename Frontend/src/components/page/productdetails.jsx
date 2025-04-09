import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("1 kg");
  const [addingToCart, setAddingToCart] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product");
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
        setErrorMessage("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToBag = async () => {
    try {
      setAddingToCart(true);
      setErrorMessage("");

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login", { state: { from: `/product/${id}` } });
        return;
      }

      const cartItem = {
        productId: product.id,
        title: product.title,
        price: product.price.discounted,
        image: selectedImage,
        quantity,
        size,
      };

      const response = await axios.post(
        "http://localhost:5000/api/cart/add",
        cartItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Added to cart successfully", response.data);
      
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login", { state: { from: `/product/${id}` } });
      } else {
        setErrorMessage("Failed to add item to cart. Please try again.");
      }
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) return (
    <div className="loading-container">
      <h2>Loading product details...</h2>
    </div>
  );

  if (!product) return (
    <div className="error-container">
      <h2>Product not found</h2>
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  );

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
          <strong>₹{product.price.discounted}</strong> <del>₹{product.price.base}</del> ({product.price.save} off)
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
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button 
          className="add-to-cart" 
          onClick={handleAddToBag}
          disabled={addingToCart}
        >
          {addingToCart ? "Adding..." : "Add to Bag"}
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
