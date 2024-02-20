import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const AboutMe = () => {
  return (
    <section className="flex justify-end min-h-[100dvh] bg-about">
      <div className="w-1/2">
        <h2
          id="about"
          className="text-center font-main text-5xl mt-[4.5rem] mb-16"
        >
          About me
        </h2>
        <h4 className="font-main p-10 about-ts text-lg text-center tracking-wide">
          <hr className="border-1 mb-6" />
          Hello! I'm Dr. Janelle Foster, a passionate nutritionist dedicated to
          guiding people toward a healthy and balanced lifestyle.
          <ul className="text-center mt-2">
            <li>
              With over a decade of experience in the field of nutrition, I
              specialize in creating personalized plans that not only promote
              weight loss but also optimize overall health. My approach focuses
              on mindful eating and the power of natural foods to transform
              lives. I believe in educating my clients to make informed
              decisions about their diet, incorporating sustainable changes that
              last over time.
            </li>
            <li>
              Together, we will work to achieve your nutritional goals while
              enjoying the path to lasting well-being. I look forward to meeting
              you soon and being part of your journey to a healthier life!
            </li>
          </ul>
          <hr className="border-1 mt-6" />
        </h4>
        <footer className="flex flex-row justify-center w-full">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="lg"
            className="hover:scale-110 cursor-pointer mr-3"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="hover:scale-110 cursor-pointer mr-2"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            size="lg"
            className="hover:scale-110 cursor-pointer mr-3"
          />
        </footer>
      </div>
    </section>
  );
};
