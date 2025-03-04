"use client";

import React from "react";
import { BlogPostHeading } from "./BlogPostHeading";

interface ImageData {
  attributes: {
    url: string;
    name: string;
  };
}

interface BlogPostData {
  id: string;
  attributes: {
    title: string;
    readTime: string;
    topic: string;
    coverImg: {
      data: ImageData;
    };
  };
}

interface BlogPostCardProps {
  data: BlogPostData;
  width?: string | number;
  height?: string | number;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ data, height }) => {
  return (
    <div className="relative w-full" style={{ height: height || "auto" }}>
      {/* Background Image */}
      <div className=" inset-0 -z-10">
        <img
          src={`https://lite-tech-api.litebox.ai${data.attributes.coverImg.data.attributes.url}`}
          alt={data.attributes.coverImg.data.attributes.name}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content at the bottom */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10">
        <BlogPostHeading
          title={data.attributes.title}
          readtime={data.attributes.readTime}
          topic={data.attributes.topic}
          id={data.id}
          variant="blogpost"
        />
      </div>
    </div>
  );
};
