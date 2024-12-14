import Image from "next/image";
import living from "@/../public/images/living.png"
export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
        <Image
      src={living}
      alt="livingroom"
      width={1440}
      height={812.5}
      />
      <div className="heroText bg-[#FFF3E3]">
          <h1 className="text-4xl font-bold mb-4">Discover Our New Collection</h1>
          <p className="text-gray-600 mb-6">
            Beautiful furniture to decorate your home.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Show More
          </button>
        </div>
        <div>
        </div>
        </div>
      </div>
    </section>
  );
}


