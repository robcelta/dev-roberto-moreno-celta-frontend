"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Post {
  attributes: any;
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  readTime?: string;
  topic?: string;
}

interface ApiResponse {
  data: Post[]; // Extract only the "data" part
  meta?: any; // Ignore "meta" if not needed
}

interface PostContextType {
  posts: Post[];
  fetchPosts: () => Promise<void>;
  addPost: (title: string, coverImg: any) => Promise<void>;
  getPostById: (id: string) => Post | undefined;
  getFirstPost: () => Post | undefined;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from API (fix: extract "data" from response)
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://lite-tech-api.litebox.ai/api/posts"
      );
      if (!response.ok) throw new Error("Failed to fetch posts");

      const { data }: ApiResponse = await response.json(); // Extract "data"
      setPosts(data); // Store only "data" in state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Add a new post via API
  const addPost = async (title: string, coverImg: string) => {
    try {
      const response = await fetch(
        "https://lite-tech-api.litebox.ai/api/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            subtitle: "Random Subtitle", // Set random data for subtitle
            topic: "Random Topic", // Set random data for topic
            author: "Random Author", // Set random data for author
            readTime: 4, // Set random data for readTime
            coverImg, // Use the coverImg passed in
            body: "This is a randomly generated body content.", // Set random data for body
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to add post");

      const { data: newPost } = await response.json();
      // Update posts state if necessary
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Get a single post by ID
  const getPostById = (id: string): Post | undefined => {
    return posts.find((post) => post.id === id);
  };

  // Get the first post from the list
  const getFirstPost = (): Post | undefined => {
    return posts.length > 0 ? posts[0] : undefined;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, fetchPosts, addPost, getPostById, getFirstPost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

export const svg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12L3 12"
      stroke="#D8F34E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
