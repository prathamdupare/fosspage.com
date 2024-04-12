import { Inter } from "next/font/google";
import "../globals.css";
import { NextAuthProvider } from "../(root)/Providers";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FossPage - Welcome",
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
            <main className="">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}
