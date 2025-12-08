import Link from "next/link";
import { Button } from "./ui/button";

const AuthNavMenu = ({ jwt }: { jwt: string }) => {
  return (
    <>
      {jwt ? (
        <Link href="/profile" className="text-gray-700 hover:text-black">
          Profile
        </Link>
      ) : (
        <Button variant="outline">
          <Link href="/auth" className="block text-gray-700 font-medium">
            Login
          </Link>
        </Button>
      )}
    </>
  );
};

export default AuthNavMenu;
