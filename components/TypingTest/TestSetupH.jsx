"use client";
import React, { useState } from "react";

const TestSetupForm1 = ({ onStartTest, difficulties }) => {
  const [userName, setUserName] = useState("");
  const [duration, setDuration] = useState(60); // Default duration to 60 seconds
  const [difficulty, setDifficulty] = useState("");
  const [enableHighlight, setEnableHighlight] = useState(true);
  const [blockBackspace, setBlockBackspace] = useState(false); // Added blockBackspace state

  const handleStartTest = (e) => {
    e.preventDefault();
    onStartTest(duration, difficulty, userName, enableHighlight,blockBackspace); // Use the callback to pass the values to the parent component
  };

  return (
    <>
      <div className="p-4 max-w-md mx-auto bg-gray-200 rounded-lg mb-10 font-poppins mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-[#222f3e]">
          Krutidev Test Setup
        </h2>
        <form onSubmit={handleStartTest}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-medium text-[#222f3e]"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="duration"
              className="block font-medium text-[#222f3e]"
            >
              Select Test Duration:
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base text-[#8395a7]"
              required
            >
              <option value="30">30 seconds</option>
              <option value="40">40 seconds</option>
              <option value="60">1 minute</option>
              <option value="180">3 minutes</option>
              <option value="300">5 minutes</option>
              <option value="600">10 minutes</option>
              <option value="900">15 minutes</option>
              <option value="1800">30 minutes</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-[#222f3e]">
              Select Category:
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base text-[#8395a7]"
              required
             
            >
              <option value="" disabled >
                Select Category
              </option>
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  
                </option>
              ))}
              
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="enableHighlight"
              className="font-medium text-[#222f3e] flex items-center"
            >
              <input
                type="checkbox"
                id="enableHighlight"
                checked={enableHighlight}
                onChange={(e) => setEnableHighlight(e.target.checked)}
                className="mr-2"
              />
              Enable Highlight
            </label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="blockBackspace"
              className="font-medium text-[#222f3e] flex items-center"
            >
              <input
                type="checkbox"
                id="blockBackspace"
                checked={blockBackspace}
                onChange={(e) => setBlockBackspace(e.target.checked)}
                className="mr-2"
              />
              Block Backspace
            </label>
          </div>

          <button
            type="submit"
            className="bg-red-400 text-white rounded p-4 cursor-pointer w-full hover:scale-105 transform transition-transform duration-200"
          >
            Start Test
          </button>
        </form>
      </div>
    </>
  );
};

export default TestSetupForm1;
