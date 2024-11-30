// app/privacy-policy/layout.js
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Privacy Policy - Anand Typing",
  description: "Learn about our privacy practices and data usage at Anand Typing.",
};

export default function PrivacyPolicyLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
