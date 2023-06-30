import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlvinC | IT enthusiast",
  description: "Alvin Christianto, Business analyst, Frontend and Blockchain developer ",
  openGraph: {
    title: 'AlvinC | IT enthusiast',
    type: 'website',
    url: 'https://alvinch.vercel.app/',
    description: 'Alvin Christianto, Business analyst, Frontend and Blockchain developer',
    images: '/img/image_alvin.png',
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}</body>
    </html>
  );
}
