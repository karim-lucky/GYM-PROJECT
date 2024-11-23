"use client"

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  
  // Register the required components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const attendanceData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Attendance',
        data: [30, 25, 35, 40, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-md">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <button className="text-sm text-gray-600 hover:text-gray-800">Settings</button>
          <button className="text-sm text-gray-600 hover:text-gray-800">Logout</button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p className="text-xl">500</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Trainers</h2>
          <p className="text-2xl">15</p>
        </div>
        <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Students</h2>
          <p className="text-2xl">300</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Online Users</h2>
          <p className="text-2xl">45</p>
        </div>

      </div>

      {/* Fees Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-md shadow-md  ">
          <h2 className="text-lg font-bold text-gray-800">Paid Fees</h2>
          <p className="text-2xl text-green-500">$8,000</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-800">Unpaid Fees</h2>
          <p className="text-2xl text-red-500">$2,000</p>
        </div>
      </div>

      {/* Activity Status */}
      <div className="bg-white mt-6 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-gray-800">Activity Status</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">John logged in at 9:00 AM</li>
          <li className="text-gray-600">Emily booked a class at 10:00 AM</li>
          <li className="text-gray-600">Michael made a payment at 11:00 AM</li>
        </ul>
      </div>

      {/* Attendance Graph */}
      <div className="bg-white mt-6 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-gray-800">Attendance Graph</h2>
        <Bar data={attendanceData} />
      </div>
    </div>
  );
};

export default Dashboard;
