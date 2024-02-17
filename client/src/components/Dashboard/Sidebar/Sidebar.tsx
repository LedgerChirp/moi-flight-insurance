import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-start w-max p-10 left-0 bg-white shadow-md">
      <div className="">
        <Image
          src={"/logo.png"}
          width={1000}
          height={1000}
          className="w-16 h-16"
          alt="logo"
        />
      </div>
      <div>
        <div>Dashboard</div>
        <div>Flight Status</div>
        <div>Claim Status</div>
      </div>
      <div>
        <div>Settings</div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
