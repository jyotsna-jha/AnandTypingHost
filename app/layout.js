import "./globals.css";
import Adsense from "@/components/Adsense";
import Script from "next/script";
export const metadata = {
  title: "Anand Typing",
  description:
    "Type faster, type smarter with Anand Typing. Boost your typing skills through engaging lessons and challenges. Join us today and unleash your typing potential! Whether you're a beginner or looking to enhance your skills, Anand Typing is your key to typing excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0K41PR2K64"></Script>
        <Script id="google-analytics">
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0K41PR2K64');
            `
          }

        </Script>
      </head>
      <body>
        {children}
        <Adsense pId="ca-pub-5827686928220119" />
      </body>
    </html>
  );
}