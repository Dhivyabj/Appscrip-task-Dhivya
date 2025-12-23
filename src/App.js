import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import Filters from './components/Filters';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="App">
      <Helmet>
        <title>Product Listing Page | LuxeStyle</title>
        <meta name="description" content="Browse our exclusive collection of products including electronics, jewelery, men's clothing, and women's clothing." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": ${JSON.stringify(filteredProducts.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": product.title,
              "image": product.image,
              "description": product.description,
              "sku": product.id
            }
          })))}
            }
          `}
        </script>
      </Helmet>

      <Header />

      <main>
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onClearFilters={handleClearFilters}
        />

        <ProductGrid products={filteredProducts} isLoading={isLoading} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
