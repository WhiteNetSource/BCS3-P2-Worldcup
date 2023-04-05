import { useEffect, useState } from "react";
import animalData from "../animalData.json";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffledAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffledAnimalData);
  }, []);
  useEffect(() => console.log(shuffleAnimal), [shuffleAnimal]);

  return <div className="bg-pink-200 min-h-screen">Worldcup</div>;
};

export default Worldcup;
