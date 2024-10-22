"use client";

import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import Header from "./(components)/Header";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <div className="flex min-h-screen w-full bg-gray-50 text-black">
          {children}
        </div>
      </Provider>
    </>
  );
};

export default DashboardWrapper;
