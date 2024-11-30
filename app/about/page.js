export default function AboutAnandTyping() {
    return (
      <div className="relative min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-white text-white pt-20">
            <div className="mx-auto text-center flex flex-col items-center">
                <h1 className="text-5xl font-bold mb-10 text-[#e74c3c]">
                About Anand Typing
                </h1>
                <p className="text-lg mb-8 w-2/3" style={{ color: '#2d3436' }}>
                Welcome to Anand Typing Software, your ultimate destination for enhancing typing skills in both Hindi Mangal and English. Designed with precision and a user-centric approach, our platform empowers individuals to achieve typing mastery effortlessly.
                </p>
                <p className="text-lg mb-8 w-2/3" style={{ color: '#2d3436' }}>
                Whether you're preparing for government exams, improving office productivity, or simply aiming for personal growth, Anand Typing offers a structured environment tailored to your needs. Our innovative approach combines interactive exercises, progress tracking, and an easy-to-use interface to ensure a seamless learning experience.
                </p>
                <p className="text-lg mb-8 w-2/3" style={{ color: '#2d3436' }}>
                Join a thriving community of learners who have transformed their typing skills with our software. With a focus on accuracy, speed, and fluency, we help you overcome challenges and achieve excellence in typing.
                </p>
            </div>
        </section>
  
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold text-[#e74c3c] mb-12">Why Choose Anand Typing?</h2>
            <div className="grid md:grid-cols-3 gap-8 px-4"> {/* Add horizontal padding */}
              {/* Feature 1 */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">User-Friendly Interface</h3>
                <p className="text-gray-700">
                  With an intuitive design, Anand Typing ensures an effortless and engaging typing experience. Whether you're a beginner or a professional, our interface adapts to your needs.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real-Time Feedback</h3>
                <p className="text-gray-700">
                  Get instant feedback on your typing speed and accuracy. Track your progress with real-time results and improve faster with each session.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customized Lessons</h3>
                <p className="text-gray-700">
                  Anand Typing offers personalized lessons and challenges tailored to your current skill level, ensuring steady progress as you improve.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-16 bg-blue-50" id="testimonials">
          <div className="container mx-auto text-center" >
            <h2 className="text-4xl font-semibold text-[#e74c3c] mb-12">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg w-80 hover:shadow-xl transition duration-300 transform hover:scale-105">
                <p className="text-lg text-gray-700 mb-4">“Anand Typing helped me improve my typing speed by 50% in just one month! The lessons are easy to follow and the real-time feedback is fantastic.”</p>
                <p className="font-semibold text-blue-600">Jyotsna Jha</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg w-80 hover:shadow-xl transition duration-300 transform hover:scale-105">
                <p className="text-lg text-gray-700 mb-4">“I love how Anand Typing adjusts to my skill level. It makes learning to type fun and effective. Highly recommend!”</p>
                <p className="font-semibold text-blue-600">Nishan Khanal</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg w-80 hover:shadow-xl transition duration-300 transform hover:scale-105">
                <p className="text-lg text-gray-700 mb-4">“As a professional typist, Anand Typing helped me refine my skills. The lessons are challenging, but in the best way possible.”</p>
                <p className="font-semibold text-blue-600">Priyanshu Jha</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="py-16 bg-blue-50 text-gray-700 text-center">
        <div className="flex flex-col mx-auto items-center">

            <h2 className="text-4xl font-semibold mb-6">Ready to Improve Your Typing?</h2>
            <p className="text-lg mb-8 w-2/3">Join thousands of satisfied users who are already improving their typing skills with Anand Typing. Start today and take your typing to the next level!</p>
            <a
              href="/"
              className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </div>
    );
  }