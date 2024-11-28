"use client";
import ChangePasswodModel from "@/components/userProfile/changePasswordModel";
import UserEditModel from "@/components/userProfile/userEditModel";
import React, { useState } from "react";

const UserProfile = () => {
  const [ismodelOpen, setIsModelOpen] = useState(false);
  const [passModel, setPassModel] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-md rounded-lg h-screen">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
        <img
          src="profileimage.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full shadow-md border-4 border-green-500"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-3xl font-bold text-green-400">KARIM UllAH</h2>
          <p className="text-lg text-gray-300">
            <b>Role:</b> Member
          </p>
          <p className="text-lg text-gray-300">
            <b>Level:</b> Beginner
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="mt-8 grid grid-cols-12 gap-4">
        {/* Personal Info */}
        <div className="col-span-12 md:col-span-4 bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg text-green-400 mb-4">
            Personal Information
          </h3>
          <p className="text-sm text-gray-300">Email: user@example.com</p>
          <p className="text-sm text-gray-300">Gender: Male</p>
          <p className="text-sm text-gray-300">Age: 25</p>
        </div>

        {/* Health Info */}
        <div className="col-span-12 md:col-span-8 bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-3xl text-green-400 mb-4">
            Health Information
          </h3>
          <div className="flex justify-around pb-5 flex-wrap">
            <div className=" ">
              <a
                href="#"
                className="block max-w-sm p-6 bg-gradient-to-r from-blue-500 to-blue-600 border border-blue-300 rounded-lg shadow hover:from-blue-600 hover:to-blue-700"
              >
                <h2 className="mb-2 text-2xl font-bold text-white">HEIGHT</h2>
                <span className="font-extrabold  text-2xl text-white">180cm</span>
              </a>
            </div>

            <div className=" ">
              <a
                href="#"
                className="block max-w-sm p-6 bg-gradient-to-r from-green-500 to-green-600 border border-green-300 rounded-lg shadow hover:from-green-600 hover:to-green-700"
              >
                <h2 className="mb-2 text-2xl font-bold text-white">WEIGHT</h2>
                <span className="font-extrabold  text-2xl text-white">75kg</span>
              </a>
            </div>
          </div>

          <div className="flex justify-around flex-wrap">
            <div className=" ">
              <a
                href="#"
                className="block max-w-sm p-6 bg-gradient-to-r from-red-500 to-red-600 border border-red-300 rounded-lg shadow hover:from-red-600 hover:to-red-700"
              >
                <h2 className="mb-2 text-2xl font-bold text-white">HEART</h2>
                <span className="font-extrabold text-2xl text-white">72 BPM</span>
              </a>
            </div>

            <div className=" w-[150px]">
              <a
                href="#"
                className="block max-w-sm p-6 bg-gradient-to-r from-yellow-500 to-yellow-600 border border-yellow-300 rounded-lg shadow hover:from-yellow-600 hover:to-yellow-700"
              >
                <h2 className="mb-2 text-2xl font-bold text-white">BMI</h2>
                <span className="font-extrabold text-4xl text-white">22</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => setIsModelOpen(true)}
          className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Update Profile
        </button>
        <button
          onClick={() => setPassModel(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          Change Password
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700">
          Logout
        </button>
      </div>

      {/* Modals */}
      {ismodelOpen && <UserEditModel setIsModalOpen={setIsModelOpen} />}
      <ChangePasswodModel passModel={passModel} setPassModel={setPassModel} />
    </div>
  );
};

export default UserProfile;
