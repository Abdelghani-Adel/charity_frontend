import type { Metadata } from "next";
import "@/styles/index.css";
import Sidebar from "@/components/Sidebar";

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
    <html>
      <body>
        <div className="flex min-h-screen overflow-hidden text-right">
          <Sidebar />

          <div className="flex-grow p-4 overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
