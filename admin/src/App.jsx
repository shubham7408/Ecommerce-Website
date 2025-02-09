/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-gray-5- min-h-screen">
      <>
        <Navbar />
        <hr />
        <div className="flex w-full">
          <SideBar />
        </div>
      </>
    </div>
  );
}

export default App;
