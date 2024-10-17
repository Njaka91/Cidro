// eslint-disable-next-line react/prop-types
const TitleTexte = ({title, text}) => {
  return (
    <div className="flex flex-col justify-center px-6 text-[#1B2C51]
    md:px-8 
      lg:px-24 
      xl-px-40">
      <div className=" flex flex-col text-center items-center text-6xl font-extrabold ">
        <span>{title}</span>
        <div className="bg-fuchsia-900 w-1/2 h-1 rounded-full mt-3" />
      </div>
      <span className="text-center mt-7">
        {text}
      </span>
    </div>
  );
};

export default TitleTexte;
