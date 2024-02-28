import React, { useRef, useEffect } from "react";

function TextHighlighter({ sampleText, userText }) {
  const containerRef = useRef(null);
  const currentWordIndex = userText.split(" ").length - 1;
  const sampleWords = sampleText.split(/\s+/);

  useEffect(() => {
    const container = containerRef.current;
    const lineHeight = 38; // Adjust the multiplier based on your font size and desired speed
    const wordsPerLine =22 ; // Adjust based on your layout

    // Calculate the line number and word index within that line
    const lineIndex = Math.floor(currentWordIndex / wordsPerLine);
    const wordIndexInLine = currentWordIndex % wordsPerLine;

    // Calculate the target scroll position
    const targetScrollPosition = lineIndex * lineHeight;

    // Scroll smoothly to the target position
    container.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }, [sampleText, userText]);

  return (
    <div
      ref={containerRef}
      className="bg-white border border-gray-300 rounded p-4 mb-4 h-60 overflow-y-auto"
      style={{ fontSize: "20px", scrollBehavior: "smooth" }}
    >
      {sampleWords.map((word, idx) => {
        let isCurrentWord = idx === currentWordIndex;

        return (
          <React.Fragment key={idx}>
            <span
              className={`
                ${isCurrentWord ? "bg-yellow-200" : ""}
              `}
            >
              {word}
            </span>
            {idx !== sampleWords.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default TextHighlighter;
