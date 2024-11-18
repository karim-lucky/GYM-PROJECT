import React from 'react';

const UserProfile = () => {

  return (
    <div className="max-w-5xl mx-auto p-6 bg-orange-400 shadow-md rounded-lg">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
        <img

          src='profileimage.jpg'
          alt="Profile"
          className="w-24  h-24 rounded-full shadow-md"
        />
        <div className="mt-4  md:mt-0">
          <h2 className="text-2xl font-bold ">KARIM UllAH</h2>

          <p className=""><b>Role: Member</b></p>
          <p className=""><b>Level: Biggner </b></p>

        </div>
      </div>


      <div className="mt-8 grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-4 bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">
            Personal Information
          </h3>
          <p className="text-sm text-gray-600">Email: </p>
          <p className="text-sm text-gray-600">Gender: </p>
          <p className="text-sm text-gray-600">Age: </p>
        </div>


        <div className="col-span-12 text-center text-white md:col-span-8 bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-3xl text-white mb-4">
            Health Information
          </h3>
          <div className='flex   justify-around pb-5 flex-wrap'>
            <div className='w-[180px] h-[180px]'>


              <a href="#" className="block max-w-sm p-6  bg-red-500  border border-gray-200 rounded-lg shadow hover:bg-red-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HEIGHT</h2>


                <span className='font-extrabold text-6xl'>20</span>
              </a>


            </div>
            <div className='w-[180px] h-[150px]'>


              <a href="#" className="block max-w-sm p-6  bg-red-500  border border-gray-200 rounded-lg shadow hover:bg-red-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weight</h2>
                {/* <h1 className=" dark:text-gray-400">23</h1
                > */}
                <span className='font-extrabold text-6xl'>20</span>
              </a>


            </div>
          </div>
          <div className='flex justify-around  flex-wrap'>

            <div className='w-[180px] h-[150px]'>


              <a href="#" className="block max-w-sm p-6  bg-red-500 border border-gray-200 rounded-lg shadow hover:bg-red-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HEIGHT</h2>
                {/* <h1 className=" dark:text-gray-400">23</h1
                > */}
                <span className='font-extrabold text-6xl'>20</span>
              </a>


            </div>
            <div className='w-[180px] h-[150px]  '>


              <a href="#" className="block max-w-sm p-6 bg-red-500 border border-gray-200 rounded-[20px] shadow-lg hover:bg-red-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HEART</h2>
                {/* <h1 className=" dark:text-gray-400">23</h1
                > */}
                <span className='font-extrabold text-6xl'>20</span>
              </a>


            </div>
          </div>
          {/* <p className="text-sm text-gray-600">Height: </p>
          <p className="text-sm text-gray-600">Weight: kg</p>
          <p className="text-sm text-gray-600">Goal: </p>
          <p className="text-sm text-gray-600">Level: </p> */}
        </div>
      </div>


      {/* Action Buttons */}
      <div className="mt-8 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600">
          Change Password
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
