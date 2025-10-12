import Url_Form from "../components/Url_Form.jsx";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 py-16 md:py-24">
      
      {/* Tagline */}
                <span className="text-white">
          THE ALL-IN-ONE LINK MANAGEMENT SOLUTION
        </span>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
         Shorten, share, and track your links
        </span>
      </h2>

      {/* Paragraph */}
      <p className="text-neutral-400 max-w-2xl md:max-w-3xl mb-8 text-base md:text-lg leading-relaxed">
        Create branded short links that look great everywhere and boost your click-through rate.
        Built for speed, reliability, and insights.
      </p>

      {/* Input box */}
      <Url_Form />

      {/* Trusted by */}
      <div className="mt-10 md:mt-12 text-neutral-500 text-sm md:text-base">
        Trusted by creators · Teams and startups · Agencies · Enterprises
      </div>
    </main>
  );
};

export default Home;
