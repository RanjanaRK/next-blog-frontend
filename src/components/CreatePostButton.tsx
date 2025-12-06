"use client";

import Link from "next/link";

const CreatePostButton = () => {
  return (
    <>
      <Link
        href="/create-post"
        className=" inline-flex items-center justify-center  px-6 py-3  text-base font-medium leading-6  text-white  bg-indigo-600 border border-transparent  rounded-full  shadow-lg   hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500transition duration-150 ease-in-outtransform hover:scale-105 "
      >
        <svg
          className="-ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Create New Post
      </Link>
    </>
  );
};

export default CreatePostButton;
