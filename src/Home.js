import React from "react";
import "./Home.scss";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZjNlMmIxN2Et/ZjNlMmIxN2Et-NjJjN2NiMWEt-w3000._CB411745142_.jpg"
          alt="Amazon Background"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="1"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="1"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="1"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
