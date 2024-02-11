"use client"
import { useState } from 'react';

const TranslationPage = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('hi'); // Hindi
  const [outputLanguage, setOutputLanguage] = useState('en'); // English

  const languages = [
    {
      no: "27",
      name: "Hindi",
      native: "हिन्दी",
      code: "hi",
    },
    {
      no: "16",
      name: "English",
      native: "English",
      code: "en",
    },
  ];

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTranslate = async () => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
      inputText
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setOutputText(data[0].map((item) => item[0]).join(''));
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const handleInputReset = () => {
    setInputText('');
  };

  const handleOutputReset = () => {
    setOutputText('');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl mb-6 font-bold text-center font-poppins text-[#e74c3c]">Language Translator</h1>

      <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-6">
        {/* Input */}
        <div className="mb-4">
          <label htmlFor="inputText" className="block mb-2 font-poppins">
            Input Text:
          </label>
          <textarea
            id="inputText"
            className="w-full p-2 border border-gray-300 rounded font-poppins"
            rows="6"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text to translate..."
          ></textarea>
          <button
            className="mt-2 px-3 py-1 bg-[#e74c3c] hover:bg-gray-300 rounded text-white"
            onClick={handleInputReset}
          >
            Reset Input
          </button>
        </div>

        {/* Language Selection */}
        <div className="flex mb-4">
          {/* Input Language */}
          <div className="mr-4 flex-1">
            <label htmlFor="inputLanguage" className="block mb-2 font-poppins">
              Input Language:
            </label>
            <select
              id="inputLanguage"
              className="w-full p-2 border border-gray-300 rounded font-poppins"
              value={inputLanguage}
              onChange={(e) => setInputLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name} ({lang.native})
                </option>
              ))}
            </select>
          </div>

          {/* Output Language */}
          <div className="flex-1">
            <label htmlFor="outputLanguage" className="block mb-2 font-poppins">
              Output Language:
            </label>
            <select
              id="outputLanguage"
              className="w-full p-2 border border-gray-300 rounded font-poppins"
              value={outputLanguage}
              onChange={(e) => setOutputLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name} ({lang.native})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Translate Button */}
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full font-poppins"
            onClick={handleTranslate}
          >
            Translate
          </button>
        </div>

        {/* Output */}
        <div>
          <label htmlFor="outputText" className="block mb-2 font-poppins">
            Output Text:
          </label>
          <textarea
            id="outputText"
            className="w-full p-2 border border-gray-300 rounded font-poppins"
            rows="6"
            value={outputText}
            readOnly
            placeholder="Translated text will appear here..."
          ></textarea>
          <button
            className="mt-2 px-3 py-1 bg-[#e74c3c] hover:bg-gray-300 rounded text-white"
            onClick={handleOutputReset}
          >
            Reset Output
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationPage;
