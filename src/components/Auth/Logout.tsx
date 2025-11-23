"use client";
import logout from "@/hooks/auth/logout";
import { Button } from "../ui/button";

const Logout = () => {
  //   const router = useRouter();

  const handleLogout = async () => {
    alert("clicked");
    await logout();
  };

  return (
    <Button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded"
    >
      Logout
    </Button>
  );
};

export default Logout;
