// app/gdpr/layout.js
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "GDPR Compliance - Anand Typing",
  description: "Understand how Anand Typing complies with GDPR and protects your data.",
};

export default function GDPRLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
