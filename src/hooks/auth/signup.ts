import kyClient from "@/lib/ky/kyClient";

const signup = async () => {
  try {
    const abc = await kyClient.post("api/auth/local/register");
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export default signup;
