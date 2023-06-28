import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>AlvinC | IT enthusiast</title>
          <meta name="title" content="AlvinC | IT enthusiast" />
          <meta
            name="description"
            content="Alvin Christianto, Business analyst, Frontend and Blockchain developer "
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://alvinch.vercel.app/" />
          <meta property="og:title" content="AlvinC | IT enthusiast" />
          <meta
            property="og:description"
            content="Alvin Christianto, Business analyst, Frontend and Blockchain developer "
          />
          <meta
            property="og:image"
            content="https://alvinch.vercel.app/_next/image?url=%2Fimg%2Fimage_alvin.png&w=256&q=75&dpl=dpl_FgdxTokHeyNVbrA36DYNqhnHw3DB"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://alvinch.vercel.app/" />
          <meta property="twitter:title" content="AlvinC | IT enthusiast" />
          <meta
            property="twitter:description"
            content="Alvin Christianto, Business analyst, Frontend and Blockchain developer "
          />
          <meta
            property="twitter:image"
            content="https://alvinch.vercel.app/_next/image?url=%2Fimg%2Fimage_alvin.png&w=256&q=75&dpl=dpl_FgdxTokHeyNVbrA36DYNqhnHw3DB"
          />
        </Head>
      </div>

      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 mt-20 lg:w-1/2">
            <h1 className="text-base font font-semibold text-slate-700 md:text-2xl">
              Hallo, Saya
              <span className=" block font-bold text-primary text-2xl sm:text-5xl md:text-6xl lg:text-5xl mt-1 ">
                Alvin Christianto
              </span>
            </h1>
            <h3 className="font font-medium text-slate-700 text-xs sm:text-sm md:text-lg lg:text-md mb-3">
              {" "}
              IT Enthusiast | Frontend | Business Analyst
            </h3>
            <p className="font-slate-700 font font-medium text-xs sm:text-sm md:text-lg lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fuga fugiat, quos natus edolor sit amet consectetur adipisicing
              elit. Optio fuga fugiat, quos natus ea maiores!
            </p>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className=" relative mt-10 lg:mt-9 sm:-right-16 md:-right-28 lg:-right-4">
              <div className="max-w-full mx-auto ">
                <Image
                  src="/img/image_alvin.png"
                  alt="me"
                  width="230"
                  height="230"
                />
              </div>
              <span className="absolute -bottom-1 -z-10 left-1/2 sm:left-24 lg:left-44 md:left-48  -translate-x-1/2 md:scale-125">
                {/* <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#059669"
                    d="M35.6,-49.3C50.9,-37.9,71.3,-33.8,80.8,-22.1C90.3,-10.4,88.8,9,81.8,25.4C74.9,41.9,62.5,55.5,48,66.4C33.4,77.3,16.7,85.7,1.1,84.2C-14.5,82.7,-29,71.3,-38.5,58.7C-48,46.1,-52.4,32.3,-57.6,18.3C-62.8,4.2,-68.7,-10,-68.2,-25.4C-67.7,-40.8,-60.7,-57.4,-48.3,-69.8C-35.9,-82.1,-17.9,-90.2,-3.9,-84.9C10.1,-79.5,20.3,-60.7,35.6,-49.3Z"
                    transform="translate(100 100)"
                  /> 
                
                    ></path>
                  </svg>
                  */}
                <svg
                  width="240"
                  height="240"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="
                          M 0, 85.5
                          C 0, 67.545 67.545, 0 85.5, 0
                          S 171, 67.545 171, 85.5
                              103.455, 171 85.5, 171
                              0, 103.455 0, 85.5
                      "
                    fill="#059669"
                    transform="rotate(
                          -33,
                          100,
                          100
                      ) translate(
                          14.5
                          14.5
                      )"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
