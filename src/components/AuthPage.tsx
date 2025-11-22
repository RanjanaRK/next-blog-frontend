"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import LoginForm from "./Auth/LoginPage";
import RegisterForm from "./Auth/SignupPage";

export default function AuthPage() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-indigo-100 via-purple-300 to-pink-100 flex items-center justify-center p-4">
      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid grid-cols-2 bg-white/30 backdrop-blur-xl rounded-xl p-1 mb-4">
          <TabsTrigger
            value="login"
            className=" data-[state=active]:bg-white/70 data-[state=active]:text-indigo-700 rounded-lg"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className=" data-[state=active]:bg-white/70 data-[state=active]:text-indigo-700 rounded-lg"
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
                <CardTitle className="text-center  text-2xl font-semibold">
                  Login
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LoginForm />
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
                <CardTitle className="text-center  text-2xl font-semibold">
                  Sign Up
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </motion.div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
