import React, { useState } from 'react';

const Cart = () => {
  // Mock data representing your EJS products array
  const [products, setProducts] = useState([
    {
      _id: "1",
      name: "Sample Product",
      price: 1200,
      discount: 10,
      quantity: 1,
      bgcolor: "#282c34",
      panelcolor: "#3e4451",
      textcolor: "#ffffff",
      image: null, // If you have base64 strings, they go here
    }
  ]);

  // Logic to update quantity
  const updateQty = (id, delta) => {
    setProducts(prev => prev.map(p => 
      p._id === id ? { ...p, quantity: Math.max(1, (p.quantity || 1) + delta) } : p
    ));
  };

  // Calculations
  const platformFee = 20;
  const totalMRP = products.reduce((total, p) => total + (p.price * (p.quantity || 1)), 0);
  const totalDiscount = products.reduce((total, p) => total + ((p.price * p.discount / 100) * (p.quantity || 1)), 0);
  const netTotal = totalMRP - totalDiscount;

  // Inline Styles
  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'start',
    padding: '80px 5vw',
    gap: '40px',
    backgroundColor: '#fff',
    color: '#000',
    boxSizing: 'border-box',
    flexWrap: 'wrap'
  };

  const productCardStyle = {
    width: '100%',
    maxWidth: '350px',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '40px',
    border: '1px solid #eee'
  };

  const priceBreakdownStyle = {
    flex: '1',
    minWidth: '300px',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      {/* Left Side: Product List */}
      <div style={{ width: '100%', maxWidth: '600px' }}>
        {products.map((product) => {
          const discountedPrice = product.price * (1 - (product.discount / 100));
          const productTotal = discountedPrice * (product.quantity || 1);

          return (
            <div key={product._id} style={productCardStyle}>
              {/* Image Section */}
              <div style={{ width: '100%', height: '320px', backgroundColor: product.bgcolor || '#222' }}>
                {product.image ? (
                  <img 
                    src={`data:image/jpeg;base64,${product.image}`} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectCover: 'cover' }} 
                  />
                ) : (
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    No Image
                  </div>
                )}
              </div>

              {/* Panel Section */}
              <div style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '16px 20px', 
                backgroundColor: product.panelcolor || '#555',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: product.textcolor || '#fff' }}>
                  {product.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button 
                    onClick={() => updateQty(product._id, 1)}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: '#fff', fontWeight: 'bold' }}>+</button>
                  <div style={{ padding: '4px 10px', backgroundColor: '#fff', borderRadius: '4px', fontSize: '14px' }}>
                    {product.quantity || 1}
                  </div>
                  <button 
                    onClick={() => updateQty(product._id, -1)}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: '#fff', fontWeight: 'bold' }}>-</button>
                </div>
              </div>

              {/* Net Total for Card */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px' }}>
                <h4 style={{ margin: 0, fontWeight: '400' }}>Net Total</h4>
                <h2 style={{ margin: 0, fontSize: '1.2rem' }}>₹ {productTotal.toFixed(0)}</h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side: Price Breakdown */}
      <div style={priceBreakdownStyle}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          Price Breakdown
        </h3>
        
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <h4 style={{ width: '40%', margin: 0, fontWeight: '400' }}>Total MRP</h4>
          <h4 style={{ margin: 0 }}>₹ {totalMRP}</h4>
        </div>
        
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <h4 style={{ width: '40%', margin: 0, fontWeight: '400' }}>Discount on MRP</h4>
          <h4 style={{ margin: 0, color: 'green' }}>-₹ {totalDiscount.toFixed(0)}</h4>
        </div>
        
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <h4 style={{ width: '40%', margin: 0, fontWeight: '400' }}>Platform Fee</h4>
          <h4 style={{ margin: 0 }}>₹ {platformFee}</h4>
        </div>
        
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <h4 style={{ width: '40%', margin: 0, fontWeight: '400' }}>Shipping Fee</h4>
          <h4 style={{ margin: 0, color: 'green' }}>FREE</h4>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#000', margin: '40px 0 20px 0' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ width: '40%', fontSize: '1.25rem', margin: 0 }}>Total Amount</h3>
          <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#16a34a', fontWeight: '600' }}>
            ₹ {(netTotal + platformFee).toFixed(0)}
          </h3>
        </div>

        <button style={{
          marginTop: '30px',
          width: '100%',
          padding: '15px',
          backgroundColor: '#16a34a',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;