import React from "react";
import { GoDotFill } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
function Repository() {
  const repositories = [
    {
      name: "design-system",
      visible: "Private",
      language: "React",
      storage: "7345 KB",
      update: "1",
    },
    {
      name: "codeant-ci-app",
      visible: "Public",
      language: "JavaScript",
      storage: "5871 KB",
      update: "2",
    },
    {
      name: "analytics-dashboard",
      visible: "Private",
      language: "Python",
      storage: "4521 KB",
      update: "5",
    },
    {
      name: "mobile-app",
      visible: "Public",
      language: "Swift",
      storage: "3096 KB",
      update: "3",
    },
    {
      name: "ecommerce-platform",
      visible: "Private",
      language: "Java",
      storage: "6210 KB",
      update: "6",
    },
    {
      name: "blog-website",
      visible: "Public",
      language: "HTML/CSS",
      storage: "1876 KB",
      update: "4",
    },
    {
      name: "social-network",
      visible: "Private",
      language: "PHP",
      storage: "5432 KB",
      update: "7",
    },
    
  ];
  return (
    <div className="repo overflow-y-auto">
      {repositories.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="py-4 gap-3 flex flex-col px-4 border-b-[1px] border-[#D5D7DA]"
          >
            <div className="namediv gap-3 flex">
              <h1 className="md:text-lg text-xl font-[500]">{elem.name}</h1>
              <div className="visible lg:h-fit bg-[#eff8ff] flex items-center justify-center border-[1px] border-[#b2ddff] lg:px-3 lg:py-0.5 px-5 rounded-full">
                <h1 className="lg:text-xs text-sm leading-normal text-[#175CD3]">
                  {elem.visible}
                </h1>
              </div>
            </div>
            <div className="datadiv flex items-center gap-5">
              <div className="language flex items-center gap-1">
                <div className="nameoflanguage">
                  <h1 className="md:text-xs text-sm">{elem.language}</h1>
                </div>
                <div className="icon text-[#1570EF]">
                  <GoDotFill />
                </div>
              </div>
              <div className="storage flex items-center gap-1">
                <div className="icon text-sm">
                  <GoDatabase />
                </div>
                <div className="storagedata lg:text-xs text-sm ">
                  {elem.storage}
                </div>
              </div>
              <div className="update">
                <h1 className="md:text-xs text-sm">
                  Updated {elem.update} days ago
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Repository;
