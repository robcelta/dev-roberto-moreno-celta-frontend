"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Label,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  useMediaQuery,
} from "@relume_io/relume-ui";

export const AddNewPost = () => {
  const [name, setName] = useState(""); // Store post title
  const [image, setImage] = useState<File | null>(null); // Store selected image file
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [isOpen, setIsOpen] = useState(false); // Track modal state
  const isTablet = useMediaQuery("(max-width: 767px)");

  // Handle image file selection
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="text-white border-0" onClick={() => setIsOpen(true)}>
          New Post{" "}
          <img
            src="https://cdn.prod.website-files.com/676717bdd1bb0b2e7b883d09/67c604aee454d5df80d7ccae_icon.png"
            alt="line"
          />
        </Button>
      </DialogTrigger>
      <DialogContent
        overlayClassName="bg-black/0" // Keep overlay transparent
        className="fixed left-1/2 top-1/2 h-screen -translate-x-1/2 -translate-y-1/2 overflow-y-auto border-3 border-black bg-[#D8F34E] shadow-[10px_10px_0px_#000000] px-[5%] pb-28 pt-16 transition ease-in-out data-[state=closed]:duration-700 data-[state=open]:duration-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-bottom data-[state=open]:slide-in-from-left-1/2 md:h-auto md:max-h-[80vh] md:w-[90%] md:px-12 md:py-16 lg:w-full lg:max-w-lg lg:p-16"
      >
        {/* Custom Close Button Inside Modal */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-black text-4xl font-bold bg-transparent border-none"
        >
          ✕
        </button>

        {formSubmitted ? (
          <div className="flex flex-col items-center gap-8 text-center text-black">
            <p className="text-lg">Your post was successfully uploaded!</p>
            <Button
              onClick={() => {
                setFormSubmitted(false);
                setIsOpen(false);
              }}
              className="bg-[#D8F34E] text-black p-4 rounded-md border-2 border-black mt-4"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center gap-8 mb-8 text-center md:mb-10 lg:mb-12">
              <DialogTitle className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Upload your post
              </DialogTitle>
              <p className="text-lg md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse commodo libero.
              </p>
            </div>
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid w-full grid-cols-1 items-center">
                <Input
                  type="text"
                  id="name"
                  placeholder="Post Title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-4 border-2 border-black rounded-md"
                />
              </div>
              <div className="grid w-full grid-cols-1 items-center">
                <Label htmlFor="image" className="mb-2">
                  Upload Image
                </Label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <a
                  href="#"
                  onClick={() => document.getElementById("image")?.click()}
                  className="text-black border-2 border-black p-4 rounded-md cursor-pointer"
                >
                  {image ? "Image Selected" : "Choose Image"}
                </a>
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  type="submit"
                  className="bg-black text-white lg:w-[132px] p-4 rounded-md border-2 border-black"
                >
                  Submit
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
