"use client";
import { usePostContext } from "@/context/PostContext";

export const MostViewed = () => {
  const { posts } = usePostContext();

  return (
    <section
      id="relume"
      className="hidden lg:flex flex-col items-start gap-10 w-[304px] h-[458px] text-[##8C8C8C]"
    >
      <div className="flex flex-col items-start gap-6 w-[304px] h-[411px]">
        <h6 className=" font-semibold text-xl leading-6">Most Viewed</h6>

        {posts.slice(0, 3).map((post, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 w-[304px] h-[80px]"
          >
            <div className="flex flex-row justify-between items-start gap-6">
              <p className="text-sm font-semibold">
                {post.attributes.subtitle}
              </p>
              <img
                src={`https://lite-tech-api.litebox.ai${post.attributes.coverImg.data.attributes.url}`}
                alt="Post cover"
                className="w-[80px] h-[80px] bg-contain bg-center"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
