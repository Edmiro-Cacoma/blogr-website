import Hero from "./Components/Hero";
import Header from "./Components/Header";
import ShowCaseOne from "./Components/showCaseOne";
import ShowCaseTwo from "./Components/showCaseTwo";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShowCaseOne />
        <ShowCaseTwo />
      </main>
    </>
  );
};
export default Home;
