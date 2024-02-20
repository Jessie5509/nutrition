import React from "react";
import NavBar from "./NavBar";

export const Home = () => {
  return (
    <section className="text-5xl font-bold min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-home bg-cover brightness-[50%]"></div>
      <article className="relative">
        <NavBar />
      </article>
      <article className="flex justify-center items-center min-h-[70dvh] relative">
        <h1 className="font-main w-[60%] text-white text-center text-6xl t nav-ts">
          The health is built with good habits and constant activity!
        </h1>
      </article>
    </section>
  );
};

export default Home;
