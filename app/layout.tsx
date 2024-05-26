import type { Metadata } from "next";
import "@/styles/index.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Charity System",
  description: "Powered by 'Elsaleheen Charity'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>
        <div className="h-screen overflow-hidden">
          <Header />
          <div className="flex h-full">
            <div className="hidden md:block w-64">
              <Sidebar />
            </div>

            <div className="flex-grow p-4 overflow-auto">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
