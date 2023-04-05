import { useEffect, useState } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffledAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffledAnimalData);
  }, []);
  useEffect(() => console.log(shuffleAnimal), [shuffleAnimal]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal && (
        <>
          <AnimalCard image={shuffleAnimal[0]} index={0} />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard image={shuffleAnimal[1]} index={1} />
        </>
      )}
    </div>
  );
};

export default Worldcup;
