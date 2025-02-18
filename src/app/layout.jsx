import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "app/Providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KG Blog",
  description: "App for all new blog posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-clip`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
