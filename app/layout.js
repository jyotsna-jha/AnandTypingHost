import "./globals.css";
import Adsense from "@/components/Adsense";
import Script from "next/script";
export const metadata = {
  title: "Anand Typing",
  description:
    "Type faster, type smarter with Anand Typing. Boost your typing skills through engaging lessons and challenges. Join us today and unleash your typing potential! Whether you're a beginner or looking to enhance your skills, Anand Typing is your key to typing excellence.",
    keywords:
    "Hindi typing, hindi online typing, mangal typing, online mangal typing, hindi unicode, online typing, english typing, online english typing, india typing, baba typing, cpct, cpct typing, cpct mangal typing, cpct previous paper, cpct mock test, cpct English typing, cpct kaise pass kre, online typing kese seekhe, computer typing, mp High court, mp High court typing, mp High court dictation, mp High court hindi dictation, mp High court english dictation, mp High court legal matter, mp High court legal dictation, hindi legal typing, english legal matter, hindi Indic 3, mangal kese download kre, bina mangal download kre online typing, hindi Indic 3 input, computer mock, computer mcq, keyboard mcq, mcq test, cpct free Mock test, cpct online mock test, cpct previous paper, cpct old paper, sahayk grade3, Mp High court JJA typing test, MP High court JJA online typing test, anand typing, anand typing online",
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