import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContianer";

const RecentProject = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex justify-center flex-wrap items-center p-4 gap-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vh] mr-10"
          >
            <PinContainer title={title} href={link}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[22rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{des}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
