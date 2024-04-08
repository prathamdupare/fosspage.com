import createUser, { isRegistered } from "@/lib/actions/actions.user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", { user, account, profile, email, credentials });

      // Check if the user is already registered
      let isUserRegistered = false;
      try {
        isUserRegisteredState = await isRegistered(user?.id);

        if (isUserRegisteredState) {
          isUserRegistered = true;
        }
      } catch (error) {
        console.error("Error checking user registration:", error);
      }

      // If the user is signing in via Google and is not registered, create a new user
      if (account.provider === "google" && !isUserRegistered) {
        try {
          // Create user object
          const newUser = {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            image: user?.image,
            bio: "", // Add the appropriate value for bio here
          };

          // Save user to the database
          await createUser(newUser);

          console.log("User created and saved to the database:", newUser);
        } catch (error) {
          console.error("Error creating and saving user:", error);
          return false;
        }
      }

      return true;
    },
  },
  secret: process.env.SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
