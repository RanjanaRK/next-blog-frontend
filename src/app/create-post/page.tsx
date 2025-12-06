import BlogPostForm from "@/components/BlogPostForm";
import getAuthUser from "@/hooks/getAuthUser";
import getCategory from "@/hooks/getCategory";

const page = async () => {
  const categories = await getCategory();
  const userData = await getAuthUser();
  return (
    <>
      <BlogPostForm
        categories={categories?.data || []}
        userId={userData?.documentId!}
      />
      ;
    </>
  );
};

export default page;
