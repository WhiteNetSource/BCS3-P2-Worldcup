import { useEffect, useState } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);

  const onClickChoice = (v) => () => {
    console.log(v);
    setChoice(choice + 2);
    setNextRound([...nextRound, v]);
  };

  useEffect(() => {
    let shuffledAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffledAnimalData);
  }, []);
  useEffect(() => console.log(shuffleAnimal), [shuffleAnimal]);
  useEffect(() => console.log(nextRound), [nextRound]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal && (
        <>
          <AnimalCard
            animal={shuffleAnimal[choice]}
            choice={choice}
            onClickChoice={onClickChoice}
          />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard
            animal={shuffleAnimal[choice + 1]}
            choice={choice + 1}
            onClickChoice={onClickChoice}
          />
        </>
      )}
    </div>
  );
};

export default Worldcup;
