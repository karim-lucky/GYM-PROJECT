"use client"; 

<<<<<<< Updated upstream
import React from "react";
import SignUpForm from "./sighnup/page";
// import Login from "./loginform/page";
=======
import Dashboard from "@/components/Admin-Dashbord/admindash";
import StudentDashboard from "@/components/Student-Dashboard/student-dashboard";
import TrainerDashboard from "@/components/Trainer-Dashbord/trainer-dashboard";
import Image from "next/image";
 
import UserProfile from "./profile/userProfile/page";
import TrannerProfile from "./profile/trannerProfile/page";
>>>>>>> Stashed changes


const Page = () => {
  return (
<<<<<<< Updated upstream
    <div>
      {/* <SignUpForm /> */}
      <SignUpForm></SignUpForm>
      {/* <Login></Login> */}
      
    </div>
=======
     <div>
      <UserProfile></UserProfile>
      {/* <TrannerProfile></TrannerProfile> */}
      {/* <TrannerProfile></TrannerProfile> */}

     </div>
>>>>>>> Stashed changes
  );
};

export default Page;
