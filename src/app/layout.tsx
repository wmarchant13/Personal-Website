import "../styles/design-tokens.scss";
import "../styles/_mixins.scss";
import "../styles/globals.scss";
import type { ReactNode } from "react";
import Navbar from "../components/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
