"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

const CreatePostButton = () => {
  return (
    <>
      <Link
        href="/create-post"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-105"
      >
        <Plus />
        Create New Post
      </Link>
    </>
  );
};

export default CreatePostButton;
