import EditProfileForm from "@/components/EditProfileForm";
import getAuthUser from "@/hooks/getAuthUser";

const page = async () => {
  const userData = await getAuthUser();
  return (
    <div>
      <EditProfileForm userId={userData?.id!} userD={userData!} />
    </div>
  );
};

export default page;
