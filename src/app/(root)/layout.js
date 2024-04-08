import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { NextAuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FossPage",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="ml-20">
              <Navbar />
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}
