import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Glonect — Connect. Empower. Succeed.",
  description:
    "Glonect helps teams connect, empower, and succeed with modern digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${manrope.className} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
