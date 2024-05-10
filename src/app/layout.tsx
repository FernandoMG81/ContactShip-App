import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "contact-ship-app",
  description: "Challenge ContactShip by Fernando Gordillo",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className="dark container  grid min-h-screen grid-rows-[auto,1fr,auto] px-4 font-sans antialiased bg-[#1D232A]">
        <header className="text-xl font-bold leading-[4rem]">
          <Link className="text-3xl font-bold" href="/">ContactShip Challenge</Link>
        </header>
        <div className="divider divider-primary"></div> 
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Fernando Gordillo
        </footer>
      </body>
    </html>
  );
}
