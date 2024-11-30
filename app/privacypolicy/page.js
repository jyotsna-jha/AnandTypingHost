// app/privacy-policy/page.js
export default function PrivacyPolicy() {
    return (
      <main className="p-6">
        <h1 className="text-[#e74c3c] text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">Effective Date: January 2024</p>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            Welcome to Anand Typing! Your privacy is our priority. This Privacy Policy explains how 
            we collect, use, and safeguard your data while using our typing test services.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">Data We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Personal Information (e.g., name, email, etc.)</li>
            <li>Typing test performance data</li>
            <li>Browser and usage data (e.g., IP address, operating system)</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">How We Use Your Data</h2>
          <p className="text-gray-700">
            We use your data to provide and enhance our services, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Customizing user experience</li>
            <li>Improving our typing tests</li>
            <li>Communicating updates or changes</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, modify, or delete your personal data. 
            Contact us at <a href="mailto:support@anandtyping.com" className="text-[#e74c3c]">support@anandtyping.com</a> 
            for any requests.
          </p>
        </section>
      </main>
    );
  }
  