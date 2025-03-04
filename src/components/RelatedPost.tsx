"use client";

import { usePostContext } from "@/context/PostContext";
import { BlogPostCard } from "./BlogPostCard";
import { AddNewPost } from "./Modal";
import { useState, useEffect } from "react";

export const RelatedPost = () => {
  const { posts } = usePostContext();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <h1 className="mb-3 text-1xl md:text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Related posts
            </h1>
          </div>
          <div className="hidden flex-wrap items-center justify-end md:block">
            <AddNewPost />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-auto md:grid-cols-6 md:grid-rows-4 gap-6">
          {posts.slice(0, 3).map((post, index) => {
            const gridClasses = [
              "md:col-span-2 md:row-span-4 col-span-1",
              "md:col-span-2 md:row-span-4 md:col-start-3 col-span-1",
              "md:col-span-2 md:row-span-4 md:col-start-5 col-span-1",
            ];

            return (
              <div
                key={index}
                className={gridClasses[index]}
                style={{
                  height:
                    screenWidth <= 640
                      ? index === 0
                        ? "378px"
                        : "378px"
                      : index === 0
                      ? "379px"
                      : "379px",
                }}
              >
                <BlogPostCard data={post} width="100%" height="100%" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
