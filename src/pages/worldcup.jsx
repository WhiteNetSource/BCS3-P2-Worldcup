import { useEffect, useState } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);

  const onClickChoice = () => {
    setChoice(choice + 2);
  };

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
          <AnimalCard
            image={shuffleAnimal[choice]}
            choice={choice}
            onClickChoice={onClickChoice}
          />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard
            image={shuffleAnimal[choice + 1]}
            choice={choice + 1}
            onClickChoice={onClickChoice}
          />
        </>
      )}
    </div>
  );
};

export default Worldcup;
