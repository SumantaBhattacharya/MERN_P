import React from 'react';
import Products from '../Products';

const Home = () => {
    return (
        <div style={{paddingLeft: "1rem",
                     paddingRight: "1rem",
                     paddingTop: "1rem"
        }}>
            {/* <h2 style={{
              marginBottom: "1.6rem",
              fontSize: "1.8rem"
            }} className="heading">Welcome to the Redux toolkit store</h2> */}
            <main>
                {/* <h3 tyle={{
              marginBottom: "2rem",
              fontSize: "1.7rem"
            }}>Products</h3> */}
                <Products />
            </main>
        </div>
    );
};

export default Home;