"use client";

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

const TrainerDashboard = () => {
  const attendanceData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Attendance',
        data: [28, 30, 25, 35, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-md">
        <h1 className="text-xl font-bold text-gray-800">Trainer Dashboard</h1>
        <div className="flex space-x-4">
          <button className="text-sm text-gray-600 hover:text-gray-800">Profile</button>
          <button className="text-sm text-gray-600 hover:text-gray-800">Logout</button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p className="text-2xl">500</p>
        </div>
        <div className="bg-gradient-to-r from-teal-400 to-green-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Total Trainers</h2>
          <p className="text-2xl">15</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Students</h2>
          <p className="text-2xl">300</p>
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Online Users</h2>
          <p className="text-2xl">45</p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="bg-white mt-6 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">Alex completed a workout session at 9:00 AM</li>
          <li className="text-gray-600">Sophia joined the Yoga class at 10:00 AM</li>
          <li className="text-gray-600">Liam checked attendance at 11:00 AM</li>
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

export default TrainerDashboard;
