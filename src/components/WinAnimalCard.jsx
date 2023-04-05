const WinAnimalCard = ({ animal, choice, onClickChoice }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl mb-4 font-bold">
        🎉🎉🎉 Conglaturations 🎉🎉🎉
      </div>
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
        alt={animal}
      />
      <div className="text-4xl mt-4 font-bold">
        💕💕💕 Winner is {animal} 💕💕💕
      </div>
    </div>
  );
};

export default WinAnimalCard;
