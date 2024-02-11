const Result = ({ score, totalQuestions, allquestions }) => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      <p className="text-lg mb-3">
        Your Score: {score} / {totalQuestions}
      </p>
      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">
          Review Your Answers:
        </h3>
        {allquestions.map((item, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{item.questionText}</p>
            <p className="text-green-500">
              Correct Answer: {item.correctAnswer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Result;
