import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Add English Tests",
  description: "Add english text for test",
  keywords:
  "Hindi typing, hindi online typing, mangal typing, online mangal typing, hindi unicode, online typing, english typing, online english typing, india typing, baba typing, cpct, cpct typing, cpct mangal typing, cpct previous paper, cpct mock test, cpct English typing, cpct kaise pass kre, online typing kese seekhe, computer typing, mp High court, mp High court typing, mp High court dictation, mp High court hindi dictation, mp High court english dictation, mp High court legal matter, mp High court legal dictation, hindi legal typing, english legal matter, hindi Indic 3, mangal kese download kre, bina mangal download kre online typing, hindi Indic 3 input, computer mock, computer mcq, keyboard mcq, mcq test, cpct free Mock test, cpct online mock test, cpct previous paper, cpct old paper, sahayk grade3, Mp High court JJA typing test, MP High court JJA online typing test, anand typing, anand typing online",
};

export default function root({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
