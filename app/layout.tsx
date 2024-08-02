import BackgroundSpotlight from "@/components/BackgroundSpotlight";
import { ModalContextProvider } from "@/lib/context";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer/>
        <BackgroundSpotlight />
        <ModalContextProvider>{children}</ModalContextProvider>
      </body>
    </html>
  );
}
