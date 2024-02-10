"use client";

import React, { useState, useEffect } from "react";

const TextsList = ({ text }) => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchHindiText = async () => {
      try {
        const response = await fetch(`https://api.anandtyping.com/${text}`);
        if (!response.ok) {
          throw new Error(
            `Error fetching texts: ${response.status} - ${response.statusText}`
          );
        }
        const data = await response.json();
        setTexts(data);
      } catch (error) {
        console.error("Error fetching texts", error);
      }
    };

    fetchHindiText();
  }, []);

  const handleDeleteText = async (TextId) => {
    try {
      const response = await fetch(
        `https://api.anandtyping.com/admin/${text}/${TextId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        setTexts(texts.filter((tex) => tex.id !== TextId));
      }
    } catch (error) {
      console.error("Error deleting text", error);
    }
  };

  const getFirst20Words = (inputText) => {
    const words = inputText.split(" ");
    const truncatedText = words.slice(0, 20).join(" ");
    return truncatedText;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Texts</h2>
      {texts.map((tex) => (
        <div key={tex.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">
            <div className="flex-col">
              <div className="mb-2">{getFirst20Words(tex.text)}</div>
              <span>Category: {tex.difficulty}</span>
            </div>
            <button
              onClick={() => handleDeleteText(tex.id)}
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors text-sm"
            >
              Delete Text
            </button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TextsList;
