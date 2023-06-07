import React from "react";
import Pin from "../components/Pin";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="d-flex justify-content-center w-100 h-100 mt-1 overflow-hidden">
      <div className="home-container">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((tokenId) => (
          <Pin key={tokenId} tokenId={tokenId} />
        ))}
      </div>
    </div>
  );
};

export default Home;
