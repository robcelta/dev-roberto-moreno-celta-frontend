"use client";

import { BlogPostHeading } from "./BlogPostHeading";

export const PostHeader = (props: any) => {
  const { data } = {
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="absolute bottom-20 left-0 w-full lg:w-auto p-8 z-10">
            <BlogPostHeading
              title={data?.attributes.title}
              readtime={data?.attributes.readTime}
              topic={data?.attributes.topic}
              id={data?.id}
              author={data?.attributes.author}
              variant="post"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src={`https://lite-tech-api.litebox.ai${data?.attributes.coverImg.data.attributes.url}`}
          className="size-full object-cover"
          alt={`https://lite-tech-api.litebox.ai${data?.attributes.coverImg.data.attributes.name}`}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};
