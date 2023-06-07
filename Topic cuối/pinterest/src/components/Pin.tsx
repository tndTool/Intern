import LazyLoad from "react-lazy-load";
import React, { useState, useEffect } from "react";

interface PinProps {
  tokenId: number;
}

interface ImageData {
  tokenId: number;
  image: string;
}

const Pin: React.FC<PinProps> = ({ tokenId }) => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    fetch(`https://www.galverse.art/api/metadata/${tokenId}.json`)
      .then((response) => response.json())
      .then((data) => setImageData(data));
  }, [tokenId]);

  if (!imageData) {
    return <div>Loading...</div>;
  }

  const imageUrl = `https://ipfs.io/ipfs/${imageData.image.substring(7)}`;

  return (
    <div className="d-inline-flex">
      <div className="cursor-zoom-in border-box mb-3">
        <LazyLoad>
          <img
            className="d-flex h-100 w-100 border-radius-1 object-fit-cover"
            src={imageUrl}
            alt={`Galverse art ${tokenId}`}
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Pin;
