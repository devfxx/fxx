import Bio from "@/components/Bio";
import EmberBackground from "@/components/Embers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col items-start px-20 py-18 flex-grow bg-cover bg-center">
        <EmberBackground />
        <Header />

        <div className="flex-grow relative pt-24">
          <div className="relative mt-5">
            <Bio />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
