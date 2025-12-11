import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getAuthUser from "@/hooks/getAuthUser";
import Link from "next/link";
import Logout from "./Auth/Logout";
export default async function ProfilePage() {
  const userData = await getAuthUser();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <Card className="w-full max-w-2xl rounded-3xl shadow-xl bg-white">
        <CardHeader className="flex flex-col items-center gap-4 pt-8">
          <CardTitle className="text-2xl font-semibold text-gray-900">
            {userData?.username}
          </CardTitle>
          <p className="text-gray-500 text-sm">Full Stack Developer</p>
        </CardHeader>

        <CardContent className="space-y-6 px-8 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-gray-800 font-medium">{userData?.email}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-gray-800 font-medium">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-gray-800 font-medium">Mumbai, India</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Member Since</p>
              <p className="text-gray-800 font-medium">
                {userData?.publishedAt}
              </p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">About</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Passionate full-stack developer specializing in building modern,
              fast, scalable web applications using Next.js, Node.js, Prisma,
              and TailwindCSS.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Link href={"/profile/update"} className="flex-1">
              Edit Profile
            </Link>
            <Logout />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
