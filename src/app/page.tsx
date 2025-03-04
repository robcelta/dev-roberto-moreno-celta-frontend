import { Footer } from "@/components/Footer";
import { BlogWrapper } from "../components/BlogWrapper";
import { HeroHeader } from "../components/Hero";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <BlogWrapper />
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}
