import React from "react";
import Image from "next/image";
const SearchBar = () => {
  return (
    <div className="w-1/2 px-5 rounded-full py-2 flex items-center gap-3 outline-none bg-white text-black border m-2">
      <div>
        <Image
          src={"/search-icon.svg"}
          height={25}
          width={25}
          alt="search-icon"
        />
      </div>
      <div className="text-lg w-full">
        <input
          type="text"
          placeholder="Search anything"
          className="w-full outline-none placeholder-[#A1A2AF]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
