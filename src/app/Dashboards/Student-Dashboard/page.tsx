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

const StudentDashboard = () => {
  const attendanceData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Attendance',
        data: [90, 85, 88, 92, 95],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-md">
        <h1 className="text-xl font-bold text-gray-800">Student Dashboard</h1>
        <button className="text-sm text-gray-600 hover:text-gray-800">Logout</button>
      </header>

      {/* Fees Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Paid Fees</h2>
          <p className="text-2xl">$1,500</p>
        </div>
        <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Unpaid Fees</h2>
          <p className="text-2xl">$500</p>
        </div>
      </div>

      {/* Attendance Graph */}
      <div className="bg-white mt-6 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-gray-800">Attendance Graph</h2>
        <Bar data={attendanceData} />
      </div>

      {/* Activity Section */}
      <div className="bg-white mt-6 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-gray-800">Activity Status</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">You joined a Yoga class at 9:00 AM</li>
          <li className="text-gray-600">Completed a workout session at 10:30 AM</li>
          <li className="text-gray-600">Payment made for next month at 11:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
