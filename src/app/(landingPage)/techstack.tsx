"use client";

import React, { useRef, useEffect } from "react";
import { MainContainer } from "@/components/containers";
import Image from "next/image";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import Transition from "@/components/transition/transition";

export default function TechStack() {
  const flickingPlugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  const logoSources: any[] = [
    "html",
    "css",
    "js",
    "scss",
    "tailwind",
    "bootstrap",
    "react",
    "jquery",
    "nodejs",
    "php",
    "mysql",
    "postgresql",
    "nextjs",
    "laravel",
    "wordpress",
    "git",
    "c++",
    "csharp",
    "java",
    "python",
  ];

  return (
    <section
      id="tech-stack"
      className="w-full h-auto bg-[url('/liquid-cheese.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <Transition>
        <MainContainer>
          <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10 xl:mb-20">
            Tech Stack
          </h2>

          <div
            id="logo-carousel"
            className="cursor-pointer flex flex-row gap-8 pb-8"
          >
            <Flicking
              plugins={flickingPlugins}
              moveType="freeScroll"
              align="center"
              circular={true}
              inputType={["touch", "mouse"]}
              id="carousel-techstack"
              className="w-full"
            >
              {logoSources.map((source, index) => (
                <div key={index} className="panel px-2 sm:px-4 md:px-8">
                  <Image
                    src={`/techstack-svg/${source}.svg`}
                    alt={`Tech Icon ${index + 1}`}
                    height={100}
                    width={100}
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] pointer-events-none"
                  />
                </div>
              ))}
            </Flicking>
          </div>
        </MainContainer>
      </Transition>
    </section>
  );
}