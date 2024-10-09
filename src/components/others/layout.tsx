/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";


import { Footer } from "@/components/Footer";
import { FloatingDockDemo } from "@/components/FloatingDock";
import { Profile } from "@/components/Profile";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= "flex flex-col min-h-screen antialiased bg-gray-100">
        <div className='md:hidden'>
          <div className='flex items-center justify-center w-full h-48 pt-8 pb-12'>
            <Profile />
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="hidden md:flex">
            <Sidebar />
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-100 lg:pl-2 lg:pt-2 md:ml-64">
            <div className="flex-1 min-h-screen overflow-y-auto bg-white border border-transparent md:rounded-tl-xl md:border-neutral-200">
              {children}
              <Footer />
            </div>
          </div>
        </div>
        <FloatingDockDemo />
      </body>
    </html>
  );
}

