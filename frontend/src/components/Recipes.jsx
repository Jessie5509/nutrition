import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import data from "../data.json";

export const Recipes = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = 4.5;

  const handlePrev = () => {
    setCurrentCard((prevCard) =>
      prevCard > 0 ? prevCard - 1 : totalCards - 1
    );
  };

  const handleNext = () => {
    setCurrentCard((prevCard) =>
      prevCard < totalCards - 1 ? prevCard + 1 : 0
    );
  };

  const translateValue = -currentCard * 27;

  const handleFlip = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex justify-center min-h-screen bg-recipes">
      <div className="w-3/4">
        <h4
          id="recipes"
          className="text-center font-main text-5xl mt-[4.5rem] mb-16"
        >
          Recipes
        </h4>
        <div className="flex flex-row justify-center">
          <div className="carousel">
            <button className="prev" onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div
              className="carousel-inner w-full"
              style={{ transform: `translateX(${translateValue}%)` }}
            >
              {data.recipes.map((rec, index) => (
                <div
                  className={`relative flex flex-col flex-1 justify-between w-1/4 min-w-[25%] h-[50lvh] rounded-lg m-4 p-6 bg-cover card-ts font-main text-white card-flip ${
                    index === flippedIndex ? "flipped" : ""
                  }`}
                  key={rec.title}
                >
                  <img src={`../${rec.image}`} alt="" className="brightness-[50%] w-full h-full absolute top-0 left-0 rounded-lg object-cover" />
                  <div className="card-front p-6">
                    <header className="text-2xl mb-6 min-h-[7dvh]">
                      {rec.title}
                    </header>

                    <div className="flex justify-around flip-button-container">
                      <div className="Details">
                        <h3>Level</h3>
                        <p>{rec.level}</p>
                      </div>

                      <div className="Details">
                        <h3>Time</h3>
                        <p>{rec.time}</p>
                      </div>

                      <div className="Details">
                        <h3>Rating</h3>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                    <div className="mt-8 max-h-[15dvh] tx-over">
                      <p className="text-base">{rec.directions}</p>
                    </div>
                    <div className="start-btn">
                      <button
                        className="flip-button"
                        onClick={() => handleFlip(index)}
                      >
                        Read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center card-back p-6">
                    <header className="text-2xl min-h-[7dvh]">Directions</header>
                    <p>{rec.directions}</p>
                    <div className="start-btn">
                      <button
                        className="flip-button"
                        onClick={() => handleFlip(index)}
                      >
                        Go back <i className="fas fa-long-arrow-alt-left"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="next" onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
