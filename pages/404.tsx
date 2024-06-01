import NotFound from "@/components/404";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <div
        className="flex flex-col items-start px-20 py-18 flex-grow bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/spiral.png")',
        }}
      >
        <Header />

        <div className="flex-grow relative pt-24">
          <div className="relative mt-5">
            <NotFound />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
