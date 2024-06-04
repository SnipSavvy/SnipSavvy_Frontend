import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SnipSavvy",
  description:
    "Our platform, SnipSavvy, aims to address these challenges by providing a comprehensive solution for developers to store, categorize, share, and collaborate on code snippets and components seamlessly.",
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <Navbar /> */}

        <div className=" bg-black">
          <div className="">
            <div className=" items-center min-h-screen bg-black">
              <div>
                <AuthProvider>{children}</AuthProvider>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
