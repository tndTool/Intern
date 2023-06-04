import React from "react";
import { Image } from "react-bootstrap";

interface Image {
  url: string;
}

interface ImageListProps {
  images: Image[];
}

const ImageList = ({ images }: ImageListProps) => (
  <ul className="image-list" style={{ listStyleType: "none", padding: 0 }}>
    {images.map((image, i) => (
      <li key={i} style={{ display: "inline-block", verticalAlign: "top" }}>
        <Image src={image.url} fluid />
      </li>
    ))}
  </ul>
);

const Main = () => {
  const images = [
    { url: "https://picsum.photos/id/237/400/500" },
    { url: "https://picsum.photos/id/238/400/600" },
    { url: "https://picsum.photos/id/239/400/400" },
    { url: "https://picsum.photos/id/240/400/700" },
    { url: "https://picsum.photos/id/241/400/800" },
    { url: "https://picsum.photos/id/242/400/500" },
    { url: "https://picsum.photos/id/243/400/600" },
    { url: "https://picsum.photos/id/244/400/400" },
    { url: "https://picsum.photos/id/237/400/500" },
    { url: "https://picsum.photos/id/238/400/600" },
    { url: "https://picsum.photos/id/239/400/400" },
    { url: "https://picsum.photos/id/240/400/700" },
    { url: "https://picsum.photos/id/241/400/800" },
    { url: "https://picsum.photos/id/242/400/500" },
    { url: "https://picsum.photos/id/243/400/600" },
    { url: "https://picsum.photos/id/244/400/400" },
    { url: "https://picsum.photos/id/237/400/500" },
    { url: "https://picsum.photos/id/238/400/600" },
    { url: "https://picsum.photos/id/239/400/400" },
    { url: "https://picsum.photos/id/240/400/700" },
    { url: "https://picsum.photos/id/241/400/800" },
    { url: "https://picsum.photos/id/242/400/500" },
    { url: "https://picsum.photos/id/243/400/600" },
    { url: "https://picsum.photos/id/244/400/400" },
  ];

  return (
    <div className=" mt-2">
      <ImageList images={images} />
    </div>
  );
};

export default Main;
