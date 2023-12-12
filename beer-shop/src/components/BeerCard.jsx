import classNames from "classnames";
import { useState } from "react";
import Button from "./Button";

function BeerCard({ title, description, image, alt }) {
  const [cardBackgroundColor, setCardBackgroundColor] = useState("bg-red-500");

  function onButtonClick() {
    setCardBackgroundColor("bg-blue-500");
  }

  return (
    <div
      className={classNames(
        "p-2 rounded-md shadow-md flex flex-col space-y-2",
        cardBackgroundColor
      )}
    >
      <img src={image} alt={alt} className="w-40 h-52 object-cover mx-auto" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="font-medium text-xs">{description}</p>
      <Button onClick={onButtonClick} className="!mt-auto">
        Change color
      </Button>
    </div>
  );
}

export default BeerCard;
