import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en" className="m-0 min-h-screen p-0 font-sans">
        <body className="m-0 flex min-h-screen flex-col p-0 font-sans">
          <header></header>
          <main className="flex grow flex-col items-center justify-center">
            {children}
          </main>
          <footer className="justify-center self-center">
            <span>Learn </span>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </footer>
        </body>
      </html>
    </StoreProvider>
  );
}
