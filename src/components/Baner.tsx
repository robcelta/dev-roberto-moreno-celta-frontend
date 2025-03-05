"use client";

import { Button } from "@relume_io/relume-ui";

export const Banner = () => {
  return (
    <section
      id="relume"
      className="flex justify-around items-center bg-purple-500 w-full h-auto pt-6 pb-6 md:h-[136px] px-4"
    >
      <div className="flex flex-col md:flex-row justify-center items-center max-w-lg w-full">
        {/* The p tag comes first on mobile and second on desktop */}
        <div className="flex flex-col justify-center items-center order-1 mr-0 mb-0 lg:mr-6 lg:-mb-6">
          <p className="text-white text-[22px] mb-6 w-[100%] text-center md:text-[27px] leading-[121%] font-normal">
            Sign up for our newsletter and get daily updates
          </p>
        </div>

        {/* The button comes second on mobile and first on desktop */}
        <div className="flex flex-col justify-center items-center order-2">
          <Button className="bg-lime-300 text-black text-[12px] md:text-[18px] font-medium rounded-md flex justify-center items-center w-auto h-[56px]">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};
