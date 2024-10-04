import React from "react";
import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";

const DashboardWrapper = ({children}: {children: React.ReactNode }) => {
  return (
    <>
    <Header></Header>
    <div className="flex min-h-screen w-full bg-gray-50 text-black">      
     {children}
      </div>
      </>
  )
}

export default DashboardWrapper;

