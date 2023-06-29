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
  // <title>AlvinC | IT enthusiast</title>
  //       <meta name="title" content="AlvinC | IT enthusiast" />
  //       <meta
  //         name="description"
  //         content="Alvin Christianto, Business analyst, Frontend and Blockchain developer "
  //       />

        // <meta property="og:type" content="website" />
        // <meta property="og:url" content="https://alvinch.vercel.app/" />
        // <meta property="og:title" content="AlvinC | IT enthusiast" />
        // <meta
        //   property="og:description"
        //   content="Alvin Christianto, Business analyst, Frontend and Blockchain developer "
        // />
        // <meta
        //   property="og:image"
        //   content="https://alvinch.vercel.app/_next/image?url=%2Fimg%2Fimage_alvin.png&w=256&q=75&dpl=dpl_FgdxTokHeyNVbrA36DYNqhnHw3DB"
        // />

        // <meta property="twitter:card" content="summary_large_image" />
        // <meta property="twitter:url" content="https://alvinch.vercel.app/" />
        // <meta property="twitter:title" content="AlvinC | IT enthusiast" />
        // <meta
        //   property="twitter:description"
        //   content="Alvin Christianto, Business analyst, Frontend and Blockchain developer "
        // />
        // <meta
        //   property="twitter:image"
        //   content="https://alvinch.vercel.app/_next/image?url=%2Fimg%2Fimage_alvin.png&w=256&q=75&dpl=dpl_FgdxTokHeyNVbrA36DYNqhnHw3DB"
        // />
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
