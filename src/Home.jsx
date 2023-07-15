import Hero from "./Components/Hero";
import Header from "./Components/Header";
import ShowCaseOne from "./Components/showCaseOne";
import ShowCaseTwo from "./Components/showCaseTwo";
import ShowCaseThree from "./Components/showCaseThree";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShowCaseOne />
        <ShowCaseTwo />
        <ShowCaseThree />
      </main>
      <Footer />
    </>
  );
};
export default Home;
