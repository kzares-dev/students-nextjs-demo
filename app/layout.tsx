import BackgroundSpotlight from "@/components/BackgroundSpotlight";
import { ModalContextProvider } from "@/lib/context/modalContext";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";
import { ToastContainer } from "react-toastify";
import { RefreshContextProvider } from "@/lib/context/refreshContext";

export const metadata = {
  title: "Students",
  description: "Dashboard demo with nextjs/mongodb/node",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <BackgroundSpotlight />
        <ModalContextProvider>
          <RefreshContextProvider>
            {children}
            </RefreshContextProvider>
        </ModalContextProvider>
      </body>
    </html>
  );
}
