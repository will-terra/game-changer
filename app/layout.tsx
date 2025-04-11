import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Kanit } from "next/font/google";

import "./styles/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

interface Props {
  readonly children: ReactNode;
}

const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en" className="m-0 min-h-screen p-0 font-sans">
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
