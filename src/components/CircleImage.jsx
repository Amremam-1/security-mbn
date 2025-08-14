const CircleImage = ({ Url }) => {
  return (
    <div className="relative w-100 h-100 not-lg:w-72 not-lg:h-72 rounded-full overflow-hidden border-2 border-orange-400 shadow-xl">
      <img
        src={Url}
        alt="Security Lock"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CircleImage;
