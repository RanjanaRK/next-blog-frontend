import BlogCard from "@/components/BlogCard";
import BlogDisplay from "@/components/BlogDisplay";
import CreatePostButton from "@/components/CreatePostButton";

const page = () => {
  return (
    <>
      <div className="relative">
        <BlogDisplay />
        <CreatePostButton />
      </div>
    </>
  );
};

export default page;
