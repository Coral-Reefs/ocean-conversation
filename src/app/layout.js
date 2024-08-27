import "./globals.css";
import Agrandir from "./font/fonts";

export const metadata = {
  title: "Marine Life Conservation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Agrandir.variable}`}>{children}</body>
    </html>
  );
}
