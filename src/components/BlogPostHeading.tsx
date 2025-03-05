"use client";

import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  readtime: string;
  topic: string;
  id: string;
  variant?: "hero" | "blogpost" | "post";
  author?: string;
};

export type Layout4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const BlogPostHeading = (props: Layout4Props) => {
  const { topic, title, readtime, id, variant = "hero", author } = props;

  // Conditional styles based on the variant
  const containerClass =
    variant === "hero"
      ? "flex justify-center items-center px-6 pt-6 pb-6 md:w-[211px] md:h-[54px] bg-black md:-ml-10 md:-mb-12 "
      : "inline-flex items-center px-6 pt-6 pb-6 -mb-1 h-[54px] bg-white gap-8"; // Updated for non-hero to bg-white

  const titleClass =
    variant === "hero"
      ? "text-white font-bold text-[18px] md:text-[41px] leading-[130%] w-[250px] md:w-[509px] h-[159px]"
      : "text-black font-semibold text-[16px] lg:text-[22px] leading-[150%] w-auto h-auto mb-6"; // Updated for non-hero to text-black

  const footerClass =
    variant === "hero"
      ? "flex flex-row justify-between items-center w-[250px] md:w-[509px] h-[29px] text-white"
      : "flex flex-row justify-between items-center w-[200px] pb-4 md:w-auto h-auto md:h-[29px] text-black"; // Ensure footer text color changes

  // Fixing inner section background color
  const innerClass =
    variant === "hero"
      ? "absolute bottom-6 left-6 flex flex-col justify-between p-6 w-auto md:w-[557px] h-[144px] md:h-[246px] bg-black"
      : "bottom-6 left-6 flex flex-col justify-between p-6 w-auto h-auto bg-white"; // Change inner section bg

  // Topic text color update
  const authorTextClass = variant === "post" ? "text-[#595959]" : "text-black"; // Topic text color for non-hero, can be adjusted
  const isPostBackground =
    variant === "post" ? "bg-transparent" : "bg-[#D8F34E]";

  return (
    <div>
      {/* Container with dynamic background color */}
      <div className={containerClass}>
        {/* Tag */}
        <div
          className={`flex justify-center items-center px-3 py-1 h-[30px] ${isPostBackground} rounded-full m-0`}
        >
          {variant === "post" ? (
            <div className="w-10 h-10 rounded-full overflow-hidden flex-none order-0 flex-grow-0 mr-6">
              <img
                src="https://cdn.prod.website-files.com/675ad6c2f9f6720963b16a55/675c5a332754d6ecc7ddbf06_freepik__male-person__88167.jpeg"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            ""
          )}
          <p
            className={` h-[22px] font-semibold text-[14px] leading-[160%] ${authorTextClass} m-0`}
          >
            {variant === "post" ? author : topic}
          </p>
        </div>
      </div>

      {/* Title and Footer */}
      <div className={innerClass}>
        {/* Title */}
        <h1 className={titleClass}>{title}</h1>

        {/* Footer */}
        <div className={footerClass}>
          {/* Read More Link */}
          <Link
            href={`/posts/${id}`}
            className="flex flex-row items-center justify-center w-[65px] h-[29px] text-[16px] font-semibold leading-[150%]"
          >
            <h6>Read</h6>
            <img
              src="https://cdn.prod.website-files.com/676717bdd1bb0b2e7b883d09/67c60e55403b620bdad81d8e_icon%20(1).png"
              alt="line"
            />
          </Link>

          {/* Read Time */}
          <div className="flex flex-row justify-center items-center w-auto h-[16px]">
            <img
              src="https://cdn.prod.website-files.com/676717bdd1bb0b2e7b883d09/67c6181664752747c2e76d8b_icon%20(2).png"
              alt="line"
            />
            <span className="text-gray-600 text-[14px] font-normal ml-2">
              {readtime} mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
