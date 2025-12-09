import getPosts from "@/hooks/getPosts";
import BlogCard from "./BlogCard";

const BlogDisplay = async () => {
  const blogPosts = await getPosts();
  console.log(blogPosts);

  return (
    <>
      <div className="min-h-screen w-full bg-linear-to-tl from-indigo-100 via-purple-300 to-pink-100 grid grid-cols-3 place-items-center gap-6 p-4">
        {blogPosts.data.map((bPosts) => (
          <BlogCard
            key={bPosts.id}
            title={bPosts.title}
            description={bPosts.content}
            // image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            author={bPosts.users_permissions_user?.username}
            date={bPosts.publishedAt}
          />
        ))}
      </div>
    </>
  );
};

export default BlogDisplay;
