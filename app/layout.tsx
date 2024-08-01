import BackgroundSpotlight from "@/components/BackgroundSpotlight";
import { ModalContextProvider } from "@/lib/context";
import "@/styles/globals.scss";
export const metadata = {
  title: "students",
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
        <BackgroundSpotlight />
        <ModalContextProvider>{children}</ModalContextProvider>
      </body>
    </html>
  );
}
