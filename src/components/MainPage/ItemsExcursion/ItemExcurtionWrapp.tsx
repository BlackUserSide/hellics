import React from "react";

type TItem = {
  content: {
    name: string;
    id: number;
    time: string;
    image: string;
  };
};

export const ItemExcurtionWrapp: React.FC<TItem> = ({ content }) => {
  return (
    <div className="ItemExcurtionWrapp">
      <div className="image-wrapper">
        <img src={content.image} alt="" />
      </div>
      <h3 className="h3">{content.name}</h3>
      <p>
        <span></span>
        {content.time}
      </p>
    </div>
  );
};
