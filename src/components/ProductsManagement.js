import "../css/ProductsManagement.css";
import React, { useState } from "react";

const ProductsManagement = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      price: 10,
      stockQuantity: 100,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category 2",
      price: 20,
      stockQuantity: 200,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category 3",
      price: 30,
      stockQuantity: 300,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (id, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="products-container">
      <h1 className="products-heading">Products Management</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product-item">
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() =>
                    editProduct(product.id, { name: "Updated Product Name" })
                  }
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="add-button"
        onClick={() =>
          addProduct({
            id: products.length + 1,
            name: "New Product",
            category: "New Category",
            price: 0,
            stockQuantity: 0,
          })
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductsManagement;
