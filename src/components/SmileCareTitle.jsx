/* eslint-disable react/prop-types */

import smile_dental from "../assets/images/Nos soins/Smile_dental.png";

const SmileCareTitle = ({ p, description }) => {

  const splitText = (text) => {
    const middleIndex = Math.floor(text.length / 2);
    return [text.slice(0, middleIndex), text.slice(middleIndex)];
  };

  const [firstHalf, secondHalf] = splitText(p);

  return (
    <div className="flex flex-row px-6 py-8 items-center justify-center h-full md:px-8 lg:px-24 xl-px-32">
      <div className="w-full h-full">
        <div className="z-10 relative shadow-xl w-full md:w-1/2 flex h-full">
          <img
            src={smile_dental}
            alt="smile_dental"
            className="object-cover w-full h-full rounded-tl-3xl rounded-br-3xl"
          />
          <p
            className="flex justify-center absolute right-0 left-0 text-[35px] font-extrabold -bottom-[25%] 
            md:hidden whitespace-nowrap"
          >
            <span className="text-fuchsia-900">{p}</span>
          </p>

          <p className="hidden md:block text-center absolute md:mt-16 lg:mt-40 text-xl font-semibold left-[110%] w-full text-[#1B2C51]">
            {description}
          </p>

          <p
            className="hidden md:block absolute text-[75px] font-extrabold md:top-[50%] lg:top-[60%] right-0 
            whitespace-nowrap"
          >
            <span className="text-white">{firstHalf}</span>
          </p>
          <p
            className="hidden md:block absolute text-[75px] font-extrabold md:top-[50%] lg:top-[60%] left-[100%] 
            whitespace-nowrap"
          >
            <span className="text-fuchsia-900">{secondHalf}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmileCareTitle;
