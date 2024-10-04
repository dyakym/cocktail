import React from "react";
import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";

const DashboardWrapper = ({children}: {children: React.ReactNode }) => {
  return (
    <>
    <Header></Header>
    <div className="flex min-h-screen w-full bg-gray-50 text-black">      
      <main className={`flex w-full flex-col bg-gray-50 dark:bg-gray-600`}>
      <Sidebar></Sidebar>
      {children}
      </main>
      </div>
      </>
  )
}

export default DashboardWrapper;

