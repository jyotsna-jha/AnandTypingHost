import React, { useState, useEffect } from "react";

const FrontPage = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://api.anandtyping.com/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories", error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.error("Navigating to quiz");
    // Navigate to Quiz with selectedCategory and name
  };

  return (
    <div className="front-page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default FrontPage;
