import Image from "next/image";
import React from "react";

function IndividualProject(props: any) {
  return (
    <section id="individual-project" className=" bg-slate-100">
      <div className="container ">
        <div className="w-full  px-4 my-12 md:my-24">
          <h3 className="text-primary text-center text-lg font-bold tracking-wide uppercase mb-2 pt-4">
            Ongoing Project
          </h3>
          <p className="font-medium  text-center text-slate-800 mb-10">
            Project-project yang sedang saya handle, khususnya terkait project
            pribadi 🚀
          </p>
          <div className=" columns-1 md:columns-2 lg:columns-3 pb-4">
            {/* 1 */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3 hover:shadow-primary hover:duration-300">
              <div className="relative flex flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
                <div className="relative -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <Image src="/img/urunan-image.jpg" alt="Portfolio" fill />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-primary antialiased">
                    Urunan 
                  </h5>
                  <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
                    Platform berbasis  
                    <span className="font-semibold">blockchain for crowdfunding</span>.
                    Menggunakan typescript, truffle dan solidity
                  </p>
                  <p className="italic text-xs mt-3 text-slate-400 ">
                    Tech : blockchain, typescript, solidity, truffle, polygon
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle   text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <a href="https://www.instagram.com/p/CtBiuq3L3Qv/?img_index=1" target="_blank">
                      W3W
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3 hover:shadow-primary hover:duration-300">
              <div className="relative flex flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
                <div className="relative -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <Image src="/img/thecabin.JPG" alt="Portfolio" fill />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-primary antialiased">
                    The Cabin Hotel Web Reservation  
                  </h5>
                  <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
                    Platform web dimana tamu dapat memesan kamar secara online via web. Menggunakan konsep
                    <span className="font-semibold"> Check In Check Out Freely</span>.
                    Tamu dapat check in dan check out kapan saja !
                  </p>
                  <p className="italic text-xs mt-3 text-slate-400 ">
                    Tech : mysql, nextjs, laravel
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle   text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <a href="https://www.thecabinhotelgroup.com" target="_blank">
                      Visit
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndividualProject;
