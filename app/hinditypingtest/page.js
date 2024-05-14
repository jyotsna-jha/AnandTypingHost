"use client"
import React, { useState, useEffect, useCallback } from "react";
import TestSetupForm from "@/components/TypingTest/TestSetupH";
import HindiTypingSpace from "@/components/TypingTest/HindiTYpingSpace2"; // Update import
import TestResults from "@/components/TypingTest/TestResultsH"; // Assuming you have a file for Hindi texts, update import

export default function TypingTest() {
  const [texts, setTexts] = useState({});
  const [availableDifficulties, setAvailableDifficulties] = useState([]);
  const [startTest, setStartTest] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [stats, setStats] = useState({});
  const [testText, setTestText] = useState("");
  const [duration, setDuration] = useState(60);
  const [userName, setUserName] = useState("");
  const [enableHighlight, setEnableHighlight] = useState(true);
  const [blockBackspace, setBlockBackspace] = useState(false); // Added blockBackspace state

  useEffect(() => {
    fetchTexts();
  }, []);

  const transformTexts = useCallback((fetchedTexts) => {
    const transformed = fetchedTexts.reduce((acc, item) => {
      if (!acc[item.difficulty]) {
        acc[item.difficulty] = [];
      }
      acc[item.difficulty].push(item.text);
      return acc;
    }, {});

    setAvailableDifficulties(Object.keys(transformed));
    return transformed;
  }, []);

  const fetchTexts = async () => {
    try {
      const response = await fetch("https://api.anandtyping.com/hinditext");
      if (response.ok) {
        const data = await response.json();
        setTexts(transformTexts(data));
      } else {
        throw new Error("Error fetching texts.");
      }
    } catch (error) {
      console.error("Error fetching texts:", error);
    }
  };

  const handleStartTest = useCallback(
    (selectedDuration, selectedDifficulty, selectedUserName, highlight, blockBackspace) => {
      const randomText =
        texts[selectedDifficulty][
          Math.floor(Math.random() * texts[selectedDifficulty].length)
        ];
      setTestText(randomText);
      setDuration(selectedDuration);
      setUserName(selectedUserName);
      setEnableHighlight(highlight);
      setBlockBackspace(blockBackspace);
      setStartTest(true);
    },
    [texts]
  );

  const handleTestComplete = (
    totalWords,
    correctWordsCount,
    wrongWordsCount,
    accuracy,
    grossSpeed,
    netSpeed,
    correctWords,
    wrongWords,
    backspaceCount
  ) => {
    setStats({
      totalWords,
      correctWordsCount,
      wrongWordsCount,
      accuracy,
      grossSpeed,
      netSpeed,
      correctWords,
      wrongWords,
      backspaceCount,
    });
    setTimeOver(true);
    setStartTest(false);
  };

  const retakeTest = () => {
    setTimeOver(false);
    setStats({});
  };

  if (startTest) {
    // Use HindiTypingSpace component instead of EnglishTypingSpace
    return (
      <HindiTypingSpace
        sampleText={testText}
        timeLimit={duration}
        userName={userName}
        onTestComplete={handleTestComplete}
        enableHighlight={enableHighlight}
        blockBackspace={blockBackspace} 
      />
    );
  }

  return (
    <>
      {timeOver ? (
        <TestResults {...stats} retakeTest={retakeTest} />
      ) : (
        <TestSetupForm
          onStartTest={handleStartTest}
          difficulties={availableDifficulties}
        />
      )}
    </>
  );
}
