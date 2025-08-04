import React from "react";
import starIcon from "../../assets/images/Star-Icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const AstrologerCard = ({ astrologer }) => {
  const {
    name,
    averageRating,
    totalRating,
    photo,
    specialization,
    experiences,
  } = astrologer;

  return (
    <div className="p-2 lg:p-4 bg-white/5 shadow-lg min-h-[max-content] shadow-[0_0_1px_1px_rgba(255,255,255,0.3)] rounded-xl hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <div className="w-full h-[200px] lg:h-[250px] overflow-hidden flex justify-center items-center rounded-xl">
        <img
          src={photo}
          className="w-[80%] h-full object-content  transform scale-100 hover:scale-[101%] transition-all rounded-xl duration-300"
          alt={name}
        />
      </div>

      {/* Name Section */}
      <div className="px-[2.5em]">
      <h2 className="text-xl lg:text-2xl font-semibold text-white mt-4 lg:mt-6">
        {name}
      </h2>

      {/* Specialization and Ratings Section */}
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-gradient-to-r from-purple-200 to-purple-300 text-black py-1 px-4 text-sm lg:text-lg font-medium rounded-full">
          {specialization}
        </span>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 text-sm lg:text-lg font-semibold text-white">
            <img
              className="w-6 h-6 object-cover"
              src={starIcon}
              alt="Star icon"
            />
            {averageRating}
          </span>
          <span className="text-xs lg:text-sm font-normal text-white/80">
            ({totalRating})
          </span>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-4 lg:mt-6 flex items-center justify-between">
        <p className="text-sm lg:text-base font-normal text-white">
          At {experiences && experiences[0]?.office}
        </p>

       <Link
  to={`/astrologers/${astrologer._id}`}
  className="w-12 h-12 text-white rounded-full flex items-center justify-center border-t hover:translate-x-1   border-r  border-white hover:bg-blue-500 group"
>
  <BsArrowRight className="w-6 h-6 group-hover:text-yellow-400" />
</Link>

      </div>
      </div>
    </div>
  );
};

export default AstrologerCard;
