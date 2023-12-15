import React from 'react'

export const Services = () => {
    return (
        <div className='flex justify-center min-h-screen'>
            <div className='w-3/4'>
                <h4 className='text-center font-main text-5xl mt-16 mb-16'>Services</h4>
                <div className='flex flex-row justify-center'>
                    <div className='flex flex-col w-1/4 h-[50lvh] rounded-lg m-4 p-6 bg-consult bg-cover card-ts font-main text-white'>
                        <h2 className='text-2xl mt-20 mb-6'>Personalized Nutritional Care</h2>
                        <p className='text-sm'>You will learn what is the best diet for you and receive the support you need to achieve
                            your goals once and for all: without restrictive diets, with simple strategies that can be sustained over time.
                        </p>
                    </div>
                    <div className='flex flex-col w-1/4 h-[50lvh] rounded-lg m-4 p-6 bg-plan bg-cover card-ts font-main text-white'>
                        <h2 className='text-2xl mt-20 mb-6'>Meal Plans</h2>
                        <p className='text-sm'>Short on time to plan your menu?
                            With the Personalized Meal Plan, say hello to the disorganization of your meals and hello to
                            having a varied, tasty and healthy diet to achieve your goals.
                        </p>
                    </div>
                    <div className='flex flex-col w-1/4 h-[50lvh] rounded-lg m-4 p-6 bg-taller bg-cover card-ts font-main text-white'>
                        <h2 className='text-2xl mt-20 mb-6'>Nutrition Workshops</h2>
                        <p className='text-sm'>The talks and workshops are aimed at companies, schools or groups in general.
                            They provide updated and relevant information on food and nutrition, in an accessible language, with the objective of promoting healthy eating habits.
                            The topics addressed and the number of talks and/or workshops are defined according to the needs and interests of the group.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
