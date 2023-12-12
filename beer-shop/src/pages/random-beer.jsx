import getRandomBeer from "../api/getRandomBeer";
import BeerCard from "../components/BeerCard";
import { useEffect, useState } from "react";
import Button from "../components/Button";

function RandomBeerPage() {
  const [beers, setBeers] = useState([]);

  async function addNewBeer() {
    const newBeer = await getRandomBeer();

    setBeers((prev) => [...prev, newBeer]);
  }

  useEffect(() => {
    addNewBeer();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {beers.map((beer) => {
          return (
            <BeerCard
              key={beer.id}
              title={beer.name}
              description={beer.description}
              image={beer.image_url}
              alt="No image found"
            />
          );
        })}
      </div>
      <Button onClick={addNewBeer}>Add new Beer</Button>
    </>
  );
}

export default RandomBeerPage;
