// app/gdpr/page.js
export default function GDPRCompliance() {
    return (
      <main className="p-6">
        <h1 className="text-[#e74c3c] text-3xl font-bold mb-4">GDPR Compliance</h1>
        <p className="text-gray-700 mb-4">Effective Date: January 2024</p>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            At Anand Typing, we are committed to protecting your personal data and ensuring compliance 
            with the General Data Protection Regulation (GDPR) for our users in the European Union (EU).
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">Your GDPR Rights</h2>
          <p className="text-gray-700">
            As an EU user, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Access your data</li>
            <li>Request data correction or deletion</li>
            <li>Restrict or object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">How We Use Your Data</h2>
          <p className="text-gray-700">
            We process your data lawfully and only for:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Providing typing test services</li>
            <li>Improving user experience</li>
            <li>Ensuring security and fraud prevention</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-[#e74c3c] text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            For any GDPR-related inquiries, please email us at 
            <a href="mailto:gdpr@anandtyping.com" className="text-[#e74c3c]"> gdpr@anandtyping.com</a>.
          </p>
        </section>
      </main>
    );
  }
  