import video1 from "../assets/agric.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Supporting and Scaling Up

        <span className="bg-gradient-to-r from-green-800 to-yellow-200 text-transparent bg-clip-text">
          {" "}
          Urban Planning & Built Environment
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Spectrum Urban Solutions was registered on 21 May 2021 and incorporated under the Companies Act, 2015 as a private limited start-up company committed to sustainably transforming the Kenyan urban planning, urban design, and built environment sectors. We empower the next generation of urban professionals with entrepreneurial skills through the adoption of the most innovative and sustainable practices.
      </p>
      {/* <div className=" justify-center my-10">
        <a
          href="#"
          className="hover:bg-green-700 bg-green-200 py-3 px-4 mx-3 rounded-md"
        >
          Learn more
        </a>

      </div> */}
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-yellow-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-blue-200 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
