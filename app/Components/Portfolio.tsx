"use client";
import React from "react";
import Image from "next/image";

function Portfolio(props: any) {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="w-full  px-4 my-12 md:my-24 ">
          <h3 className="text-primary text-center text-lg font-bold tracking-wide uppercase mb-2">
            Project Sebelumnya
          </h3>
          <p className="font-medium  text-center text-slate-800 mb-10">
            Kumpulan project yang sudah selesai dikerjakan. Disertai link untuk
            melihat project di lingkungan production maupun staging.
          </p>
          <div className=" columns-1 md:columns-2 lg:columns-3">
            {/* 1 */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3 hover:shadow-primary hover:duration-300">
              <div className="relative flex flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
                <div className="relative -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <Image src="/img/berau_image1.png" alt="Portfolio" fill />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-primary antialiased">
                    One Data Berau
                  </h5>
                  <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
                    Platform One Data yang menampilkan data{" "}
                    <span className="font-semibold">dokumen dan map</span>.
                    Menggunakan python dan library geonode dan geoserver, admin
                    bisa mengelola data-data baik dokumen maupun peta.
                  </p>
                  <p className="italic text-xs mt-3 text-slate-400 ">
                    Tech : python, geonode, geoserver, django, postresql, docker
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle   text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <a href="http://satudata.beraukab.go.id/layers/?limit=5&offset=0">
                      Visit
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3 hover:shadow-primary hover:duration-300">
              <div className="relative flex flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
                <div className="relative -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <Image
                    src="/img/nftmo_image.png"
                    alt="Portfolio"
                    key="02"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block   text-xl font-semibold leading-snug tracking-normal text-primary antialiased">
                    Jogjatron NFT Music
                  </h5>
                  <p className="block   text-base font-light leading-relaxed text-inherit antialiased">
                    NFT Musik menghubungkan artist dengan penggemar, artist akan
                    mendapat token setelah karya NFT terjual. Penggemar dapat
                    menjual kembali NFT,{" "}
                    <span className="font-semibold">
                      semua dalam 1 platform !
                    </span>
                  </p>
                  <p className="italic text-xs mt-3 text-slate-400 ">
                    Tech : blockchain, Smart Contract, polygon, BSC, ReactJs,
                    PHP Laravel, mysql{" "}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle   text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <a href="https://nftmo.jogjatron.com/">Visit</a>
                  </button>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3 hover:shadow-primary hover:duration-300">
              <div className="relative flex flex-col rounded-xl  bg-slate-100 bg-clip-border text-gray-700 shadow-md">
                <div className="relative -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <Image src="/img/oleh_image.png" alt="Portfolio" fill />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block   text-xl font-semibold leading-snug tracking-normal  text-primary antialiased">
                    Jogjatron Oleh-oleh
                  </h5>
                  <p className="block   text-base font-light leading-relaxed text-inherit antialiased">
                    Platform untuk{" "}
                    <span className="font-semibold">
                      bertukar token dan merchandize khas jogjakarta
                    </span>
                    . User yang mempunyai token Jogjatron, bisa menukar token
                    dengan merchandize tertentu.
                  </p>
                  <p className="italic text-xs mt-3 text-slate-400 ">
                    Tech : blockchain, Smart Contract, polygon, BSC, ReactJs,
                    Go, mysql
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle   text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <a href="https://oleh2-dev2.jogjatron.com/">Visit</a>
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

export default Portfolio;
