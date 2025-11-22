import getPosts from "@/hooks/getPosts";
import BlogCard from "./BlogCard";

const BlogDisplay = async () => {
  const abc = await getPosts();
  console.log(abc);

  return (
    <>
      <div className="min-h-screen w-full bg-linear-to-tl from-indigo-100 via-purple-300 to-pink-100 grid grid-cols-3 place-items-center gap-6 p-4">
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
        <BlogCard
          title="Mastering Next.js Server Actions"
          description="Learn how to build fast, scalable apps using the new Server Actions in Next.js 14..."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          author="Sparkle K"
          date="2025-11-21"
        />
      </div>
    </>
  );
};

export default BlogDisplay;
