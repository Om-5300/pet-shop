import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
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
        window.scrollTo(0, 0);
        // Flatten all products into a single list
        const allProducts = data.flatMap((category) => category.items);

        // Find the product by ID
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

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-container">
      {/* Product Images */}
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

      {/* Product Details */}
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="product-price">
          <strong>£{product.price.discounted}</strong>{" "}
          <del>£{product.price.base}</del> ({product.price.save} off)
        </p>

        {/* Subscription Options */}
        <div className="subscription">
          <label>
            <input type="radio" name="subscription" /> One-time purchase
          </label>
          <label>
            <input type="radio" name="subscription" /> Subscribe & Save 10%
          </label>
        </div>

        {/* Size Selection */}
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

        {/* Quantity Selection */}
        <div className="quantity-container">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* Add to Bag Button */}
        <button className="add-to-cart">Add to Bag</button>

        {/* Product Details */}
        <div className="product-description">
          <h3>Product Details</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
