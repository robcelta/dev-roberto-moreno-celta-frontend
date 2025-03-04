"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { Banner } from "./Baner";
import { MostViewed } from "./MostViewed";
import { BlogPostCard } from "./BlogPostCard";
import { usePostContext } from "@/context/PostContext";

export const BlogWrapper = () => {
  const { posts } = usePostContext();
  const [activeTab, setActiveTab] = useState<string>("view-all");
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // Use useEffect to ensure the window object is available
  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MotionTabsContent = motion.create(TabsContent);

  const filteredPosts = () => {
    if (activeTab === "view-all") {
      return posts.slice(1);
    } else {
      return posts.filter((post) => post.attributes.topic === activeTab);
    }
  };

  const currentFilteredPosts = filteredPosts();
  const uniqueTopics = Array.from(
    new Set(posts.map((post) => post.attributes.topic))
  );

  return (
    <section id="relume">
      <div className="container mx-auto">
        <div className="lg:flex w-full lg:justify-around lg:items-start lg:gap-10">
          <div className="lg:flex-[7] ">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex flex-col justify-start w-[400px] lg:w-[976px]"
            >
              <TabsList className="no-scrollbar mb-12 flex w-full items-center overflow-auto">
                <TabsTrigger
                  value="view-all"
                  className=" px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-[#D8F34E] data-[state=active]:text-neutral-black data-[state=inactive]:text-[#8C8C8C] rounded ml-2 mr-2"
                >
                  View All
                </TabsTrigger>
                {uniqueTopics.map((topic, index) => (
                  <TabsTrigger
                    key={index}
                    value={topic}
                    className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-[#8C8C8C] data-[state=active]:bg-[#D8F34E] data-[state=active]:text-neutral-black data-[state=inactive]:text-[#8C8C8C] rounded mr-2"
                  >
                    {topic}
                  </TabsTrigger>
                ))}
              </TabsList>
              <AnimatePresence initial={false}>
                {currentFilteredPosts.length > 0 && (
                  <MotionTabsContent
                    key={activeTab}
                    value={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Blog Post Grid Layout */}
                    <div className="grid grid-cols-1 grid-rows-auto lg:grid-cols-6 lg:gap-6 ml-6">
                      {currentFilteredPosts.slice(0, 3).map((post, index) => (
                        <div
                          key={index}
                          className={`lg:col-span-3 mb-4 row-span-1 lg:row-span-${
                            index === 0 ? 3 : 6
                          }  lg:${index === 0 ? "lg:col-start-4" : ""} `}
                          style={{
                            height:
                              screenWidth <= 640
                                ? index === 0
                                  ? "378px"
                                  : "378px"
                                : index === 0
                                ? "783px"
                                : "379px",
                          }}
                        >
                          <BlogPostCard
                            data={post}
                            width="100%"
                            height="100%"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="col-span-4 row-span-3 mt-6 mb-6 ml-6">
                      <Banner />
                    </div>

                    <div className="grid grid-cols-1 grid-rows-auto lg:grid-cols-6 lg:gap-6 ml-6">
                      {currentFilteredPosts.slice(3, 6).map((post, index) => {
                        // Swap positions: Move index 0 to the right, index 1 and 2 to the left
                        const newIndex = index === 0 ? 2 : index === 1 ? 0 : 1;

                        return (
                          <div
                            key={index}
                            className={`lg:col-span-3 mb-4 row-span-1 lg:row-span-${
                              newIndex === 2 ? 3 : 6
                            } lg:${newIndex === 2 ? "col-start-4" : ""}`}
                            style={{
                              height:
                                screenWidth <= 640
                                  ? "378px"
                                  : newIndex === 2
                                  ? "783px"
                                  : "379px",
                            }}
                          >
                            <BlogPostCard
                              data={post}
                              width="100%"
                              height="100%"
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-1 grid-rows-auto lg:grid-cols-6 lg:gap-6 ml-6">
                      {currentFilteredPosts.slice(6, 9).map((post, index) => (
                        <div
                          key={index}
                          className={`lg:col-span-3 mb-4 row-span-1 lg:row-span-${
                            index === 0 ? 3 : 6
                          }  lg:${index === 0 ? "lg:col-start-4" : ""} `}
                          style={{
                            height:
                              screenWidth <= 640
                                ? index === 0
                                  ? "378px"
                                  : "378px"
                                : index === 0
                                ? "783px"
                                : "379px",
                          }}
                        >
                          {index}
                          <BlogPostCard
                            data={post}
                            width="100%"
                            height="100%"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Load More Button */}
                    <div className="grid grid-cols-1 col-span-4 row-span-3 mt-6 mb-6 ml-6 lg:grid-cols-5 lg:grid-rows-1 gap-6 mt-6">
                      <Button className="lg:col-start-3 flex flex-col justify-center items-center p-1 gap-2.5 w-[300px] lg:w-[155px] h-[56px] bg-[#D8F34E]">
                        <div className="flex flex-row justify-center items-center p-4 w-[155px] h-[45px] flex-none order-0 align-self-stretch">
                          <span className="w-auto text-center text-black font-medium text-[18px] leading-[135%] flex-none order-1">
                            Load More
                          </span>
                        </div>
                      </Button>
                    </div>
                  </MotionTabsContent>
                )}
              </AnimatePresence>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:flex-[3] text-white hidden lg:block">
            <MostViewed />
          </div>
        </div>
      </div>
    </section>
  );
};
