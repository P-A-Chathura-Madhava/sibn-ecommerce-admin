import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

// Import Poppins Font
import { Poppins } from "next/font/google";
import { ProductWrapper } from "@/context/ProductContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIBN Ecommerce",
  description: "Ecommerce Admin Application for SIBN",
};

// Create Poppins font variable
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <html lang="en" className={poppins.variable}>
        <body /* className={inter.className} */ className="font-poppins">
          <ProductWrapper>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* <Navbar /> */}
            <SidebarProvider>
              {/* <AppSidebar /> */}
              <div className="w-full">{children}</div>
            </SidebarProvider>
          </ProductWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
