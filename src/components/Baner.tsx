"use client";

import { Button } from "@relume_io/relume-ui";

export const Banner = () => {
  return (
    <section
      id="relume"
      className="flex justify-around items-center bg-purple-500 w-full h-[136px] px-4"
    >
      <div className="flex flex-col justify-center items-center  max-w-lg">
        <p className="text-white text-[18px] md:text-[27px] leading-[121%]  font-normal ">
          Sign up for our newsletter and get daily updates
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button className="bg-lime-300 text-black text-[12px] md:text-[18px] font-medium  rounded-md flex justify-center items-center w-auto h-[56px]">
          Subscribe
        </Button>
      </div>
    </section>
  );
};
