// "use client";

// import { motion } from "motion/react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// const AuthPage = () => {
//   return (
//     <>
//       <div className="min-h-screen w-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
//         <Tabs defaultValue="account">
//           <TabsList>
//             <TabsTrigger value="Login">Login</TabsTrigger>
//             <TabsTrigger value="Signup">Signup</TabsTrigger>
//           </TabsList>
//           <TabsContent value="Login">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="grid md:grid-cols-2 gap-6 w-full max-w-4xl"
//             >
//               <Card className="backdrop-blur-xl bg-white/20 border-white/30 shadow-2xl rounded-2xl p-2">
//                 <CardHeader>
//                   <CardTitle className="text-center text-white text-2xl font-semibold">
//                     Login
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form className="space-y-4">
//                     <div>
//                       <Label htmlFor="email" className="text-white">
//                         Email
//                       </Label>
//                       <Input
//                         id="email"
//                         placeholder="Enter your email"
//                         className="bg-white/60"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="password" className="text-white">
//                         Password
//                       </Label>
//                       <Input
//                         type="password"
//                         id="password"
//                         placeholder="Enter your password"
//                         className="bg-white/60"
//                       />
//                     </div>
//                     <Button className="w-full bg-white text-indigo-600 font-semibold hover:bg-gray-100">
//                       Login
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>
//           <TabsContent value="Signup">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="grid md:grid-cols-2 gap-6 w-full max-w-4xl"
//             >
//               <Card className="backdrop-blur-xl bg-white/20 border-white/30 shadow-2xl rounded-2xl p-2">
//                 <CardHeader>
//                   <CardTitle className="text-center text-white text-2xl font-semibold">
//                     Sign Up
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form className="space-y-4">
//                     <div>
//                       <Label htmlFor="name" className="text-white">
//                         Full Name
//                       </Label>
//                       <Input
//                         id="name"
//                         placeholder="Enter your name"
//                         className="bg-white/60"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="signupEmail" className="text-white">
//                         Email
//                       </Label>
//                       <Input
//                         id="signupEmail"
//                         placeholder="Enter your email"
//                         className="bg-white/60"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="signupPassword" className="text-white">
//                         Password
//                       </Label>
//                       <Input
//                         type="password"
//                         id="signupPassword"
//                         placeholder="Create a password"
//                         className="bg-white/60"
//                       />
//                     </div>
//                     <Button className="w-full bg-white text-indigo-600 font-semibold hover:bg-gray-100">
//                       Sign Up
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </>
//   );
// };

// export default AuthPage;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-indigo-100 via-purple-300 to-pink-100 flex items-center justify-center p-4">
      <Tabs defaultValue="login" className="w-full max-w-md">
        {/* Tabs Header */}
        <TabsList className="grid grid-cols-2 bg-white/30 backdrop-blur-xl rounded-xl p-1 mb-4">
          <TabsTrigger
            value="login"
            className="text-white data-[state=active]:bg-white/70 data-[state=active]:text-indigo-700 rounded-lg"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="text-white data-[state=active]:bg-white/70 data-[state=active]:text-indigo-700 rounded-lg"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>

        {/* Login */}
        <TabsContent value="login">
          <Card className="backdrop-blur-xl bg-white/20 border-white/30 shadow-2xl rounded-2xl p-2 min-h-[420px] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CardHeader>
                <CardTitle className="text-center text-white text-2xl font-semibold">
                  Login
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      className="bg-white/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="bg-white/60"
                    />
                  </div>
                  <Button className="w-full bg-white text-indigo-600 font-semibold hover:bg-gray-100">
                    Login
                  </Button>
                </form>
              </CardContent>
            </motion.div>
          </Card>
        </TabsContent>

        {/* Signup */}
        <TabsContent value="signup">
          <Card className="backdrop-blur-xl bg-white/20 border-white/30 shadow-2xl rounded-2xl p-2 min-h-[420px] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CardHeader>
                <CardTitle className="text-center text-white text-2xl font-semibold">
                  Sign Up
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-white/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signupEmail" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="signupEmail"
                      placeholder="Enter your email"
                      className="bg-white/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signupPassword" className="text-white">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="signupPassword"
                      placeholder="Create a password"
                      className="bg-white/60"
                    />
                  </div>
                  <Button className="w-full bg-white text-indigo-600 font-semibold hover:bg-gray-100">
                    Sign Up
                  </Button>
                </form>
              </CardContent>
            </motion.div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
