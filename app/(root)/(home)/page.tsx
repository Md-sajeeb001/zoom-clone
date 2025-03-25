import MeetingTypeList from "@/components/MeetingTypeList";
import Image from "next/image";
import React from "react";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] relative w-full rounded-[20px] bg-hero bg-cover">
        <Image
          width={1920}
          height={1080}
          className="rounded-[20px] object-cover w-full h-full"
          src="/images/hero-background.png"
          alt="hero-image"
        ></Image>
        <div
          className="absolute inset-0 flex flex-col
         h-full justify-between
         px-5 py-8 md:px-11 md:py-11"
        >
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base">
            Upcoming Metting at: 12:30pm
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-[#C9DDFF] lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      {/* meeting categories section */}
      <MeetingTypeList></MeetingTypeList>
    </section>
  );
};

export default Home;
