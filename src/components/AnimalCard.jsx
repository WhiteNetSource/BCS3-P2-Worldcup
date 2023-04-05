const AnimalCard = ({ image, index }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${image}.jpeg`}
        alt={image}
      />
      <div className="text-2xl mt-4 font-bold">{image}💕💕💕</div>
      <button
        className={`text-2xl mt-4 px-4 py-2 rounded-lg ${
          index % 2 === 0 ? "bg-pink-400" : "bg-violet-400"
        }`}
      >
        선택
      </button>
    </div>
  );
};

export default AnimalCard;
