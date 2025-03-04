"use client";
import { BlogPostHeading } from "./BlogPostHeading";
import { usePostContext } from "@/context/PostContext";

export const HeroHeader = () => {
  const { getFirstPost } = usePostContext();
  const firstPost = getFirstPost();

  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20 mt-20">
      <div className="container">
        <div>
          <h1 className="hidden md:flex text-1xl font-bold md:text-5xl lg:text-2xl text-white mb-4">
            Today story
          </h1>
        </div>
        <div className="relative flex flex-col items-start justify-center p-6 w-[350px] h-[378px] lg:h-[40rem] md:p-16 md:w-auto md:h-auto ">
          <div>
            <BlogPostHeading
              title={firstPost?.attributes.title}
              readtime={firstPost?.attributes.readTime}
              topic={firstPost?.attributes.topic}
              variant="hero"
            />
          </div>
          <div className="absolute inset-0 -z-10">
            <img
              src={`https://lite-tech-api.litebox.ai${firstPost?.attributes.coverImg.data.attributes.url}`}
              className="size-full object-cover"
              alt={firstPost?.attributes.coverImg.data.attributes.name}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
