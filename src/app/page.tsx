import BlogDisplay from "@/components/BlogDisplay";
import CreatePostButton from "@/components/CreatePostButton";

const page = () => {
  return (
    <>
      <div className="relative mx-auto max-w-7xl">
        <BlogDisplay />
        <CreatePostButton />
      </div>
    </>
  );
};

export default page;
