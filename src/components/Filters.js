import React from 'react';

const Filters = ({ categories, selectedCategory, onSelectCategory, onClearFilters }) => {
    return (
        <aside className="filters-sidebar">
            <div className="filters-header">
                <h2>Filters</h2>
                <button className="clear-filters-btn" onClick={onClearFilters}>Clear All</button>
            </div>

            <div className="filter-group">
                <h3>Categories</h3>
                <ul className="category-list">
                    {categories.map(category => (
                        <li key={category}>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={selectedCategory === category}
                                    onChange={() => onSelectCategory(category)}
                                />
                                <span className="checkbox-text">{category}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-group">
                <h3>Price Range</h3>
                {/* Placeholder for price slider */}
                <div className="price-inputs">
                    <input type="number" placeholder="Min" className="price-input" disabled />
                    <span>-</span>
                    <input type="number" placeholder="Max" className="price-input" disabled />
                </div>
            </div>
        </aside>
    );
};

export default Filters;
