import InitialSetup from "@/components/MainLayout/InitialSetup";
import LoadingScreen from "@/components/ui/LoadingScreen/LoadingScreen";
import ReduxProvider from "@/redux/ReduxProvider";
import "@/styles/index.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Charity System",
  description: "Powered by 'Elsaleheen Charity'",
};

type IProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: Readonly<IProps>) {
  const { children } = props;

  return (
    <html lang="ar" className="h-screen overflow-hidden ">
      <body dir="rtl" className="text-right">
        <ReduxProvider>
          <InitialSetup />
          <LoadingScreen />
          <ToastContainer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
