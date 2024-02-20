import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <section className="min-h-screen bg-contact flex justify-center items-center relative">
      <div>
        <article className="flex flex-col items-center">
          <h2
            id="contact"
            className="text-center font-main text-5xl mt-[4.5rem] mb-16"
          >
            Get In Touch!
          </h2>
          <img src="../images/jfb.png" alt="Logo" className="w-24 h-24 mb-10" />
        </article>
        <div className="flex justify-center">
          <form className="max-w-2xl">
            <div className="flex justify-center">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border font-main"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border font-main"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <textarea
                  rows="6"
                  maxLength="3000"
                  placeholder="Your message"
                  className="border font-main"
                  required
                />
              </div>
            </div>
            <span className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-lg font-main"
              >
                Contact
              </button>
            </span>
          </form>
        </div>
      </div>
      <footer className="absolute bottom-0 left-6">
        <FontAwesomeIcon
          icon={faFacebookF}
          size="lg"
          className="absolute bottom-8 left-8 hover:scale-110 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          className="absolute bottom-8 left-16 hover:scale-110 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          size="lg"
          className="absolute bottom-8 left-24 hover:scale-110 cursor-pointer"
        />
      </footer>
    </section>
  );
};
