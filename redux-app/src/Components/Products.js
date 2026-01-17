import React, { useState, } from 'react';

import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [isProducts, setProducts] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    const navigate = useNavigate();
    
    // Responsive width tracking
    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    React.useEffect(()=>{
        const incomingProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products"); // returns a string
            const data = await res.json();

            console.log(data);
            setProducts(data);
        };
        incomingProducts();
    }, []);
    
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    // Calculate grid columns based on screen size
    const getGridColumns = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    return (
        <div style={{marginTop: "1rem", backgroundColor: "#282C34", minHeight: "100vh", boxSizing: "border-box",
            padding: isMobile ? "1rem" : "2rem",
        }} className="productsWrapper">
            
            {/* Page Header */}
            <div style={{textAlign: "center",
                marginBottom: isMobile ? "2rem" : "3rem"
            }}>
                <h1 style={{fontWeight: "bold",color: "#fff",margin: 0,
                    fontSize: isMobile ? "2rem" : "2.5rem",
                }}>
                    Our Products
                </h1>
                <div style={{height: "4px", width: isMobile ? "48px" : "64px", borderRadius: "9999px", backgroundColor: "#6b7280", margin: "16px auto"
                }}></div>
                <p style={{fontSize: isMobile ? "0.9rem" : "1rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto", lineHeight: "1.5"}}
                >
                    Discover amazing products with great quality and prices
                </p>
            </div>

            {/* Products Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
                gap: isMobile ? "1rem" : "1.5rem",
                maxWidth: "1400px",
                margin: "0 auto"
            }}>
                {isProducts.map((product) => (
                    <div 
                        className="card" 
                        key={product.id}
                        onClick={() => {
                            navigate(`/product/${product.id}`)
                        }}
                        style={{
                            backgroundColor: "#1f2937",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            border: "1px solid #374151",
                            ":hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
                                borderColor: "#4b5563"
                            }
                        }}
                    >
                        {/* Product Image */}
                        <div style={{
                            width: "100%",
                            height: isMobile ? "200px" : "250px",
                            backgroundColor: "#111827",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1rem",
                            position: "relative"
                        }}>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    filter: "brightness(0.9)"
                                }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/300x300/111827/6b7280?text=No+Image";
                                }}
                            />
                            {/* Category Badge */}
                            <span style={{
                                position: "absolute",
                                top: "12px",
                                right: "12px",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "#d1d5db",
                                padding: "4px 12px",
                                borderRadius: "20px",
                                fontSize: "0.75rem",
                                fontWeight: "500",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px"
                            }}>
                                {product.category}
                            </span>
                        </div>

                        {/* Product Info */}
                        <div style={{
                            padding: isMobile ? "1rem" : "1.5rem",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            {/* Title */}
                            <h4 style={{
                                fontSize: isMobile ? "1rem" : "1.1rem",
                                fontWeight: "600",
                                color: "#fff",
                                margin: "0 0 0.75rem 0",
                                lineHeight: "1.4",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                minHeight: "2.8rem"
                            }}>
                                {product.title}
                            </h4>

                            {/* Price */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "1rem"
                            }}>
                                <h5 style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    color: "#60a5fa",
                                    margin: 0
                                }}>
                                    ${product.price}
                                </h5>
                                
                                {/* Rating */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    color: "#fbbf24"
                                }}>
                                    <span style={{ fontSize: "1.1rem" }}>★</span>
                                    <span style={{
                                        fontSize: "0.9rem",
                                        color: "#d1d5db"
                                    }}>
                                        {product.rating.rate} ({product.rating.count})
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: "0.875rem",
                                color: "#9ca3af",
                                margin: "0 0 1.5rem 0",
                                lineHeight: "1.5",
                                flexGrow: 1,
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            }}>
                                {product.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Products;
