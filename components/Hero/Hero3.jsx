import React from "react";
const Hero3 = () => {
    return (
        <section className="bg-white text-gray-700">
            <div className="container mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold text-[#e74c3c] mb-8 mx-auto max-w-5xl leading-snug">
                    Why Anand Typing is the Best Choice for You?
                </h2>
                <div className="grid md:grid-cols-1 gap-12 px-4">
                    {/* Center the Content and make the text uniform and balanced */}
                    <div className="flex flex-col justify-center items-center mx-auto max-w-4xl">
                        <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-4xl mx-auto text-justify">
                            Anand Typing Software offers a highly customizable typing experience designed for all levels of typists. Whether you're a beginner looking to improve your typing skills or a professional aiming for peak speed and accuracy, our software has features that will help you achieve your goals. With a clean and user-friendly interface, real-time progress tracking, and interactive lessons, Anand Typing makes learning to type both fun and effective. The most significant feature of Anand Typing is its inclusion of Mangal typing in the Remington Gail layout, making it ideal for users who type in Hindi. Additionally, Anand Typing shows the correct word for any incorrectly typed word, helping you learn from mistakes. It also includes a backspace block feature, ensuring that users focus on accuracy and avoid unnecessary corrections. Experience personalized lessons based on your skill level and see your progress soar in no time. Start typing today and join thousands of users who have already improved their skills and increased their typing speed. We guarantee you’ll love the experience and the results.            </p>
                    </div>
                </div>
                {/* Key Features at a Glance */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-[#e74c3c] mb-6">
                        Key Features at a Glance
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        {/* Individual Cards */}
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Download Pdf</h3>
                            <p className="text-gray-700">
                                You can easily download typing content and other learning materials directly from the website.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real-Time Feedback</h3>
                            <p className="text-gray-700">
                                Get instant feedback on your performance to track improvements.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Typing Tests</h3>
                            <p className="text-gray-700">
                                Enhance your typing speed and accuracy with various tests.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">MCQ tests</h3>
                            <p className="text-gray-700">
                                Practice mcq questions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Frequently Asked Questions Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto text-center" id="faq">
                    <h3 className="text-3xl font-semibold text-[#e74c3c] mb-8">
                        Frequently Asked Questions
                    </h3>
                    <div className="text-left max-w-3xl mx-auto">
                        {/* FAQ Item 1 */}
                        <div className="mb-8">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">
                                What makes Anand Typing different from other typing software?
                            </h4>
                            <p className="text-gray-600 text-lg">
                                Anand Typing offers highly personalized lessons, real-time progress tracking, and interactive tests, which makes learning fun and tailored to your speed and accuracy goals.
                            </p>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="mb-8">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">
                                Is Anand Typing suitable for beginners?
                            </h4>
                            <p className="text-gray-600 text-lg">
                                Yes! Anand Typing is perfect for beginners. It provides a user-friendly interface with guided lessons designed for all skill levels, including those just starting out.
                            </p>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="mb-8">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">
                                Can I track my typing progress in real-time?
                            </h4>
                            <p className="text-gray-600 text-lg">
                                Absolutely! Anand Typing provides real-time feedback to help you track your progress and see where you need to improve, whether it's speed or accuracy.
                            </p>
                        </div>
                        {/* FAQ Item 4 */}
                        <div className="mb-8">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">
                                Is both keyboard layouts, Remington Gail and Inscript, available in Mangal Typing?
                            </h4>
                            <p className="text-gray-600 text-lg">
                                No, currently Mangal Typing is only available in the Remington Gail layout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Call-to-Action Section */}
            {/* <div className="text-center py-16 bg-blue-50">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                    Ready to Take Your Typing Skills to the Next Level?
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto text-justify">
                    Join our growing community of typists and start your journey today. Whether you’re aiming for faster typing speed or better accuracy, Anand Typing is here to guide you every step of the way.
                </p>
                <a
                    href="/contact"
                    className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
                >
                    Get Started Now
                </a>
            </div> */}
        </section>
    );
};
export default Hero3;