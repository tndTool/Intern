import React from "react";

interface PinProps {
  url?: string;
}

const Pin: React.FC<PinProps> = ({ url }) => {
  return (
    <div className="d-inline-flex">
      <div className="cursor-zoom-in border-box mb-3">
        <img
          className="d-flex h-100 w-100 border-radius-1 object-fit-cover"
          src={url}
          alt="something"
        />
      </div>
    </div>
  );
};

export default Pin;
