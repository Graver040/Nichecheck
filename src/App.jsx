import React, { useState } from 'react';
import './index.css';
import ShinyText from './ShinyText';
import StaggeredMenu from './StaggeredMenu';

import { productsData } from './data';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3>{product.name}</h3>
        <span className="category-badge">{product.category}</span>
      </div>
      <div className="product-price">₹{product.price}</div>
    </div>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Clothing', 'Home'];
  
  const menuItems = categories.map(cat => ({
    label: cat,
    value: cat,
    ariaLabel: `Filter by ${cat}`
  }));

  const filteredProducts = productsData.filter(product => {
    // Search is case insensitive
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={true}
        menuButtonColor="#839958"
        openMenuButtonColor="#2d371e"
        changeMenuColorOnOpen={true}
        colors={['#e5e0b6', '#d3968c']}
        accentColor="#839958"
        onItemClick={(category) => setSelectedCategory(category)}
      />
      <div className="app-container">
        <header className="app-header">
          <ShinyText
            text="Product Explorer"
            speed={4}
            delay={0}
            color="#839958"
            shineColor="rgba(255, 255, 255, 0.5)"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
            className="app-title-shiny"
          />
          <p>Find what you need, instantly.</p>
        </header>

        <div className="controls-container">
          <div className="search-bar">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="active-category-indicator">
            Viewing: <strong>{selectedCategory}</strong>
          </div>
        </div>

      <div className="results-container">
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default App;
