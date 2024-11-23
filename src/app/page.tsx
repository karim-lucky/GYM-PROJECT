

import StudentDashboard from "@/app/Dashboards/Student-Dashboard/page";
import TrainerDashboard from "@/app/Dashboards/Trainer-Dashbord/page";
import Image from "next/image";
import UserProfile from "./profile/page";
import TrannerProfile from "./profile/trannerProfile/page";
import AdminDashboard from "@/app/Dashboards/Admin-Dashbord/page";

export default function Home() {
  return (
     <div>
      {/* <UserProfile></UserProfile> */}
      {/* <TrannerProfile></TrannerProfile> */}
      
      <AdminDashboard></AdminDashboard>
     </div>
  );
}
