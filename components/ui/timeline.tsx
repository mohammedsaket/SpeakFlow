"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import presto from "../../public/presto.png";
import tcs from "../../public/tcs.png";
import eventos from "../../public/eventos.png";

interface TimelineEntry {
  title: string;
  company: string;
  logo: StaticImageData;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-bg-primary" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-0"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div> */}
              <Image
                src={item?.logo}
                alt="logo"
                className="h-14 w-14 absolute left-3 md:left-1  rounded-full "
              />
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-300 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden  relative -left-20 z-10">
                <Image
                  src={item?.logo}
                  alt="logo"
                  className="h-10 w-10 absolute left-3 md:left-3  rounded-full "
                />
              </div>
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-300">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export function TimelineDemo() {
  const data = [
    {
      title: "Oct 2024",
      company: "Presto Labs",
      logo: presto,
      content: (
        <div>

          <p className="text-blue-300 text-lg md:text-md font-semibold mb-1">
              Principal Full-Stack Engineer
          </p>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 ">
            <span className="font-semibold text-lg text-blue-500">
            Presto Labs
            </span>
            <div className="flex items-center gap-2  font-medium">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              Remote - London, UK
            </div>
          </div>
          <div className="mb-8">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              Led technical architecture with React, TypeScript, and Storybook
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
              Built AI-powered workspace with document management
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">

              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              Developed LLM-based assistant for text processing
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              Built a sophisticated text editor for report generation, commenting, and document linking with AI-powered editor.
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z"
                />
              </svg>
              Created Kanban-based incident management tool
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2023",
      company: "TATA Consultancy Services",
      logo: tcs,
      content: (
        <div>
          <p className="text-amber-300 text-lg md:text-md font-semibold mb-1">
            Technical Project Lead at Apple (Contract - Onsite)
          </p>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 ">
            <span className="font-semibold text-lg text-amber-500">
              TATA Consultancy Services
            </span>
            <div className="flex items-center gap-2 font-medium">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              London, UK
            </div>
          </div>

          <div className="mb-8">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
              Led 10-member team across 3 dashboard projects
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Secured $200K+ in new projects (60% conversion)
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              Reduced development & integration time by 70-90%
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                />
              </svg>
              Achieved 70% cost reduction through architecture optimization
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2020",
      company: "TATA Consultancy Services",
      logo: tcs,
      content: (
        <div>
          <p className="text-amber-300 text-lg md:text-md font-semibold mb-1">
            Lead Software Developer at Apple (Contract)
          </p>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 ">
            <span className="font-semibold text-lg text-amber-500">
              TATA Consultancy Services
            </span>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              Noida, IN
            </div>
          </div>
          <div className="mb-8">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              Built sales analytics dashboards with React, D3.js & HighCharts
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
              Developed reusable component libraries & POC applications
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                />
              </svg>
              Built AI-powered chatbot interfaces with MERN stack
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              Boosted customer engagement by 20% through optimizations
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2020",
      company: "Eventos Hub",
      logo: eventos,
      content: (
        <div>
          <p className="text-purple-300 text-lg md:text-md font-semibold mb-1">
          Software Developer
          </p>
          <div className="text-xs md:text-sm font-normal mb-4 ">
            <span className="font-semibold text-lg text-purple-500">
            Eventos Hub
            </span>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              Jaipur, IN
            </div>
          </div>
          <div className="mb-8">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-purple-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                />
              </svg>
              Built Python RESTful APIs with RabbitMQ
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-purple-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Image processing system with 10+ filters
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <svg
                className="w-5 h-5 text-purple-500"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              React Native apps for iOS and Android
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
