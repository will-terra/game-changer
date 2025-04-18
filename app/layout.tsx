import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Kanit } from "next/font/google";

import "./styles/globals.css";
import Nav from "../lib/features/layout/components/Nav";
import Footer from "../lib/features/layout/components/Footer";

interface RootLayoutProps {
  readonly children: ReactNode;
}

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <StoreProvider>
      <html
        lang="en"
        className="m-0 min-h-screen max-w-screen overflow-x-hidden p-0"
      >
        <body
          className={`${kanit.className} scrollbar m-0 flex min-h-screen flex-col overflow-x-hidden p-0`}
        >
          <Nav />
          <main className="flex grow flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
