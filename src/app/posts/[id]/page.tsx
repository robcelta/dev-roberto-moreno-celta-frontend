"use client";

import { PostHeader } from "@/components/BlogPostHeader";
import { Footer } from "@/components/Footer";
import { MostViewed } from "@/components/MostViewed";
import { RelatedPost } from "@/components/RelatedPost";
import { usePostContext } from "@/context/PostContext";
import { useParams } from "next/navigation";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export default function Post(props: any) {
  const { socialMediaLinks } = {
    ...SocialMediaLinks,
    ...props,
  };
  const { posts } = usePostContext();
  const { id } = useParams();

  const foundPost = posts.find((post) => post.id.toString() === id);

  return (
    <>
      <PostHeader data={foundPost} />
      <section
        id="relume"
        className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 grid-rows-auto md:grid-cols-6 md:grid-rows-5 gap-4 items-start">
            <div className="md:row-span-5 md:block hidden">
              <h6 className="mb-6">Shared on</h6>
              <ul
                className="grid grid-flow-row grid-cols-3 md:grid-cols-[max-content] justify-start gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0
"
              >
                {socialMediaLinks.map((link: string | any, index: number) => (
                  <a key={index} href={link.url}>
                    {link.icon}
                  </a>
                ))}
              </ul>
            </div>
            <div className="col-span-3 row-span-5">
              <div className="mx-auto max-w-lg">
                <div
                  className="prose mb-12 md:prose-md lg:prose-lg md:mb-20"
                  dangerouslySetInnerHTML={{
                    __html: foundPost?.attributes.body,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-span-2 row-span-5 col-start-5 ">
              <MostViewed />
            </div>
          </div>
        </div>
      </section>
      <RelatedPost />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export const SocialMediaLinks: any = {
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
  ],
};
