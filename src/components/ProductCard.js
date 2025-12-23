import React from 'react';
import '../App.css'; // Ensure we use the global styles, or we can use modules if we prefer

const ProductCard = ({ product }) => {
    return (
        <article className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
            </div>
            <div className="product-info">
                <h3 className="product-title" title={product.title}>{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button className="add-to-cart-btn" aria-label={`Add ${product.title} to cart`}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
