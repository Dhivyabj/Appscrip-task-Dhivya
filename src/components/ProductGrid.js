import React from 'react';
import ProductCard from './ProductCard';
import '../App.css';

const ProductGrid = ({ products, isLoading }) => {
    if (isLoading) {
        return <div className="loading-state">Loading products...</div>;
    }

    if (!products || products.length === 0) {
        return <div className="empty-state">No products found.</div>;
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
