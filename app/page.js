import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Hero1 from "@/components/Hero/Hero1";
// import Hero2 from "@/components/Hero/Hero2";
// import BannerAdLong from "@/components/BannerAdLong";
import Hero3 from "@/components/Hero/Hero3";
import dynamic from 'next/dynamic';

const Hero2 = dynamic(() => import('../components/Hero/Hero2'), {
  ssr: false,
});
export default function Home() {
  return (
    <>
     <NavBar />
     <Hero2 title={"Anand Typing"}/>
     {/* <BannerAdLong /> */}
     <Hero1/>
     <Hero3/>
     <Footer/>
    </>
 
  );
}
