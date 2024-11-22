"use client"
import GymTrainerProfile from "@/app/tranner/page";
import { useState } from "react"

export default function TrannerProfile(){


    const[isModalOpen,setIsModalOpen]=useState(false);
    return <div>
        <div className="bg-gray-100 min-h-screen p-8">
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Profile Header */}
    <div className="relative">
      <img
        src="https://via.placeholder.com/800x300" // Replace with a gym background image
        alt="Gym background"
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-36 left-8 flex items-center">
        <img
          src="https://via.placeholder.com/150" // Replace with trainer's photo
          alt="Trainer"
          className="w-32 h-32 object-cover border-4 border-white rounded-full"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
          <p className="text-sm text-gray-600">Certified Fitness Trainer</p>
        </div>
      </div>
    </div>

    {/* Profile Details */}
    <div className="px-8 py-12">
      {/* Bio Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600">
          I am a certified gym trainer with over 5 years of experience helping
          people achieve their fitness goals. My specialties include strength
          training, weight loss programs, and personalized workout plans.
        </p>
      </section>

      {/* Specialization Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Specializations</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>🏋️‍♂️ Strength Training</li>
          <li>⚡ High-Intensity Interval Training (HIIT)</li>
          <li>🥗 Nutrition Coaching</li>
          <li>🏃‍♂️ Cardio Workouts</li>
        </ul>
      </section>

      {/* Ratings Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Ratings</h2>
        <div className="flex items-center mt-4">
          <div className="flex space-x-1 text-yellow-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <span className="ml-2 text-gray-600">(4.5/5 based on 120 reviews)</span>
        </div>
      </section>

      {/* Booking Section */}
      <section className="text-center">
      <div className="p-8">
      
      {/* <BookSessionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      <GymTrainerProfile></GymTrainerProfile>

    </div>
        <p className="mt-2 text-sm text-gray-500">Available slots: 10 AM - 6 PM</p>
      </section>
    </div>
  </div>
</div>

    </div>
}