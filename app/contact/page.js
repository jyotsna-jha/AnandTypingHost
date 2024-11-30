export default function ContactUs() {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-lg w-full">
          {/* Header */}
          <h1 className="text-3xl font-bold text-[#e74c3c] mb-1">Contact us</h1>
          <p className="text-gray-600 mb-6">We are always open to new connections.</p>
  
          {/* Form */}
          <form className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              />
            </div>
  
            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              />
            </div>
  
            {/* Interest Dropdown */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                What are you interested in?
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 shadow-sm focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              >
                <option value="">Choose an option...</option>
                <option value="option1">Mangal Typing</option>
                <option value="option2">English Typing</option>
                <option value="option3">Krutidev Typing</option>
                <option value="option3">MCQ Test</option>
                <option value="option3">Translation</option>
              </select>
            </div>
  
            {/* Hear About Us Dropdown */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                How did you hear about us?
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 shadow-sm focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              >
                <option value="">Choose an option...</option>
                <option value="social-media">Social Media</option>
                <option value="friends">Friends</option>
              </select>
            </div>
  
            {/* Questions Textarea */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Questions or comments?
              </label>
              <textarea
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              ></textarea>
            </div>
  
            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-[#e74c3c] border-gray-300 rounded focus:ring-[#e74c3c]"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to Terms of Use and Privacy Policy.
              </label>
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#e74c3c] text-white rounded-lg px-6 py-2 font-medium shadow-md hover:bg-red-600 focus:ring-2 focus:ring-[#e74c3c] focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }