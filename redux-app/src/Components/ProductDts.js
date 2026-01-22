import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDts = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    // initialState should be TRUE because we're loading initially
    const [isLoading, setLoading] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    
    // Responsive width tracking
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Fetch ALL products first
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {

                setLoading(true);

                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                
              // If we have a productId, find that specific product
              if (productId) {
                  const slectedProduct = data.find(p => p.id === parseInt(productId));
                  setProduct(slectedProduct);
              }
            }catch(err){
                console.error("Error fetching products:", err);
            }finally{
                setLoading(false);
            }
        };
        fetchAllProducts();
    }, [productId]);

    if (isLoading) {
        return (
            <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#282C34'
            }}>
                <div style={{
                    width: '120px',
                    height: '20px',
                    background: 
                        'linear-gradient(#000 50%,#0000 0),' +
                        'linear-gradient(#0000 50%,#000 0),' +
                        'linear-gradient(#000 50%,#0000 0),' +
                        'linear-gradient(#0000 50%,#000 0),' +
                        'linear-gradient(#000 50%,#0000 0),' +
                        'linear-gradient(#0000 50%,#000 0) #ddd',
                    backgroundSize: 'calc(100%/6 + 1px) 200%',
                    backgroundRepeat: 'no-repeat',
                    animation: 'l12 2s infinite',
                }} />
                
                <style>
                    {`
                    @keyframes l12 {
                        0%     {background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                        16.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                        33.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                        50%    {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                        66.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                        83.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%}
                        100%   {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%}
                    }
                    `}
                </style>
            </div>
        );
    }

    const isMobile = width < 768;

    return (
        <>
         <style>
            {`
                button:focus-visible {
                  outline: 3px solid #fff;
                  outline-offset: 3px;
                }
            `}
         </style>

        <div style={{backgroundColor: '#282C34', minHeight: '100vh', boxSizing: 'border-box',
          paddingTop: isMobile ? '4vw' : '2vw', 
          paddingBottom: isMobile ? '4vw' : '2vw', 
        }}>
            {/* Container */}
            <div style={{maxWidth: '1400px', margin: '0 auto',
                padding: isMobile ? '1rem' : '0 2rem'
            }}>
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    style={{backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151', padding: '0.75rem 1.5rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.95rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px',
                        // ':hover': {
                        //     backgroundColor: '#374151'
                        // }
                    }}
                >
                    ← Back to All Products
                </button>

                {/* Main Product Card */}
                <div style={{backgroundColor: '#1f2937',borderRadius: '12px',overflow: 'hidden',border: '1px solid #374151',boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
                }}>
                    {/* Product Image with Heart Overlay */}
                    <div style={{ position: 'relative' }}>
                        <img 
                            src={product.image} 
                            alt={product.title}
                            style={{width: '100%', objectFit: 'contain', backgroundColor: '#111827', padding: '2rem',
                                height: isMobile ? '250px' : '400px',
                            }}
                        />
                    </div>

                    {/* Product Info */}
                    <div style={{padding: isMobile ? '1.5rem' : '2rem'}}>
                        <div style={{marginBottom: '1.5rem'}}>
                            <h1 style={{fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem',
                                fontSize: isMobile ? '1.5rem' : '2rem',
                            }}>
                                {product.title}
                            </h1>
                            
                            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa'}}>
                                    ${product.price.toLocaleString()}
                                </span>
                                
                                <span style={{backgroundColor: '#374151', color: '#d1d5db', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem'}}>
                                    {product.category}
                                </span>
                            </div>
                            
                            {/* Rating */}
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#fbbf24', marginBottom: '1.5rem'
                            }}>
                                <span style={{ fontSize: '1.1rem' }}>★</span>
                                <span style={{fontSize: '1rem', color: '#d1d5db'}}>
                                    {product.rating.rate} ({product.rating.count} reviews)
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div style={{backgroundColor: '#111827', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem'}}>
                            <h3 style={{fontSize: '1.2rem', color: '#fff', marginBottom: '1rem'
                            }}>
                                Product Description
                            </h3>
                            <p style={{fontSize: '1rem', color: '#9ca3af', lineHeight: '1.6'
                            }}>
                                {product.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: isMobile ? 'column' : 'row', alignItems: 'center',  gap: '12px',  marginTop: '32px',
                            width: isMobile ? '100%' : 'auto'}}
                        >
                        {/* <button> is natively keyboard-accessible */}
                            <button style={{backgroundColor: '#1f2937',color: '#fff',border: '1px solid #374151', padding: '12px 28px',borderRadius: '6px',cursor: 'pointer',fontSize: '1rem',fontWeight: '600',
                                width: isMobile ? '100%' : 'auto',textAlign: 'center',boxSizing: 'border-box',
                                // outline: 'none',
                                transition: 'all 0.2s ease'}}
                            onClick={()=>{
                                document.querySelector("#cart-items").focus();
                            }}
                            // tabIndex={0}
                            // role='button'
                            // aria-label='Add to Cart'
                            >
                                Add to Cart
                            </button>
    
                            <button 
                            // tabIndex={0}
                            // role='button'
                            // aria-label='Buy Now'
                            style={{
                                backgroundColor: 'transparent', // Transparent background
                                color: '#fff', // Blue text instead of white
                                border: '1px solid #d1d5db', // Blue border
                                padding: '12px 28px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: '600',
                                width: isMobile ? '100%' : 'auto',
                                textAlign: 'center',
                                boxSizing: 'border-box',
                                // outline: 'none',
                                transition: 'all 0.2s ease',
                            /* ':hover': {
                                    backgroundColor: '#60a5fa',
                                    color: '#fff'
                            }*/
                        }}>
                            Buy Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default ProductDts;