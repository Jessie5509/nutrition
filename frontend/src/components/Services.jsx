import React from "react";

export const Services = () => {
  return (
    <section className="flex justify-center min-h-screen bg-services">
      <div className="w-3/4">
        <h4
          id="services"
          className="text-center font-main text-5xl mt-[4.5rem] mb-16"
        >
          Services
        </h4>
        <div className="relative flex flex-row justify-center">
          <div className="absolute top-0 left-20 w-1/4 h-[55dvh] rounded-lg m-4 bg-consult bg-cover card-ts font-main text-white object-cover hover:scale-105 hover:cursor-pointer">
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <article className="relative p-6 z-10">
              <h2 className="text-3xl mt-20 mb-6">
                Personalized Nutritional Care
              </h2>
              <p className="text-base">
                You will learn what is the best diet for you and receive the
                support you need to achieve your goals once and for all: without
                restrictive diets, with simple strategies that can be sustained
                over time.
              </p>
            </article>
          </div>

          <div className="absolute top-0 w-1/4 h-[55dvh] rounded-lg m-4 bg-plan bg-cover card-ts font-main text-white object-cover hover:scale-105 hover:cursor-pointer">
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <article className="relative p-6 z-10">
              <h2 className="text-3xl mt-20 mb-6">Meal Plans</h2>
              <p className="text-base">
                Finding it tough to plan your meals amidst a busy schedule? Our
                Personalized Meal Plan is the perfect solution. Say goodbye to
                mealtime stress and hello to a delicious, varied, and nutritious
                diet designed specifically for you. With easy-to-follow recipes
                and flexible options, eating healthy has never been easier
              </p>
            </article>
          </div>

          <div className="absolute top-0 right-20 w-1/4 h-[55dvh] rounded-lg m-4 bg-taller bg-cover card-ts font-main text-white object-cover hover:scale-105 hover:cursor-pointer">
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <article className="relative p-6 z-10">
              <h2 className="text-3xl mt-20 mb-6">Nutrition Workshops</h2>
              <p className="text-base">
                The talks and workshops are aimed at companies, schools or
                groups in general. They provide updated and relevant information
                on food and nutrition, in an accessible language, with the
                objective of promoting healthy eating habits. The topics
                addressed and the number of talks and/or workshops are defined
                according to the needs and interests of the group.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
